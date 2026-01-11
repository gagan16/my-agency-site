import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Gmail SMTP configuration
        const GMAIL_USER = process.env.GMAIL_USER || "gaganjot165@gmail.com";
        const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

        if (!GMAIL_APP_PASSWORD) {
            // Fallback: log to console if app password is not configured
            console.log("Contact Form Submission:", { name, email, message });
            return NextResponse.json(
                {
                    success: true,
                    message: "Form submitted (email not configured - check console)"
                },
                { status: 200 }
            );
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_APP_PASSWORD,
            },
        });

        // Send email
        await transporter.sendMail({
            from: `GJS Corp Contact Form <${GMAIL_USER}>`,
            to: "gaganjot165@gmail.com",
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
            text: `
                New Contact Form Submission
                
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
        });

        return NextResponse.json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("Contact form error:", errorMessage);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
