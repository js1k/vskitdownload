export const APK_REDIRECT_ENDPOINT = 'https://h5-api.aoneroom.com/pkg/redirect?a=novelhub&p=com.community.vskit&c=1';

const REQUEST_HEADERS = {
    'accept-language': 'en-US,en;q=0.9',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
};

export type ApkResolvedResult = {
    endpoint: string;
    url: string;
    statusCode: number | null;
    locationHeader: string | null;
    source: 'resolved-location' | 'redirect-fallback';
    fetchedAt: string;
};

function normalizeLocation(location: string | null): string | null {
    if (!location) {
        return null;
    }

    try {
        const nextUrl = new URL(location);
        if (nextUrl.protocol === 'http:' || nextUrl.protocol === 'https:') {
            return nextUrl.toString();
        }
        return null;
    } catch {
        return null;
    }
}

export async function resolveApkDownloadUrl(): Promise<ApkResolvedResult> {
    const fetchedAt = new Date().toISOString();

    try {
        const response = await fetch(APK_REDIRECT_ENDPOINT, {
            method: 'GET',
            redirect: 'manual',
            cache: 'no-store',
            headers: REQUEST_HEADERS
        });

        const location = normalizeLocation(response.headers.get('location'));

        if (location) {
            return {
                endpoint: APK_REDIRECT_ENDPOINT,
                url: location,
                statusCode: response.status,
                locationHeader: location,
                source: 'resolved-location',
                fetchedAt
            };
        }

        return {
            endpoint: APK_REDIRECT_ENDPOINT,
            url: APK_REDIRECT_ENDPOINT,
            statusCode: response.status,
            locationHeader: response.headers.get('location'),
            source: 'redirect-fallback',
            fetchedAt
        };
    } catch {
        // fallback below
    }

    return {
        endpoint: APK_REDIRECT_ENDPOINT,
        url: APK_REDIRECT_ENDPOINT,
        statusCode: null,
        locationHeader: null,
        source: 'redirect-fallback',
        fetchedAt
    };
}
