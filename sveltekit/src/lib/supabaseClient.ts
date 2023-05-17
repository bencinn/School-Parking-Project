import { createClient } from '@supabase/supabase-js';
// @ts-ignore
console.log("Hello?");
console.log(import.meta.env.ANON_KEY);
export const supabase = createClient('https://qkdxcckaitrppzeduhnl.supabase.co', import.meta.env.VITE_SUPABASE_ANON_KEY);
