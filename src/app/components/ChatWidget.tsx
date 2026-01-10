"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { id: string; role: "user" | "assistant" | "system"; content: string };

// Environment variable configuration
const CHAT_ENABLED = process.env.NEXT_PUBLIC_CHAT_ENABLED !== 'false';
const CHAT_TITLE = process.env.NEXT_PUBLIC_CHAT_TITLE || 'GJS Corp';
const CHAT_SUBTITLE = process.env.NEXT_PUBLIC_CHAT_SUBTITLE || 'AI Assistant';
const CHAT_PLACEHOLDER = process.env.NEXT_PUBLIC_CHAT_PLACEHOLDER || 'Ask about automation, Power BI, or ETL...';
const CHAT_SYSTEM_MESSAGE = process.env.NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE ||
    "You are GJS Corp's friendly assistant. Keep answers clear, concise, and business-focused; give examples when helpful.";

const initialSystemMessage: Message = {
    id: "system-0",
    role: "system",
    content: CHAT_SYSTEM_MESSAGE,
};

export default function ChatWidget() {
    // Don't render if chat is disabled
    if (!CHAT_ENABLED) {
        return null;
    }

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(() => {
        try {
            const raw = localStorage.getItem("sqli_chat_history");
            return raw ? JSON.parse(raw) : [initialSystemMessage];
        } catch {
            return [initialSystemMessage];
        }
    });
    const [input, setInput] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        localStorage.setItem("sqli_chat_history", JSON.stringify(messages));
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    function addLocalMessage(role: Message["role"], content: string) {
        setMessages((m) => [...m, { id: `${role}-${Date.now()}`, role, content }]);
    }

    async function sendMessage(text: string) {
        setError(null);
        addLocalMessage("user", text);
        setSending(true);
        try {
            // prepare messages for API (strip local-only id)
            const apiMessages = messages
                .filter((m) => m.role !== "system" || m.role === "system")
                .map((m) => ({ role: m.role, content: m.content }))
                .concat([{ role: "user", content: text }]);

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            const json = await res.json();
            if (!res.ok) {
                if (res.status === 500 && json?.error?.includes("OpenAI API key")) {
                    setError("OpenAI API key not configured. Please add your API key to .env.local");
                    addLocalMessage("assistant", "I'm sorry, but I'm not properly configured yet. Please contact the administrator to set up the OpenAI API key.");
                } else if (res.status === 401) {
                    setError("Invalid OpenAI API key. Please check your API key in .env.local");
                    addLocalMessage("assistant", "I'm sorry, but there's an authentication issue with my configuration. Please check the API key settings.");
                } else if (res.status === 429) {
                    // Check if it's a quota issue specifically
                    if (json?.detail?.includes("insufficient_quota") || json?.detail?.includes("exceeded your current quota")) {
                        setError("OpenAI quota exceeded. Please check your billing or try again later.");
                        addLocalMessage("assistant", "I'm sorry, but my OpenAI account has run out of credits. Please contact the administrator to add more credits.");
                    } else {
                        setError("Rate limit exceeded. Please wait a moment and try again.");
                        addLocalMessage("assistant", "I'm receiving too many requests right now. Please wait a moment and try again.");
                    }
                } else {
                    setError(json?.error || "Server error");
                    addLocalMessage("assistant", "Sorry — something went wrong. Please try again.");
                }
            } else {
                const reply = json.reply ?? "No reply";
                addLocalMessage("assistant", reply);

                // If quota was exceeded, show a note about it
                if (json.quota_exceeded) {
                    setError("Note: AI service is currently using fallback mode due to quota limits.");
                }
            }
        } catch (err: any) {
            setError(err.message ?? "Network error");
            addLocalMessage("assistant", "Network error — please try again.");
        } finally {
            setSending(false);
        }
    }

    function handleSubmit(e?: React.FormEvent) {
        e?.preventDefault();
        if (!input.trim()) return;
        const text = input.trim();
        setInput("");
        sendMessage(text);
    }

    function clearChat() {
        setMessages([initialSystemMessage]);
        localStorage.removeItem("sqli_chat_history");
    }

    return (
        <>
            {/* Floating button */}
            <div className="fixed right-6 bottom-6 z-50">
                <motion.button
                    layout
                    onClick={() => setOpen((o) => !o)}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-gradient-to-br from-purple-600 to-blue-500 text-white px-4 py-3 rounded-full shadow-lg"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="hidden sm:inline">Chat AI</span>
                </motion.button>
            </div>

            {/* Chat panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="fixed right-6 bottom-20 z-50 w-[340px] md:w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                    GJS
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">{CHAT_TITLE}</div>
                                    <div className="text-xs text-gray-500">{CHAT_SUBTITLE}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={clearChat} title="Clear" className="text-gray-500 hover:text-gray-700 text-sm px-2">
                                    Clear
                                </button>
                                <button onClick={() => setOpen(false)} title="Close" className="text-gray-500 hover:text-gray-700 text-xl px-2">
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Message list */}
                        <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-4" style={{ maxHeight: "60vh" }}>
                            {messages.filter(m => m.role !== "system").map((m) => (
                                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`${m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"} rounded-lg px-4 py-2 max-w-[80%]`}>
                                        <div className="text-sm whitespace-pre-wrap">{m.content}</div>
                                    </div>
                                </div>
                            ))}

                            {sending && (
                                <div className="text-sm text-gray-500">Assistant is typing…</div>
                            )}

                            {error && <div className="text-sm text-red-600">{error}</div>}
                        </div>

                        {/* Input */}
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="px-4 py-3 border-t bg-white">
                            <div className="flex gap-2">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={CHAT_PLACEHOLDER}
                                    className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-60"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
