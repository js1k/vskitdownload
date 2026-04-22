import type { Metadata } from 'next';

import { getAlternateLanguageMap, getDictionary, getLocaleMeta, getLocalePath, localeMeta, locales, type Locale } from '@/lib/i18n';

const OFFICIAL_TAG = 'VSKit Official Download';

export function buildLocaleMetadata(locale: Locale): Metadata {
    const dictionary = getDictionary(locale);
    const localeInfo = getLocaleMeta(locale);
    const path = getLocalePath(locale);
    const alternates = getAlternateLanguageMap();
    const title = `${dictionary.metaTitle} | ${OFFICIAL_TAG}`;
    const description = dictionary.metaDescription;
    const keywords = Array.from(new Set([...dictionary.metaKeywords, OFFICIAL_TAG, 'vskit official download']));

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: path,
            languages: alternates
        },
        openGraph: {
            type: 'website',
            url: path,
            title,
            description,
            locale: localeInfo.ogLocale,
            alternateLocale: locales.filter(item => item !== locale).map(item => localeMeta[item].ogLocale),
            siteName: OFFICIAL_TAG,
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
            title,
            description,
            images: ['/logo.png']
        },
        robots: {
            index: true,
            follow: true
        }
    };
}
