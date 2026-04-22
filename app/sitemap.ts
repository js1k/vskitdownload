import type { MetadataRoute } from 'next';

import { defaultLocale, locales } from '@/lib/i18n';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vskitdownload.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const localeEntries: MetadataRoute.Sitemap = locales.map(locale => ({
        url: `${siteUrl}/${locale}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: locale === defaultLocale ? 0.95 : 0.85
    }));

    return [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1
        },
        ...localeEntries
    ];
}
