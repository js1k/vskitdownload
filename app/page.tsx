import type { Metadata } from 'next';

import LocalePage from '@/app/components/locale-page';
import { buildLocaleMetadata } from '@/lib/metadata';
import { defaultLocale } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

export function generateMetadata(): Metadata {
    return buildLocaleMetadata(defaultLocale);
}

export default async function HomePage() {
    return <LocalePage locale={defaultLocale} />;
}
