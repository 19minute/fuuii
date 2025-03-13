// import 'tailwindcss/tailwind.css';
// Or if you have a custom Tailwind setup:
// import '@/styles/tailwind.css';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
