import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "PUT") {
        const { id, pic_name, event_date, event_start, event_end, event_slot, event_price, pic_url, pic_id  } = req.body;
        
        // update the events table
        const { data: eventData, error: eventError } = await supabase
            .from("events")
            .update({
                date: event_date,
                start: event_start,
                end: event_end,
                slot: event_slot,
                price: event_price,
                pic_id
            })
            .match({ id });
        
        if (eventError) {
            return res.status(500).json({error: eventError.message})
        }
        // return a success message if all tables updated
        return res.status(200).json({ message: "Event updated successfully" })

    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
