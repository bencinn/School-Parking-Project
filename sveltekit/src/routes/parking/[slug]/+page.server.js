  import { supabase_admin } from "$lib/supabaseClient";

  export async function load({params}) {
    const { data } = await supabase_admin.from("Parking_lot").select('parked_where');
    return {
      Parking_lot: data ?? [],
      slug: params.slug
    };
  }


/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({cookies, request}) => {
    const formdata = await request.formData();
    const { data, error } = await supabase_admin
  .from('Parking_lot')
  .insert([
    { parked_where: formdata.get('whereis'), parker_name: formdata.get('name'), parker_surname: formdata.get('surname'), parker_handler: formdata.get('handler'), position: formdata.get('position'), phone_number: formdata.get('phone') },
  ]);
    console.log(error);
  }
}
