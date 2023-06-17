import { database } from '$lib/supabaseClient';

export async function load({ params }) {
  const { data } = await database.from('Parking_lot').select('parked_where');
  return {
    Parking_lot: data ?? [],
    slug: params.slug
  };
}
