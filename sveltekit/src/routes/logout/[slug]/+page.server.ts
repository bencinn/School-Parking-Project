import { database } from '$lib/supabaseClient';
import type { Actions, PageData } from './$types';
import { Client } from '@axiomhq/axiom-node';
import { axiomtoken } from '$lib/token'
import { axiomorgid } from '$lib/token'
import { ParkingZone } from '$lib/slotconfig';

export async function load({ params }: { params: PageData }) {
	const { data } = await database.from('Parking_lot').select('parked_where');
	return {
		Parking_lot: data ?? [],
		slug: params.slug,
		zones: ParkingZone,
	};
}

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formdata = await request.formData();
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
				status: 'park_out'
			}]);
		}
		AxiomIn();
		console.log(formdata);
		let { data: parkingLots, error } = await database
			.from('Parking_lot')
			.select('phone_number')
			.eq('parked_where', Number(formdata.get('whereis')));
		if (error) {
			console.log(error);
			return { success: false };
		} else {
			if (parkingLots === null) {
				return { success: false };
			}
			const matchingParkingLots = parkingLots.filter(
				(parkingLot) => parkingLot.phone_number === formdata.get('tel')
			);
			if (matchingParkingLots.length > 0) {
				let { error: deleteError } = await database
					.from('Parking_lot')
					.delete()
					.eq('parked_where', Number(formdata.get('whereis')));
				console.log(formdata.get('whereis'));

				if (deleteError) {
					console.log(deleteError);
					return { success: false };
				} else {
					return { success: true };
				}
			} else {
				return { success: false };
			}
		}
	}
};
