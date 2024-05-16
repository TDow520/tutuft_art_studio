import supabase from "@/app/supabaseClient";

// Gets the particular event_id available slots from the events table
export default async function handler(req, res) {
    if (req.method === "GET") {
        const { event_id } = req.query;

        if (!event_id) {
            return res.status(400).json({ error: "event_id is required" });
        }

        try {
            const { data, error } = await supabase
                .from("events")
                .select("available")
                .eq("event_id", event_id)
                .single();

            if (error) {
                return res.status(500).json({ error: error.message });
            }

            return res.status(200).json(data);

        } catch (err) {
            return res.status(500).json({ error: "An unexpected error occurred" });
        }
    } else {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
