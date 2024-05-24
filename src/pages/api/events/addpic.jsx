import supabase from "@/app/supabaseClient";

export default async function handler(req, res) { 
    if (req.method === 'POST') {
        const { name, url } = req.body;
        
        const { data, error } = await supabase
            .from('event')
            .insert([{ name, url }]);
        
        if (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}