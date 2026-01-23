'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';


export default function Navbar() {

const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);


useEffect(() => {
}, []);


return (
<nav className="container flex items-center justify-between py-6">
<div className="text-xl font-bold">Sundaram Seth</div>
<div className="flex items-center gap-4">
<a href="#projects" className="hover:underline">Projects</a>
<a href="#contact" className="hover:underline">Contact</a>
{mounted && (
<button
aria-label="Toggle Dark Mode"
onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
className="p-2 rounded-md border"
>
{theme === 'dark' ? <BsSun /> : <BsMoon />}
</button>
)}
</div>
</nav>
);
}