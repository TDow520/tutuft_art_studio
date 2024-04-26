import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import fs from "fs";
import path from "path";
import supabase from "../src/lib/supabaseClient.js";

const publicDir = path.join(__dirname, "public");

// Function to upload images to Supabase
async function uploadImage(filePath, suspabasePath) {
    const fileContents = fs.readFileSync(filePath); // read the file
    const { data, error } = await supabase.storage
        .from("event-imgs")
        .upload(suspabasePath, fileContents, {
            cacheControl: "3600",
            upsert: false
        }); // upload the file to Supabase

    if (error) {
        console.error("Upload error for file:", filePath, error.message);
        return;
    }

    console.log(`File uploaded successfully: ${data.Key}`);
}

// Function to uloop through file and upload them to Supabase
async function uploadImages() {
    fs.readdir(publicDir, async (err, files) => {
        if (err) {
            console.error("Error reasing the directory:", err);
            return;
        }

        files.forEach((file) => {
            // construct the file patha dn the desired Supabase storage path
            const filePath = path.join(publicDir, file);
            const supabasePath = `public/${file}`;

            // upload the image to Supabase
            uploadImage(filePath, supabasePath);
        });
    });
}

uploadImages(); // call the function to upload the images
