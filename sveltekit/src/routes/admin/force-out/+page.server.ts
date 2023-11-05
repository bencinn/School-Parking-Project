import { database } from '$lib/supabaseClient';
import * as bcrypt from 'bcrypt';
import type { PageData, Actions } from '../$types';
import { Client } from '@axiomhq/axiom-node';
import { axiomtoken } from '$lib/token'
import { axiomorgid } from '$lib/token'

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
					async function AxiomIn() {
						const client = new Client({
							token: axiomtoken,
							orgId: axiomorgid,
						});
			
						await client.ingestEvents('school-parking-project', [{
							parknumber: Number(signoutList[i]),
							parker_name: String(formdata.get('name')),
							parker_surname: String(formdata.get('surname')),
							parker_handler: String(formdata.get('handler')),
							position: String(formdata.get('position')),
							phone_number: String(formdata.get('phone')),
							status: 'park_out'
						}]);
					}
					AxiomIn();
					const { data, error } = await database
						.from('Parking_lot')
						.delete()
						.eq('parked_where', Number(signoutList[i]));
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
