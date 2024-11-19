import type { Metadata } from 'next';
import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Suspense } from 'react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Sweet & Wonder - Delicious Dessert Recipes',
  description: 'Discover a delightful collection of dessert recipes, from classic cakes to creative confections.',
};

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16">
      <Header />
      {children}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
      </body>
    </html>
  );
}
