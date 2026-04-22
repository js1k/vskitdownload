import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import LocalePage from '@/app/components/locale-page';
import { buildLocaleMetadata } from '@/lib/metadata';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n';

type PageProps = {
    params: {
        locale: string;
    };
};

export const dynamic = 'force-dynamic';

export function generateMetadata({ params }: PageProps): Metadata {
    if (!isLocale(params.locale)) {
        return {
            title: 'Not Found',
            robots: {
                index: false,
                follow: false
            }
        };
    }

    if (params.locale === defaultLocale) {
        return {
            title: 'Redirecting...',
            robots: {
                index: false,
                follow: false
            }
        };
    }

    return buildLocaleMetadata(params.locale as Locale);
}

export default async function LocaleHomePage({ params }: PageProps) {
    if (!isLocale(params.locale)) {
        notFound();
    }

    if (params.locale === defaultLocale) {
        redirect('/');
    }

    return <LocalePage locale={params.locale as Locale} />;
}
