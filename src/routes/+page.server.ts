import type { PageServerLoad, Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { Prisma } from '@prisma/client';

const colleges = [
	'American College Dublin',
	'Atlantic Technological University',
	'Burren College of Art',
	'Carmelite Institute of Britain and Ireland',
	'Cavan Institute',
	'Christian Leadership in Education Office',
	'Church of Ireland Theological Institute',
	'City Colleges',
	'College of Progressive Education',
	'Coláiste Mhuire|Marino Institute of Education',
	'Coláiste na hÉireann',
	'Coláiste Stiofáin Naofa',
	'Cork College of Commerce',
	'Digital Skills Academy',
	'Dorset College',
	'Dublin Business School',
	'Dublin City University',
	'Dublin Institute for Advanced Studies',
	'Dublin Institute of Design',
	'Dundalk Institute of Technology',
	'Dún Laoghaire Institute of Art, Design and Technology',
	'Galway Business School',
	'Garda Síochána College',
	'Griffith College Cork',
	'Griffith College Dublin',
	'Griffith College Limerick',
	'Hibernia College',
	'Honorable Society of Kings Inns',
	'IBAT College Dublin',
	'ICD Business School',
	'Independent College Dublin',
	'Institute of Public Administration',
	'Irish Bible Institute',
	'Irish Management Institute',
	'Irish School of Ecumenics',
	'Kimmage Development Studies Centre',
	'Mallow College of Further Education',
	'Mary Immaculate College, Limerick',
	'Maynooth University',
	'Military College, Curragh Camp',
	'Munster Technological University',
	'National Ambulance Service College',
	'National College of Art and Design',
	'National College of Ireland',
	'National Maritime College of Ireland',
	'National University of Ireland',
	'Newman College Ireland',
	'Pitman Training Group',
	'Portobello Institute',
	'Royal College of Physicians of Ireland',
	'Royal College of Surgeons in Ireland',
	'Royal Irish Academy of Music',
	'Setanta College',
	'Shannon College of Hotel Management',
	'South East Technological University',
	'Spirituality Institute for Research and Education',
	'St Angelas College of Education, Sligo',
	'St Patricks College, Maynooth',
	'St. Johns Central College, Cork',
	'St. Nicholas Montessori College',
	'St. Patricks College, Thurles',
	'St. Patricks, Carlow College',
	'Technological Universities in Ireland',
	'Technological University Dublin',
	'Technological University of the Shannon: Midlands Midwest',
	'The Gaiety School of Acting',
	'The Grafton Academy',
	'The Priory Institute',
	'Trinity College Dublin',
	'Turning Point',
	'University College Cork',
	'University College Dublin',
	'University of Galway',
	'University of Limerick',
	'Other'
];

export const load: PageServerLoad = ({ getClientAddress }) => {
	return {
		colleges: colleges,
		ip: getClientAddress()
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const ip = data.get('ip');
		let colleges = data.get('colleges'); // let because other will replace it.
		const other = data.get('other'); // If other is selected, this is the value of the other college
		const choices = ['lan', 'ctf', 'gamejam', 'magic', 'tabletop', 'casualgames'];
		const price = data.get('price');
		const interests = choices.map((field) => (data.get(field) === 'on' ? '1' : '0')).join('');

		// Checking college
		if (other != null && other != '') {
			colleges = other;
		}

		try {
			await prisma.responses.create({
				data: {
					email: email.toString(),
					college: colleges.toString(),
					interests: interests,
					max_price: price.toString(),
					timestamp: new Date(),
					ip: ip.toString()
				}
			});
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				if ((e as Prisma.PrismaClientKnownRequestError).code === 'P2002') {
					throw error(500, 'This email has already been used.');
				} else {
					throw error(500, e.message);
				}
			}
		}

		throw redirect(303, '/success');
	}
} satisfies Actions;
