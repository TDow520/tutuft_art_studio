import supabase from "@/app/supabaseClient";

export default async function handler(req, res) { 
    if (req.method === 'POST') {
        const { event_name, event_date, event_time, event_slot, event_price } = req.body;
        
        const { data, error } = await supabase
            .from('event')
            .insert([{ event_name, event_date, event_time, event_slot, event_price }]);
        
        if (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}