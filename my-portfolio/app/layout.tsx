import './globals.css';
import React from 'react';


export const metadata = {
title: 'Sundaram Seth — Frontend Developer',
description: 'Portfolio of Your Name — React, Next.js, Tailwind, Framer Motion',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<div className="min-h-screen bg-black text-white relative overflow-x-hidden">
{children}
</div>
</body>
</html>
);
}