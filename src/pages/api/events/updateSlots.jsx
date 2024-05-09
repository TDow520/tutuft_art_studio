import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        // console.log("Request body:", req.body);

        const { id, available } = req.body;
        // console.log("Body: ", req.body);
        // console.log("Event ID:", id);
        
        // update the events table
        const { data, error } = await supabase
            .from("events")
            .update({ available })
            .match({ event_id: id });

        if (error) {
            return res.status(500).json({ error: error.message });
        }
        // console.log("Updated slots in the database:", data);

        // return a success message if all tables updated along with the slots updated
        return res
            .status(200)
            .json({ message: "Slots updated successfully", data });
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
