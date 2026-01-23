'use client';
import { motion } from 'framer-motion';


export default function Hero() {
return (
<section className="container py-20">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="grid gap-6 md:grid-cols-2 items-center"
>
<div>
<h1 className="text-4xl md:text-5xl font-extrabold">Hi, Im <span className="text-indigo-600 dark:text-indigo-400">Sundaram</span></h1>
<p className="mt-4 max-w-xl">Frontend Developer — building accessible, responsive, and delightful user experiences with React & Next.js.</p>
<div className="mt-6 flex gap-4">
<a href="/resume.pdf" className="px-4 py-2 rounded-md border">Download Resume</a>
<a href="#projects" className="px-4 py-2 rounded-md bg-indigo-600 text-white">See Projects</a>
</div>
</div>


<div className="mx-auto w-full max-w-sm">
<motion.img
src="https://niceillustrations.com/wp-content/uploads/2021/03/Super-Hero-color-800px.png"
alt="hero"
initial={{ scale: 0.95 }}
animate={{ scale: 1 }}
transition={{ duration: 0.6 }}
/>
</div>
</motion.div>
</section>
);
}