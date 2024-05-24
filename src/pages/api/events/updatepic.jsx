import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "PUT") {
        // update the pic table
        const { data: picData, error: picError } = await supabase
            .from("pic")
            .update({
                name: pic_name,
                url: pic_url
            })
            .match({ pic_id });

        if (picError) {
            return res.status(500).json({ error: picError.message });
        }
        // return a success message if all tables updated
        return res.status(200).json({ message: "Event updated successfully" })

    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}