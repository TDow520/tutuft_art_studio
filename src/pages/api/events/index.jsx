import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { data, error } = await supabase
            .from('events')
            .select(`*, pic:pic_id ( id, name, url)`)
            .order('event_id', { ascending: true });
        if (error) {
            return res.status(500).send({ error: error.message });
        }
        return res.status(200).json(data);
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
