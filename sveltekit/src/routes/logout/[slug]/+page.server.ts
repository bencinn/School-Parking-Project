import { database } from '$lib/supabaseClient';
import type { Actions, PageData } from './$types';
import { Client } from '@axiomhq/axiom-node';
import { AxiomIn } from '$lib/token'
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

		console.log(formdata);
		let { data: parkingLots, error } = await database
			.from('Parking_lot')
			.select('phone_number')
			.eq('parked_where', Number(formdata.get('whereis')));
		if (error) {
			console.log(error);


    AxiomIn({whereis: Number(formdata.get('whereis')),
        phone_number: String(formdata.get('tel')),
      type: "parked-out",
			error: true
    });				return { success: false };
		} else {
			if (parkingLots === null) {


    AxiomIn({whereis: Number(formdata.get('whereis')),
       
        phone_number: String(formdata.get('tel')),
      type: "parked-out",
			error: true
    });					return { success: false };
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

    AxiomIn({whereis: Number(formdata.get('whereis')),
        phone_number: String(formdata.get('tel')),
      type: "parked-out",
			error: true
    });					return { success: false };
				} else {

    AxiomIn({whereis: Number(formdata.get('whereis')),
        phone_number: String(formdata.get('tel')),
      type: "parked-out",
			error: false
    });
					return { success: true };
				}
			} else {

    AxiomIn({whereis: Number(formdata.get('whereis')),
        phone_number: String(formdata.get('tel')),
      type: "parked-out",
			error: true
    });
				return { success: false };
			}
		}
	}
};
