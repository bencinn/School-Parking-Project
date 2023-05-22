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
		console.log(formdata);
		let { data: parkingLots, error } = await supabase_admin
			.from('Parking_lot')
			.select('phone_number')
			.eq('parked_where', parseInt(formdata.get('whereis')));
		if (error) {
			console.log(error);
			return { success: false };
		} else {
			const matchingParkingLots = parkingLots.filter(
				(parkingLot) => parkingLot.phone_number === formdata.get('tel')
			);
			if (matchingParkingLots.length > 0) {
				let { error: deleteError } = await supabase_admin
					.from('Parking_lot')
					.delete()
					.eq('parked_where', parseInt(formdata.get('whereis')));
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
