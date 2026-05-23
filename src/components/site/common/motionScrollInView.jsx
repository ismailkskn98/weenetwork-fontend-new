'use client';
import React from 'react'
import { motion } from 'motion/react'

export default function MotionScrollInView({ children, className }) {
    return (
        <motion.section
            initial={{ y: 150, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            className={`${className}`}
        >
            {children}
        </motion.section>
    )
}
