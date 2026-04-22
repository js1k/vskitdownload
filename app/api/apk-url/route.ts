import { NextResponse } from 'next/server';

import { resolveApkDownloadUrl } from '@/lib/apk';

export const dynamic = 'force-dynamic';

export async function GET() {
    const result = await resolveApkDownloadUrl();

    return NextResponse.json(result, {
        headers: {
            'Cache-Control': 'no-store, max-age=0'
        }
    });
}
