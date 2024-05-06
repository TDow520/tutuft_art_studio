import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Missing id" });
        }

        const { data, error } = await supabase
            .from('event')
            .delete()
            .match({id});
        
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(200).json({message: "Event deleted successfully"});
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
