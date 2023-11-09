import { database } from '$lib/supabaseClient';
import { SupabaseClient } from '@supabase/supabase-js';
import { ParkingZone } from '$lib/slotconfig';

export async function load({ params }) {
  const { data } = await database.from('Parking_lot').select('parked_where');
  return {
    Parking_lot: data ?? [],
    slug: params.slug,
    zones: ParkingZone,
  };
}

