import type { MetadataRoute } from 'next';

import { defaultLocale, getLocalePath, localeMeta, locales } from '@/lib/i18n';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vskitdownload.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const languages = Object.fromEntries(locales.map(code => [localeMeta[code].hreflang, `${siteUrl}${getLocalePath(code)}`]));

    return locales.map(locale => ({
        url: `${siteUrl}${getLocalePath(locale)}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: locale === defaultLocale ? 1 : 0.8,
        alternates: {
            languages
        }
    }));
}
