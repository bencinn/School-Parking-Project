import { database } from '$lib/supabaseClient';
import type { PageData, Actions } from './$types';
import { Client } from '@axiomhq/axiom-node';
import { axiomtoken } from '$lib/token';
import { axiomorgid } from '$lib/token';
import { ParkingZone } from '$lib/slotconfig';

export async function load({ params }: { params: PageData }) {
	const { data } = await database.from('Parking_lot').select('parked_where');
	console.log(params.slug);
	return {
		Parking_lot: data ?? [],
		slug: params.slug,
		zones: ParkingZone
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

		if (error !== null) {
			console.log(error);
			AxiomIn({ status: 'park_failed' });
			return { success: false };
		}
		async function AxiomIn({ status }: { status: string }) {
			const client = new Client({
				token: axiomtoken,
				orgId: axiomorgid
			});

			await client.ingestEvents('school-parking-project', [
				{
					parknumber: Number(formdata.get('whereis')),
					parker_name: String(formdata.get('name')),
					parker_surname: String(formdata.get('surname')),
					parker_handler: String(formdata.get('handler')),
					position: String(formdata.get('position')),
					phone_number: String(formdata.get('phone')),
					status: status
				}
			]);
		}
		AxiomIn({ status: 'park_in' });

		return { success: true };
	}
};
