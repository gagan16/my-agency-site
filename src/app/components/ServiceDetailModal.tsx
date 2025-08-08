"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

export default function ServiceDetailModal({ title, children, onClose }: Props) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-xl"
                >
                    ×
                </button>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                {children}
            </motion.div>
        </div>
    );
}
