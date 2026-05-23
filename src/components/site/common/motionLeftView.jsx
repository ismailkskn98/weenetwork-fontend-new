'use client';
import React from 'react'
import { motion } from 'motion/react'

export default function MotionLeftView({ children, className }) {
    return (
        <motion.div
            initial={{ x: -150, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
            className={`${className}`}
        >{children}
        </motion.div>
    )
}
