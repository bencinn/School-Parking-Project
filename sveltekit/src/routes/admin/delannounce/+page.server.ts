import { database } from '$lib/supabaseClient';
import * as bcrypt from 'bcrypt';
import type { PageData, Actions } from './$types';

export async function load({ params }: { params: PageData }) {
	const { data, error } = await database.from('announcement').select('*');
	return {
		Announce: data ?? [],
		slug: params.slug
	};
}

// table
// announcement
// affected
// id

export const actions: Actions = {
	delann: async ({ request }) => {
        const formdata = await request.formData();
		const username = formdata.get('email');
		const password = formdata.get('password');
        console.log("dasfadsfdasfdasf Wah kok", username, password, formdata.get('id'));
		const { data, error } = await database.from('admin').select('*').eq('email', username).single();
        console.log(data);
        console.log(username == null);
        console.log(password == null);

		if (data === null) {
			return { success: false };
		}
		bcrypt.compare(String(password), String(data.passwordHash), async function (err, result) {
			if (result == true) {
					const { data, error } = await database
						.from('announcement')
						.delete()
						.eq('id', formdata.get('id'));
					if (error === null) {
					} else {
						return { success: false };
					}
			} else {
				return { success: false };
			}
		});
		return { success: true };
	}
};
