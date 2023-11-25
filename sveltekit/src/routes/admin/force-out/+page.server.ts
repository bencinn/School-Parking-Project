import { database } from '$lib/supabaseClient';
import * as bcrypt from 'bcrypt';
import type { PageData, Actions } from '../$types';
import { AxiomIn } from '$lib/token'

export async function load({ params }: { params: PageData }) {
	const { data } = await database.from('Parking_lot').select('*');
	return {
		Parking_lot: data ?? [],
		slug: params.slug
	};
}

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formdata = await request.formData();
		const signoutList = formdata.getAll('logout');
		const username = formdata.get('email');
		const password = formdata.get('password');
		const { data, error } = await database.from('admin').select('*').eq('email', username);
		if (data === null) {
			return { success: false };
		}
		bcrypt.compare(String(password), String(data[0].passwordHash), async function (err, result) {
			if (result == true) {
				for (let i = 0; i < signoutList.length; i++) {
					let outslot = Number(signoutList[i]);
					let outinfo = await database.from('Parking_lot').select('*').eq('parked_where', Number(signoutList[i]));
					const { data, error } = await database
						.from('Parking_lot')
						.delete()
						.eq('parked_where', Number(signoutList[i]));
					if (error === null) {
					} else {
						return { success: false };
					}
					AxiomIn({whereis: outslot,
						parker_name: String(outinfo.data[0].parker_name),
						parker_surname: String(outinfo.data[0].parker_surname),
						parker_handler: String(outinfo.data[0].parker_handler),
						position: String(outinfo.data[0].position),
						phone_number: String(outinfo.data[0].phone_number),
						type: "force-out",
						error: error !== null
    				});
				}
			} else {
				return { success: false };
			}
		});
		return { success: true };
	}
};
