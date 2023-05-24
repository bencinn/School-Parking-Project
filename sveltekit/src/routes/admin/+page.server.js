import { supabase_admin } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data } = await supabase_admin.from('Parking_lot').select('parked_where');
	return {
		Parking_lot: data ?? [],
		slug: params.slug
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const formdata = await request.formData();
		const signoutList = formdata.getAll('logout');
		for (let i = 0; i < signoutList.length; i++) {
			console.log(parseInt(signoutList[i]));
			const { data, error } = await supabase_admin
				.from('Parking_lot')
				.delete()
				.eq('parked_where', parseInt(signoutList[i]));
			if (error === null) {
			} else {
				return { success: false };
			}
		}
		return { success: true };
	}
};
