import './globals.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';


export const metadata = {
title: 'Sundaram Seth — Frontend Developer',
description: 'Portfolio of Your Name — React, Next.js, Tailwind, Framer Motion',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<ThemeProvider attribute="class">
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center">
{children}
</div>
</ThemeProvider>
</body>
</html>
);
}