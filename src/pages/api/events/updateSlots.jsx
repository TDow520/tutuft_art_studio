import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        // console.log("Request body:", req.body);

        const { id, available } = req.body;

        const { error } = await supabase.rpc("update_event_slots", {
            _event_id: id,
            new_available: available
        });

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ message: "Slots updated successfully" });
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};