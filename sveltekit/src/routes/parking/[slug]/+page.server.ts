import { database } from '$lib/supabaseClient';
import type { PageData, Actions } from './$types';
import { Client } from '@axiomhq/axiom-node';
import { axiomtoken } from '../../../../token'
import { axiomorgid } from '../../../../token'

export async function load({ params }: { params: PageData }) {
	const { data } = await database.from('Parking_lot').select('parked_where');
	return {
		Parking_lot: data ?? [],
		slug: params.slug
	};
}

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formdata = await request.formData();
		const { data, error } = await database.from('Parking_lot').insert([
			{
				parked_where: Number(formdata.get('whereis')),
				parker_name: String(formdata.get('name')),
				parker_surname: String(formdata.get('surname')),
				parker_handler: String(formdata.get('handler')),
				position: String(formdata.get('position')),
				phone_number: String(formdata.get('phone'))
			}
		]);

		async function AxiomIn() {
			const client = new Client({
				token: axiomtoken,
				orgId: axiomorgid,
			});

			await client.ingestEvents('school-parking-project', [{
				parknumber: Number(formdata.get('whereis')),
				parker_name: String(formdata.get('name')),
				parker_surname: String(formdata.get('surname')),
				parker_handler: String(formdata.get('handler')),
				position: String(formdata.get('position')),
				phone_number: String(formdata.get('phone')),
				status: 'park_in'
			}]);
		}

		AxiomIn();
		console.log(error);
		if (error === null) {
			return { success: true };
		} else {
			return { success: false };
		}
		
	}
};

