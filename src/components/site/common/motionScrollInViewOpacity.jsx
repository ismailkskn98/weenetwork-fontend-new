'use client';
import React from 'react'
import { motion } from 'motion/react'

export default function MotionScrollInViewOpacity({ children, className }) {
    return (
        <motion.article
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
            className={`${className}`}
        >
            {children}
        </motion.article>
    )
}
