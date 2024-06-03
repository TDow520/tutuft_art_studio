import supabase from "@/app/supabaseClient";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fName, lName, email, phone } = req.body;

            const { data, error } = await supabase
                .from('customer')
                .insert([{ f_name:fName, l_name:lName, email, number: phone }])

        if (error) {
                    return res.status(500).json({ error: error.message });
                }
        } else {
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    }