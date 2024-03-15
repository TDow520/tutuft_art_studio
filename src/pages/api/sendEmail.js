import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
    const { name, email, message } = req.body;

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
        to: process.env.RECV_EMAIL,
        subject: `New Message from ${name}`,
        text: ` User name: ${name}
                email: ${email}
                message: ${message}`,

        html: `<p>User name: ${name}</p>
                <p>Email: ${email}</p>
                <p>message: ${message}</p>
                `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ error});
    }
};