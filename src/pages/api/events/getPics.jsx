import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { data, error } = await supabase
            .from("pic")
            .select(`*`)
            .order("id", { ascending: true });

        // console.log("Data:", data);
        if (error) {
            return res.status(500).send({ error: error.message });
        }
        return res.status(200).json(data);
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
