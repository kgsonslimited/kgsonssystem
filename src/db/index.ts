import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn('WARNING: DATABASE_URL is not set. Database operations will fail.');
}

const queryClient = postgres(databaseUrl || 'postgres://localhost/placeholder');
export const db = drizzle(queryClient, { schema });
