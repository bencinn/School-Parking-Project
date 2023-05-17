  import { supabase } from "$lib/supabaseClient";

  export async function load() {
    const { data } = await supabase.from("Parking_lot").select();
    return {
      Parking_lot: data ?? [],
    };
  }
