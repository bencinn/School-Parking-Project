import { createClient } from '@supabase/supabase-js';
// @ts-ignore
export const supabase_admin = createClient('https://qkdxcckaitrppzeduhnl.supabase.co', import.meta.env.VITE_SUPABASE_ADMIN_KEY);
