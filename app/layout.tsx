import type { Metadata } from "next";

import localFont from 'next/font/local';
import "./globals.css";

const dmSans = localFont( {
  src: [
    {
      path: './fonts/DMSans_24pt-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-Thin.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-Light.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/DMSans_24pt-ExtraLight.ttf',
      weight: '100',
      style: 'normal'
    }
  ],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Transform Your Space: Home and Office Interior Design Ideas",
  description: "Explore beautiful and functional interior design tips for your home and office. Create a space that inspires creativity and productivity."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dmSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
