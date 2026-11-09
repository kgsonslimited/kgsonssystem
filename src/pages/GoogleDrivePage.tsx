import React, { useState, useEffect, useRef } from 'react';
import { User } from 'firebase/auth';
import {
  Cloud,
  UploadCloud,
  FolderPlus,
  RefreshCw,
  ExternalLink,
  Trash2,
  FileArchive,
  FileText,
  FileCode,
  Folder,
  CheckCircle2,
  AlertCircle,
  HardDrive,
  LogOut,
  ShieldCheck,
  Download,
  Info
} from 'lucide-react';
import {
  initAuth,
  googleSignIn,
  logout,
  getAccessToken,
  GOOGLE_DRIVE_SCOPES
} from '../services/firebaseAuth';
import {
  listDriveFiles,
  uploadCompleteAppToDrive,
  uploadAllSourceFilesToDrive,
  uploadFileToDrive,
  findOrCreateFolder,
  deleteDriveFile,
  getDriveAccountInfo,
  DriveFileItem,
  DriveAboutInfo
} from '../services/googleDrive';
import { GoogleSignInButton } from '../components/GoogleSignInButton';
import { DeleteConfirmationModal } from '../components/DeleteConfirmationModal';

export const GoogleDrivePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState<DriveAboutInfo | null>(null);

  // Files & Drive Explorer
  const [files, setFiles] = useState<DriveFileItem[]>([]);
  const [currentFolder, setCurrentFolder] = useState<DriveFileItem | null>(null);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  // Upload App State
  const [isUploadingApp, setIsUploadingApp] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatusText, setUploadStatusText] = useState('');
  const [lastUploadedBackup, setLastUploadedBackup] = useState<{
    folderLink?: string;
    archiveLink?: string;
    archiveName?: string;
  } | null>(null);

  // Custom File Upload
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadingCustomFile, setIsUploadingCustomFile] = useState(false);

  // Create Folder
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  // Delete Confirmation Modal
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    file: DriveFileItem | null;
    isDeleting: boolean;
  }>({
    isOpen: false,
    file: null,
    isDeleting: false,
  });

  // Initialize Auth
  useEffect(() => {
    const unsubscribe = initAuth(
      (authedUser, accessToken) => {
        setUser(authedUser);
        setToken(accessToken);
        setIsAuthLoading(false);
      },
      () => {
        setUser(null);
        setToken(null);
        setIsAuthLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Fetch Drive Files & Account Info when authenticated
  useEffect(() => {
    if (token) {
      loadDriveData(token);
    } else {
      setFiles([]);
      setAccountInfo(null);
      setCurrentFolder(null);
    }
  }, [token]);

  const loadDriveData = async (accessToken: string, folderId?: string) => {
    setIsLoadingFiles(true);
    setStatusMessage(null);
    try {
      // 1. Fetch about info
      try {
        const info = await getDriveAccountInfo(accessToken);
        setAccountInfo(info);
      } catch (e) {
        console.warn('Could not fetch storage quota:', e);
      }

      // 2. Fetch or locate default app folder if no folder selected
      let activeFolderId = folderId;
      if (!activeFolderId && !currentFolder) {
        try {
          const appFolder = await findOrCreateFolder(
            accessToken,
            'KGSONS-Official-Website-System'
          );
          setCurrentFolder(appFolder);
          activeFolderId = appFolder.id;
        } catch (e) {
          console.warn('Could not auto-locate KGSONS folder, listing root instead');
        }
      } else if (currentFolder) {
        activeFolderId = currentFolder.id;
      }

      // 3. List files in the folder
      const fileList = await listDriveFiles(accessToken, {
        parentFolderId: activeFolderId,
        pageSize: 50,
      });
      setFiles(fileList);
    } catch (error: any) {
      console.error('Error loading Drive data:', error);
      setStatusMessage({
        type: 'error',
        text: `Error accessing Google Drive: ${error.message || 'Please check permissions'}`,
      });
    } finally {
      setIsLoadingFiles(false);
    }
  };

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setStatusMessage(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        setStatusMessage({
          type: 'success',
          text: `Connected to Google Drive as ${res.user.email}`,
        });
      }
    } catch (error: any) {
      console.error('Sign-in error:', error);
      setStatusMessage({
        type: 'error',
        text: `Google Sign-In failed: ${error.message || 'Please allow the popup'}`,
      });
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setFiles([]);
    setCurrentFolder(null);
    setAccountInfo(null);
    setStatusMessage({
      type: 'info',
      text: 'Signed out of Google Drive session.',
    });
  };

  // Main Upload Application Function
  const handleUploadApp = async (mode: 'all-files' | 'archive' = 'all-files') => {
    let currentToken = token;
    if (!currentToken) {
      setIsSigningIn(true);
      try {
        const res = await googleSignIn();
        if (!res) return;
        setUser(res.user);
        setToken(res.accessToken);
        currentToken = res.accessToken;
      } catch (err: any) {
        setStatusMessage({
          type: 'error',
          text: `Google Sign-in failed: ${err.message || 'Please allow the popup'}`,
        });
        return;
      } finally {
        setIsSigningIn(false);
      }
    }

    setIsUploadingApp(true);
    setUploadProgress(5);
    setUploadStatusText('Connecting to Google Drive...');
    setStatusMessage(null);

    try {
      if (mode === 'all-files') {
        const result = await uploadAllSourceFilesToDrive(
          currentToken,
          (status, pct) => {
            setUploadStatusText(status);
            setUploadProgress(pct);
          }
        );

        setLastUploadedBackup({
          folderLink: result.rootFolder.webViewLink,
          archiveLink: result.archiveItem?.webViewLink,
          archiveName: `All ${result.uploadedCount} application files & source tree`,
        });

        setStatusMessage({
          type: 'success',
          text: `Successfully uploaded all ${result.uploadedCount} application source files directly into your Google Drive!`,
        });

        loadDriveData(currentToken, result.rootFolder.id);
      } else {
        const result = await uploadCompleteAppToDrive(
          currentToken,
          (status, pct) => {
            setUploadStatusText(status);
            setUploadProgress(pct);
          }
        );

        setLastUploadedBackup({
          folderLink: result.folder.webViewLink,
          archiveLink: result.appArchive.webViewLink,
          archiveName: result.appArchive.name,
        });

        setStatusMessage({
          type: 'success',
          text: `Application archive successfully uploaded to Google Drive! Archived as: ${result.appArchive.name}`,
        });

        loadDriveData(currentToken, result.folder.id);
      }
    } catch (error: any) {
      console.error('Upload application error:', error);
      setStatusMessage({
        type: 'error',
        text: `Application upload failed: ${error.message}`,
      });
    } finally {
      setIsUploadingApp(false);
    }
  };

  // Handle custom file upload
  const handleCustomFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!token || !e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    setIsUploadingCustomFile(true);
    setStatusMessage({
      type: 'info',
      text: `Uploading "${file.name}" to Google Drive...`,
    });

    try {
      await uploadFileToDrive(token, file, {
        name: file.name,
        mimeType: file.type || 'application/octet-stream',
        parents: currentFolder ? [currentFolder.id] : undefined,
      });

      setStatusMessage({
        type: 'success',
        text: `Uploaded "${file.name}" to Google Drive!`,
      });

      if (token) loadDriveData(token);
    } catch (error: any) {
      console.error('Custom file upload error:', error);
      setStatusMessage({
        type: 'error',
        text: `Failed to upload file: ${error.message}`,
      });
    } finally {
      setIsUploadingCustomFile(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Handle Create Folder
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !newFolderName.trim()) return;

    try {
      const folder = await findOrCreateFolder(
        token,
        newFolderName.trim(),
        currentFolder ? currentFolder.id : undefined
      );

      setShowFolderModal(false);
      setNewFolderName('');
      setStatusMessage({
        type: 'success',
        text: `Created folder "${folder.name}" in Google Drive`,
      });
      loadDriveData(token);
    } catch (error: any) {
      setStatusMessage({
        type: 'error',
        text: `Failed to create folder: ${error.message}`,
      });
    }
  };

  // Handle File Deletion with Mandatory Confirmation
  const confirmDelete = async () => {
    if (!token || !deleteModalState.file) return;

    setDeleteModalState(prev => ({ ...prev, isDeleting: true }));
    try {
      await deleteDriveFile(token, deleteModalState.file.id);
      setStatusMessage({
        type: 'success',
        text: `Deleted "${deleteModalState.file.name}" from Google Drive.`,
      });
      setDeleteModalState({ isOpen: false, file: null, isDeleting: false });
      loadDriveData(token);
    } catch (error: any) {
      setStatusMessage({
        type: 'error',
        text: `Failed to delete item: ${error.message}`,
      });
      setDeleteModalState(prev => ({ ...prev, isDeleting: false }));
    }
  };

  const formatFileSize = (bytes?: string) => {
    if (!bytes) return '--';
    const num = parseInt(bytes, 10);
    if (isNaN(num)) return '--';
    if (num < 1024) return `${num} B`;
    if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} KB`;
    return `${(num / (1024 * 1024)).toFixed(2)} MB`;
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType === 'application/vnd.google-apps.folder') {
      return <Folder className="w-5 h-5 text-amber-500" />;
    }
    if (mimeType.includes('gzip') || mimeType.includes('zip') || mimeType.includes('tar')) {
      return <FileArchive className="w-5 h-5 text-[#0799C2]" />;
    }
    if (mimeType.includes('json') || mimeType.includes('typescript') || mimeType.includes('javascript')) {
      return <FileCode className="w-5 h-5 text-emerald-600" />;
    }
    return <FileText className="w-5 h-5 text-slate-500" />;
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#003B56] via-[#0799C2] to-[#003B56] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-sky-200 border border-white/20">
              <Cloud className="w-4 h-4 text-[#F9B51B]" />
              <span>Google Drive Cloud Integration</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Google Drive Application & System Backup
            </h1>
            <p className="text-sm text-sky-100 leading-relaxed">
              Upload this website codebase, static assets, and corporate records directly to your Google Drive account with permission from the app's users.
            </p>
          </div>

          {/* Quick Auth Controls in Banner */}
          <div className="shrink-0 w-full md:w-auto">
            {!user ? (
              <GoogleSignInButton
                onClick={handleSignIn}
                disabled={isSigningIn || isAuthLoading}
                label={isSigningIn ? 'Connecting...' : 'Connect Google Drive'}
                size="md"
              />
            ) : (
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'User'}
                    className="w-10 h-10 rounded-full border border-white/40"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#F9B51B] text-slate-900 font-bold flex items-center justify-center">
                    {user.email ? user.email[0].toUpperCase() : 'G'}
                  </div>
                )}
                <div className="text-left text-xs">
                  <div className="font-bold text-white truncate max-w-[160px]">
                    {user.displayName || 'Google User'}
                  </div>
                  <div className="text-sky-200 text-[11px] truncate max-w-[160px]">
                    {user.email}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-2 p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors"
                  title="Sign out of Google Drive"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div
            className={`p-4 rounded-xl flex items-start gap-3 border transition-all ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                : statusMessage.type === 'error'
                ? 'bg-rose-50 text-rose-900 border-rose-200'
                : 'bg-sky-50 text-sky-900 border-sky-200'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : statusMessage.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-sm font-medium">{statusMessage.text}</div>
            <button
              onClick={() => setStatusMessage(null)}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Primary Action Card: Upload Application Exactly As It Is */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0799C2]">
                  Primary Feature
                </span>
                <span className="text-xs text-slate-500">Live Workspace Cloud Sync</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Upload This Application to Google Drive
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Exports the entire codebase (React 19, TypeScript, Express server, Drizzle ORM schemas, and all assets) into a dedicated Google Drive folder: <code className="bg-slate-100 text-sky-800 px-2 py-0.5 rounded font-mono text-xs">KGSONS-Official-Website-System</code>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleUploadApp('all-files')}
                disabled={isUploadingApp}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-[#F9B51B] hover:bg-[#e5a412] active:scale-98 shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                title="Upload all individual files and folders directly to Google Drive"
              >
                {isUploadingApp ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                    <span>Uploading... ({uploadProgress}%)</span>
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-5 h-5" />
                    <span>UPLOAD ALL APP FILES TO GOOGLE DRIVE</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleUploadApp('archive')}
                disabled={isUploadingApp}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-98 border border-slate-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                title="Upload single tar.gz archive bundle to Google Drive"
              >
                <FileArchive className="w-4 h-4 text-[#0799C2]" />
                <span>Upload .tar.gz Only</span>
              </button>
            </div>
          </div>

          {/* Upload Progress Bar */}
          {isUploadingApp && (
            <div className="mt-6 space-y-2 animate-in fade-in duration-200">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{uploadStatusText}</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#0799C2] to-[#F9B51B] h-3 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Last Uploaded Backup Success Box */}
          {lastUploadedBackup && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Latest Cloud Backup Ready
                  </div>
                  <div className="font-mono text-sm font-semibold text-emerald-950">
                    {lastUploadedBackup.archiveName}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {lastUploadedBackup.archiveLink && (
                  <a
                    href={lastUploadedBackup.archiveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white text-emerald-800 hover:bg-emerald-100 rounded-lg border border-emerald-300 shadow-xs"
                  >
                    <span>View Archive in Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {lastUploadedBackup.folderLink && (
                  <a
                    href={lastUploadedBackup.folderLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg shadow-xs"
                  >
                    <span>Open Drive Folder</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Google Drive Explorer Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#0799C2]" />
                <span>Google Drive Storage Explorer</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {currentFolder
                  ? `Viewing files inside "${currentFolder.name}"`
                  : 'Files and backups in your Google Drive'}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleCustomFileUpload}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={!token || isUploadingCustomFile}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
              >
                <UploadCloud className="w-3.5 h-3.5 text-[#0799C2]" />
                <span>Upload File</span>
              </button>

              <button
                type="button"
                onClick={() => setShowFolderModal(true)}
                disabled={!token}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
              >
                <FolderPlus className="w-3.5 h-3.5 text-amber-500" />
                <span>New Folder</span>
              </button>

              <button
                type="button"
                onClick={() => token && loadDriveData(token)}
                disabled={!token || isLoadingFiles}
                className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                title="Refresh Drive files"
              >
                <RefreshCw className={`w-4 h-4 ${isLoadingFiles ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Drive Storage Quota Indicator */}
          {accountInfo?.storageQuota?.limit && (
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-[#0799C2]" />
                <span>
                  Storage used:{' '}
                  <strong>{formatFileSize(accountInfo.storageQuota.usage)}</strong> of{' '}
                  <strong>{formatFileSize(accountInfo.storageQuota.limit)}</strong>
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                Account: {accountInfo.user?.emailAddress || user?.email}
              </div>
            </div>
          )}

          {/* Not Connected State */}
          {!user ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-sky-50 text-[#0799C2] rounded-full mx-auto flex items-center justify-center">
                <Cloud className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-800">
                  Connect Your Google Drive Account
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Sign in with Google to view existing backups, upload source files, or manage project folders directly in Google Drive.
                </p>
              </div>
              <div>
                <GoogleSignInButton
                  onClick={handleSignIn}
                  disabled={isSigningIn}
                  label="Sign in with Google to View Files"
                  size="md"
                />
              </div>
            </div>
          ) : isLoadingFiles ? (
            <div className="py-12 text-center text-slate-500 text-sm flex flex-col items-center gap-2">
              <div className="w-6 h-6 border-2 border-[#0799C2] border-t-transparent rounded-full animate-spin" />
              <span>Loading Google Drive files...</span>
            </div>
          ) : files.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full mx-auto flex items-center justify-center">
                <Folder className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-600">
                No files found in this Google Drive folder.
              </p>
              <button
                type="button"
                onClick={() => handleUploadApp('all-files')}
                className="text-xs font-bold text-[#0799C2] hover:underline"
              >
                Click here to upload your application codebase now
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Size</th>
                    <th className="py-3 px-4">Modified</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {files.map(item => {
                    const isFolder = item.mimeType === 'application/vnd.google-apps.folder';
                    return (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            {getFileIcon(item.mimeType)}
                            <div className="font-semibold text-slate-900 truncate max-w-xs sm:max-w-md">
                              {item.name}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">
                          {isFolder ? 'Folder' : formatFileSize(item.size)}
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">
                          {item.modifiedTime
                            ? new Date(item.modifiedTime).toLocaleDateString()
                            : '--'}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {item.webViewLink && (
                              <a
                                href={item.webViewLink}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 text-slate-500 hover:text-[#0799C2] hover:bg-sky-50 rounded-lg transition-colors"
                                title="Open in Google Drive"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                            <button
                              type="button"
                              onClick={() =>
                                setDeleteModalState({
                                  isOpen: true,
                                  file: item,
                                  isDeleting: false,
                                })
                              }
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                              title="Delete from Google Drive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Security & Architecture Accordion */}
        <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-3">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Google Workspace OAuth & Security Details</span>
          </div>
          <p className="leading-relaxed">
            This application uses direct client-side OAuth through Google Firebase Authentication to interface with Google Drive. OAuth tokens are maintained in-memory for security and never stored in persistent browser storage.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {GOOGLE_DRIVE_SCOPES.map(scope => (
              <span
                key={scope}
                className="bg-white px-2 py-0.5 rounded border border-slate-200 text-[10px] font-mono text-slate-700"
              >
                {scope.replace('https://www.googleapis.com/auth/', '')}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Mandatory Destructive Action Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={deleteModalState.isOpen}
        fileName={deleteModalState.file?.name || ''}
        isFolder={deleteModalState.file?.mimeType === 'application/vnd.google-apps.folder'}
        onConfirm={confirmDelete}
        onCancel={() =>
          setDeleteModalState({ isOpen: false, file: null, isDeleting: false })
        }
        isDeleting={deleteModalState.isDeleting}
      />

      {/* Create Folder Modal */}
      {showFolderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FolderPlus className="w-5 h-5 text-amber-500" />
              <span>Create Google Drive Folder</span>
            </h3>
            <form onSubmit={handleCreateFolder} className="space-y-4">
              <input
                type="text"
                value={newFolderName}
                onChange={e => setNewFolderName(e.target.value)}
                placeholder="Folder name (e.g., Drawings, Contracts)"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#0799C2]"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowFolderModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newFolderName.trim()}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0799C2] hover:bg-[#0685a8] rounded-lg disabled:opacity-50"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
