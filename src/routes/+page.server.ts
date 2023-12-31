import type { PageServerLoad, Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { Prisma } from '@prisma/client';

const colleges = ["Dublin City University",
"National University of Ireland",
"Maynooth University",
"University of Galway",
"University College Cork",
"University College Dublin",
"Royal College of Surgeons in Ireland",
"University of Limerick",
"Trinity College Dublin",
"Technological Universities in Ireland",
"Atlantic Technological University",
"Munster Technological University",
"South East Technological University",
"Technological University Dublin",
"Technological University of the Shannon: Midlands Midwest",
"Dún Laoghaire Institute of Art, Design and Technology",
"Dundalk Institute of Technology",
"St Patrick's College, Maynooth",
"St Angela's College of Education, Sligo",
"Coláiste Mhuire|Marino Institute of Education",
"Mary Immaculate College, Limerick",
"St. Patrick's College, Thurles",
"Institute of Public Administration",
"Irish School of Ecumenics",
"National College of Art and Design",
"National Maritime College of Ireland",
"Shannon College of Hotel Management",
"Dublin Institute for Advanced Studies",
"Garda Síochána College",
"Military College, Curragh Camp",
"National Ambulance Service College",
"Honorable Society of King's Inns",
"National College of Ireland",
"Royal Irish Academy of Music",
"Royal College of Physicians of Ireland",
"American College Dublin",
"Burren College of Art",
"Carmelite Institute of Britain and Ireland",
"Cavan Institute",
"Christian Leadership in Education Office",
"Church of Ireland Theological Institute",
"City Colleges",
"Coláiste na hÉireann",
"Coláiste Stiofáin Naofa",
"College of Progressive Education",
"Cork College of Commerce",
"Digital Skills Academy",
"Dorset College",
"Dublin Business School",
"Dublin Institute of Design",
"The Gaiety School of Acting",
"Galway Business School",
"The Grafton Academy",
"Griffith College Cork",
"Griffith College Dublin",
"Griffith College Limerick",
"Hibernia College",
"IBAT College Dublin",
"ICD Business School",
"Independent College Dublin",
"Irish Bible Institute",
"Irish Management Institute",
"Kimmage Development Studies Centre",
"Mallow College of Further Education",
"Newman College Ireland",
"Pitman Training Group",
"Portobello Institute",
"The Priory Institute",
"Spirituality Institute for Research and Education",
"St. John's Central College, Cork",
"St. Nicholas Montessori College",
"St. Patrick's, Carlow College",
"Setanta College",
"Turning Point",
"Other"]

export const load: PageServerLoad = ({ getClientAddress }) => {
    return {
        colleges: colleges,
        ip: getClientAddress()
    }
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const email = data.get('email');
        const ip = data.get('ip');
        let colleges = data.get('colleges'); // let because other will replace it.
        const other = data.get('other'); // If other is selected, this is the value of the other college
        const choices = ['lan', 'ctf', 'gamejam', 'magic', 'tabletop', 'casualgames'];
        const price = data.get('price');
        const interests = choices.map(field => data.get(field) === 'on' ? '1' : '0').join('');

        // Checking college
        if(other != null && other != ''){
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
            if(e instanceof Prisma.PrismaClientKnownRequestError){
                if((e as Prisma.PrismaClientKnownRequestError).code === 'P2002'){
                    throw error(500, 'This email has already been used.');
                }
                else{
                    throw error(500, e.message);
                }
            }
        }

        throw redirect(303, '/success');

    }
} satisfies Actions;