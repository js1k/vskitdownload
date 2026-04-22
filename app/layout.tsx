import type { Metadata } from 'next';

import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vskitdownload.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'VSKit Official Download | vskitOfficial download',
        template: '%s | VSKit Drama APK'
    },
    description: 'vskitOfficial download: Official VSKit APK download website with multilingual pages and real-time interface URL parsing.',
    alternates: {
        canonical: '/zh'
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/zh',
        title: 'VSKit Official Download | vskitOfficial download',
        description: 'Official VSKit APK download website for short drama users. Supports multilingual SEO landing pages.',
        siteName: 'VSKit Official Download',
        images: [
            {
                url: '/logo.png',
                width: 128,
                height: 128,
                alt: 'VSKit official logo'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VSKit Official Download | vskitOfficial download',
        description: 'Official VSKit APK download website.',
        images: ['/logo.png']
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/logo.png'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
