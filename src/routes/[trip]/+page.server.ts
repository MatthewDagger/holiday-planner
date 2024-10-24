import { error } from '@sveltejs/kit';

export async function load({ params }) {
	if (params.trip) {
		const data = {
			stops: [
				{
					name: 'Geneva',
					image: './images/geneva.webp',
					alt: 'Image of Geneva',
					attractions: [
						{
							name: "CERN Science Gateway",
							description: "Home of the Large Hadron Collider",
							image: "./images/geneva/cern-science-gateway.jpg",
							alt: "Image of the exterior of the CERN Science gateway"
						},
					]
				},
				{
					name: 'Bern',
					image: './images/bern.webp',
					alt: 'Image of Bern',
					attractions: []
				},
				{
					name: 'Bern',
					image: './images/bern.webp',
					alt: 'Image of Bern',
					attractions: []
				},
				{
					name: 'Bern',
					image: './images/bern.webp',
					alt: 'Image of Bern',
					attractions: []
				}
			]
		};

		return data;
	}

	error(404, 'Not found');
}
