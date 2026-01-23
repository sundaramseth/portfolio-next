'use client';

import { motion } from 'framer-motion';


const skills = [
'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'REST APIs'
];


export default function Skills() {
return (
<section id="skills" className="container py-12">
<h3 className="text-xl font-semibold">Skills</h3>
<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
{skills.map((s, i) => (
<motion.div
key={s}
initial={{ opacity: 0, y: 8 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.05 }}
className="p-4 border rounded-lg text-center"
>
{s}
</motion.div>
))}
</div>
</section>
);
}