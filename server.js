import express from "express";
import cors from "cors";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// Health check endpoint to wake up the server
app.get("/ping", (req, res) => {
    res.json({ status: "ok", message: "Server is awake" });
});

// Root endpoint
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Email configuration
const contactEmail = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.error("Nodemailer verification failed:", error);
    } else {
        console.log("Nodemailer is ready to send emails");
    }
});

// Contact form endpoint
app.post("/contact", (req, res) => {
    try {
        console.log("Received contact request:", req.body);
        
        const { firstname, lastname, email, message, phone } = req.body;
        
        if (!email || !message) {
            return res.status(400).json({ 
                code: 400, 
                status: "Error", 
                message: "Email and message are required" 
            });
        }

        const name = `${firstname || ''} ${lastname || ''}`.trim() || "Unknown Sender";
        
        const mail = {
            from: process.env.EMAIL_USER, // Use the authenticated email as 'from'
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Contact Form Submission from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`
        };

        contactEmail.sendMail(mail, (error) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).json({ 
                    code: 500, 
                    status: "Error", 
                    message: "Failed to send email. " + error.message 
                });
            }
            console.log("Email sent successfully");
            res.json({ code: 200, status: "Message Sent" });
        });
    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ 
            code: 500, 
            status: "Error", 
            message: "Internal server error: " + err.message 
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
