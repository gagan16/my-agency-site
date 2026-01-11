// src/app/api/chat/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const messages = body.messages; // array of { role, content }

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
        }

        const OPENAI_KEY = process.env.OPENAI_API_KEY;
        if (!OPENAI_KEY) {
            return NextResponse.json({ error: "OpenAI API key not configured." }, { status: 500 });
        }

        // Example: call OpenAI Chat Completions
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${OPENAI_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // Using cheaper model
                messages,
                max_tokens: 600,
                temperature: 0.2,
            }),
        });

        if (!res.ok) {
            const text = await res.text();
            console.error('OpenAI API error:', res.status, text);

            // If quota exceeded, provide a helpful fallback response
            if (res.status === 429 && (text.includes("insufficient_quota") || text.includes("exceeded your current quota"))) {
                return NextResponse.json({
                    reply: "I'm currently experiencing technical difficulties with my AI service. Please contact GJS Corp directly for immediate assistance. You can reach us through our contact page or book a free consultation call.",
                    quota_exceeded: true
                });
            }

            return NextResponse.json({
                error: `OpenAI error (${res.status})`,
                detail: text,
                status: res.status
            }, { status: res.status });
        }

        const data = await res.json();
        // data.choices[0].message.content for Chat Completions
        const reply = data?.choices?.[0]?.message?.content ?? "";

        return NextResponse.json({ reply, raw: data });
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "unknown";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
