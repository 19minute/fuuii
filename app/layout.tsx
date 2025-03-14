// import 'tailwindcss/tailwind.css';
// Or if you have a custom Tailwind setup:
// import '@/styles/tailwind.css';
import React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'Dashboard App',
  description: 'Interactive dashboard with draggable grid layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
