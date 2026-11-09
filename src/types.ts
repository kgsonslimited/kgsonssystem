export type PageId =
  | 'home'
  | 'about'
  | 'history'
  | 'vision-mission'
  | 'wooden-doors'
  | 'electrical'
  | 'plumbing'
  | 'facility-care'
  | 'projects'
  | 'team'
  | 'compliance'
  | 'hse'
  | 'future-strategy'
  | 'contact'
  | 'google-drive';

export interface ServiceDivision {
  id: string;
  pageId: PageId;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  thumbnail: string;
  icon: string;
  capabilities: string[];
  keyFeatures: { title: string; desc: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  clientCategory: string;
  location: string;
  year: string;
  division: 'doors' | 'electrical' | 'plumbing' | 'cleaning' | 'all';
  image: string;
  description: string;
  deliverables: string[];
  status: 'Completed' | 'Ongoing';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'leadership' | 'carpentry' | 'electrical' | 'plumbing' | 'cleaning';
  bio: string;
  image: string;
  skills: string[];
}

export interface ComplianceCert {
  id: string;
  title: string;
  organization: string;
  badgeImage: string;
  description: string;
  status: string;
}
