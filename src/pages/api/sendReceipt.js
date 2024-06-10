import nodemailer from "nodemailer";

export default async function sendReceipt(body) {
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    console.log(process.env.EMAIL_USER);
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send the email to the customer's email
        subject: `Receipt from Your Purchase`,
        text: `Hello ${name},\n\n${message}`,
        html: `<p>Hello ${name},</p><p>${message}</p>`
    };


    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error.message);
        
    }
}
