import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        const {
            id,
            event_slot
        } = req.body;

        // update the events table
        const { data, error } = await supabase
            .from("events")
            .update({ slot: event_slot })
            .match({ id });

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        
        // return a success message if all tables updated
        return res.status(200).json({ message: "Event updated successfully" });

    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
