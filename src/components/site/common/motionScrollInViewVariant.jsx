'use client';
import React, { Children } from 'react';
import { motion, stagger } from 'motion/react';

export default function MotionScrollInViewVariant({ children, className, childClassname }) {
    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: stagger(0.18, { startDelay: 0.1 })
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.main
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
        >
            {React.Children.map(children, (child, i) => (
                <motion.section key={i} variants={item} className={childClassname} style={{ willChange: 'transform, opacity' }} >
                    {child}
                </motion.section>
            ))}
        </motion.main>
    );
}
