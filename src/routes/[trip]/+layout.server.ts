import { error } from '@sveltejs/kit';

export async function load({ params }) {
	if (params.trip) {
		const data = { title: 'Switzerland' };
		return data;
	}

	error(404, 'Not found');
}
