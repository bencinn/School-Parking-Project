import { supabase_admin } from '$lib/supabaseClient';
import * as bcrypt from 'bcrypt';

export async function load({ params, cookies }) {
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
		const username = formdata.get('email');
		const password = formdata.get('password');
		const { data, error } = await supabase_admin.from('admin').select('*').eq('email', username);
		bcrypt.compare(password, data[0].passwordHash, async function (err, result) {
			if (result == true) {
				for (let i = 0; i < signoutList.length; i++) {
					const { data, error } = await supabase_admin
						.from('Parking_lot')
						.delete()
						.eq('parked_where', parseInt(signoutList[i]));
					if (error === null) {
					} else {
						return { success: false };
					}
				}
			} else {
				return { success: false };
			}
		});
		return { success: true };
	}
};
