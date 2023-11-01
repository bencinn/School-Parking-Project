import { database } from '$lib/supabaseClient';
import { SupabaseClient } from '@supabase/supabase-js';

export async function load({ params }) {
  const { data } = await database.from('Parking_lot').select('parked_where');
  const { data: announcement, error } = await database.from('announcement').select('*').filter('start_date', 'lte', new Date().toISOString().split('T')[0]).filter('end_date', 'gte', new Date().toISOString()).filter('end_date', 'gte', new Date().toISOString());
  console.log(announcement);
  console.log(error);
  return {
    Parking_lot: data ?? [],
    slug: params.slug,
    announcement: announcement !== null ? announcement[0] || null : null,
  };
}
