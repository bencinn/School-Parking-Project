import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabaseClient.types';
export const database = createClient<Database>(
	'https://qkdxcckaitrppzeduhnl.supabase.co',
	import.meta.env.VITE_SUPABASE_ADMIN_KEY
);
