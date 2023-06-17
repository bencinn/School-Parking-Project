import { database } from '$lib/supabaseClient';
import type { Actions, PageData } from './$types';

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
