import { error } from '@sveltejs/kit';


export async function load({ params }) {
	if (params.trip) {
		const data = {
			stops: [
				{
					name: 'Geneva',
					image: './images/geneva.webp',
					alt: 'Image of Geneva',
					currency: 'CHF',
					accomodations: [
						{
							name: "Hotel Cornavin",
							location: "Gare de Cornavin, Saint-Gervais / des Grottes, 1201 Geneva, Switzerland",
							image: "./images/geneva/hotel-cornavin.jpg",
							alt: "Image of Hotel Cornavin from across the road",
							description: "The Hotel Cornavin offers a unique experience thanks to its architecture. Especially designed for business travelers and visitors as it is located downtown, close to the shopping district. Beside its 164 rooms the hotel has a fitness center.",
							website: "https://fassbindhotels.ch/hotel/cornavin/",
							rooms: [
								{
									room_type: "Double Room",
									room_min_cost: 331,
									room_max_cost: 437
								},
								{
									room_type: "Single Room",
									room_min_cost: 277,
									room_max_cost: 320
								}
							]

						},
					],
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
					currency: 'CHF',
					attractions: [],
					accomodations: []
				},
				{
					name: 'Bern',
					image: './images/bern.webp',
					currency: 'CHF',
					alt: 'Image of Bern',
					attractions: [],
					accomodations: []
				},
				{
					name: 'Bern',
					image: './images/bern.webp',
					currency: 'CHF',
					alt: 'Image of Bern',
					attractions: [],
					accomodations: []
				}
			]
		};

		return data;
	}

	error(404, 'Not found');
}
