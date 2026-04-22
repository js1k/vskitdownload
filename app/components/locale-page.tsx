import Link from 'next/link';

import DownloadButton from '@/app/components/download-button';
import { APK_REDIRECT_ENDPOINT, resolveApkDownloadUrl } from '@/lib/apk';
import { getDictionary, getLocaleMeta, getLocalePath, localeMeta, locales, type Locale } from '@/lib/i18n';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vskitdownload.vercel.app';
const OFFICIAL_TAG = 'VSKit Official Download';

const screenshots = [
    'https://pbcdn.aoneroom.com/image/2026/04/14/1bcca879d546f74c8c638967160157b6.jpg?x-oss-process=image/resize,w_720',
    'https://pbcdn.aoneroom.com/image/2026/04/14/26b8cc1400b8cefd0b2b08b3bd54fbe3.jpg?x-oss-process=image/resize,w_540',
    'https://pbcdn.aoneroom.com/image/2026/04/14/65169730c86412b370f7a946be84a86d.jpg?x-oss-process=image/resize,w_540'
];

const containerClass = 'w-[min(1160px,calc(100%-2rem))] mx-auto';
const btnBase =
    'inline-flex items-center justify-center rounded-xl font-extrabold transition-all duration-200 cursor-pointer border border-transparent';
const btnSolid =
    'text-white bg-gradient-to-br from-brand-light to-brand-deep shadow-brand-glow hover:-translate-y-0.5 hover:shadow-brand-glow-strong';
const btnSmall = 'px-3 py-2 text-sm';
const btnLarge = 'px-6 py-3 text-[0.92rem]';

function formatFetchedAt(iso: string, localeTag: string): string {
    try {
        return new Intl.DateTimeFormat(localeTag, {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: 'Asia/Shanghai'
        }).format(new Date(iso));
    } catch {
        return iso;
    }
}

type Props = {
    locale: Locale;
};

export default async function LocalePage({ locale }: Props) {
    const localeInfo = getLocaleMeta(locale);
    const dictionary = getDictionary(locale);
    const apk = await resolveApkDownloadUrl();

    const fetchedAtLabel = formatFetchedAt(apk.fetchedAt, localeInfo.localeTag);
    const pagePath = getLocalePath(locale);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                name: 'VSKit Official Download',
                url: siteUrl,
                inLanguage: localeInfo.localeTag,
                description: dictionary.metaDescription
            },
            {
                '@type': 'WebPage',
                name: dictionary.metaTitle,
                url: `${siteUrl}${pagePath}`,
                inLanguage: localeInfo.localeTag,
                description: dictionary.metaDescription
            },
            {
                '@type': 'SoftwareApplication',
                name: 'VSKit',
                applicationCategory: 'EntertainmentApplication',
                operatingSystem: 'Android',
                softwareVersion: 'latest',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD'
                },
                downloadUrl: apk.url,
                installUrl: APK_REDIRECT_ENDPOINT
            },
            {
                '@type': 'Organization',
                name: 'VSKit Official Download',
                url: siteUrl,
                logo: `${siteUrl}/logo.png`
            },
            {
                '@type': 'FAQPage',
                mainEntity: dictionary.faqs.map(item => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.a
                    }
                }))
            }
        ]
    };

    return (
        <main
            className="min-h-screen"
            dir={localeInfo.dir}
            lang={localeInfo.localeTag}>
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className="sticky top-0 z-50 border-b border-line/60 backdrop-blur-md bg-bg/80">
                <div className={`${containerClass} min-h-[68px] grid grid-cols-[auto_1fr_auto] items-center gap-4`}>
                    <Link
                        href={pagePath}
                        className="inline-flex items-center gap-2 font-display text-2xl tracking-wide leading-none flex-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo.png"
                            alt="VSKit official logo"
                            className="w-[1.9rem] h-[1.9rem] rounded-md object-cover border border-white/15"
                        />
                        <span className="leading-none">VSKit</span>
                        <span className="inline-flex items-center justify-center min-h-[1.3rem] rounded-full px-1.5 text-[0.56rem] tracking-wide text-brand-soft bg-gradient-to-br from-brand-light/80 to-brand-deep font-sans">
                            {OFFICIAL_TAG}
                        </span>
                    </Link>

                    <nav
                        className="hidden md:inline-flex justify-self-center items-center gap-4 text-[0.92rem] font-bold text-text-muted"
                        aria-label="section nav">
                        <a
                            href="#features"
                            className="hover:text-text-body transition-colors">
                            {dictionary.navFeatures}
                        </a>
                        <a
                            href="#install"
                            className="hover:text-text-body transition-colors">
                            {dictionary.navInstall}
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-text-body transition-colors">
                            {dictionary.navFaq}
                        </a>
                    </nav>

                    <DownloadButton
                        className={`${btnBase} ${btnSolid} ${btnSmall}`}
                        initialUrl={apk.url}
                        loadingText={dictionary.loadingText}>
                        {dictionary.ctaPrimary}
                    </DownloadButton>
                </div>

                <div
                    className={`${containerClass} flex flex-nowrap md:flex-wrap gap-1.5 pb-2 overflow-x-auto md:overflow-visible`}
                    aria-label={dictionary.langMenuLabel}>
                    {locales.map(code => (
                        <Link
                            key={code}
                            href={getLocalePath(code)}
                            className={`inline-flex flex-none items-center justify-center min-h-[1.9rem] border rounded-full px-3 text-xs transition-all duration-200 ${
                                code === locale
                                    ? 'text-white border-brand bg-gradient-to-br from-brand-light/80 to-brand-deep'
                                    : 'border-line bg-surface/70 text-text-muted hover:bg-surface hover:border-brand/40'
                            }`}
                            lang={localeMeta[code].localeTag}
                            hrefLang={localeMeta[code].hreflang}>
                            {localeMeta[code].nativeName}
                        </Link>
                    ))}
                </div>
            </header>

            <section className="relative py-12 bg-gradient-to-b from-transparent to-brand/[0.05]">
                <div className={containerClass}>
                    <div className="rounded-2xl border border-brand/15 bg-gradient-to-br from-surface to-surface-strong text-text-body p-6 md:p-8 shadow-strong">
                        <p className="inline-flex m-0 px-2.5 py-1 rounded-full border border-brand/40 bg-brand/10 text-brand-soft text-xs font-extrabold tracking-widest">{dictionary.heroBadge}</p>
                        <h1 className="mt-3 mb-3 font-display font-extrabold text-white leading-tight text-[clamp(2rem,5.5vw,3.4rem)]">{dictionary.heroTitle}</h1>
                        <p className="m-0 max-w-[56ch] text-[#a8afc4] text-base leading-relaxed">{dictionary.heroSubtitle}</p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <DownloadButton
                                className={`${btnBase} ${btnSolid} ${btnLarge}`}
                                initialUrl={apk.url}
                                loadingText={dictionary.loadingText}>
                                {dictionary.ctaPrimary}
                            </DownloadButton>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <article className="rounded-xl border border-brand/15 bg-surface/60 p-3.5">
                                <span className="block text-xs text-text-muted">{dictionary.packageLabel}</span>
                                <strong className="block mt-1 text-sm text-text-body leading-snug break-words">com.community.vskit</strong>
                            </article>
                            <article className="rounded-xl border border-brand/15 bg-surface/60 p-3.5">
                                <span className="block text-xs text-text-muted">{dictionary.updatedLabel}</span>
                                <strong className="block mt-1 text-sm text-text-body leading-snug break-words">{fetchedAtLabel}</strong>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className={containerClass}>
                    <h2 className="mb-10 font-display text-white font-extrabold text-[clamp(1.6rem,3.2vw,2.2rem)] leading-tight text-center">{dictionary.screenshotAltPrefix}</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 md:min-h-[560px] md:[perspective:1400px] py-4">
                        {screenshots.map((url, index) => {
                            const positionClass =
                                index === 0
                                    ? 'md:[transform:perspective(1400px)_rotateY(28deg)_translateX(80px)_scale(0.88)] md:brightness-75 md:z-[1] md:animate-float-slow md:hover:brightness-95'
                                    : index === 1
                                      ? 'md:-translate-y-3 md:scale-[1.06] md:z-[3] md:shadow-phone-center md:animate-float md:hover:-translate-y-[18px] md:hover:scale-[1.08]'
                                      : 'md:[transform:perspective(1400px)_rotateY(-28deg)_translateX(-80px)_scale(0.88)] md:brightness-75 md:z-[1] md:animate-float-slow-delay md:hover:brightness-95';

                            return (
                                <article
                                    key={index}
                                    className={`w-[220px] md:w-[240px] flex-none rounded-[1.8rem] overflow-hidden border-[6px] border-bg bg-bg shadow-phone-side transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${positionClass}`}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={url}
                                        alt={`${dictionary.screenshotAltPrefix} ${index + 1}`}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        className="w-full h-auto block rounded-[1.1rem]"
                                    />
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                id="features"
                className="py-10 md:py-12">
                <div className={containerClass}>
                    <h2 className="m-0 font-display text-white font-extrabold text-[clamp(1.6rem,3.2vw,2.2rem)] leading-tight">{dictionary.featuresTitle}</h2>
                    <p className="mt-1 mb-6 text-text-muted max-w-[78ch]">{dictionary.featuresLead}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {dictionary.features.map(item => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-brand/15 bg-surface/80 p-5 transition-all duration-300 hover:border-brand/40 hover:bg-surface-strong/80 hover:shadow-[0_8px_20px_rgba(108,99,255,0.1)]">
                                <h3 className="m-0 text-lg text-text-body">{item.title}</h3>
                                <p className="mt-2 text-text-muted text-[0.95rem] leading-relaxed">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="install"
                className="py-10 md:py-12 border-y border-brand/10 bg-gradient-to-b from-surface-strong/40 to-transparent">
                <div className={containerClass}>
                    <h2 className="m-0 mb-6 font-display text-white font-extrabold text-[clamp(1.6rem,3.2vw,2.2rem)] leading-tight">{dictionary.installTitle}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {dictionary.installSteps.map((item, index) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-brand/15 bg-surface/80 p-5 transition-all duration-300 hover:border-brand/40 hover:bg-surface-strong/80">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand/20 to-brand/10 text-brand-light font-display font-extrabold text-lg">
                                    {String(index + 1)}
                                </span>
                                <h3 className="mt-3 text-[1.05rem] text-text-body">{item.title}</h3>
                                <p className="mt-2 text-text-muted text-[0.95rem] leading-relaxed">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="faq"
                className="py-10 md:py-12">
                <div className={containerClass}>
                    <h2 className="m-0 mb-6 font-display text-white font-extrabold text-[clamp(1.6rem,3.2vw,2.2rem)] leading-tight">{dictionary.faqTitle}</h2>
                    <div className="grid gap-3">
                        {dictionary.faqs.map(item => (
                            <details
                                key={item.q}
                                className="group rounded-xl border border-brand/15 bg-surface/80 p-4 transition-all duration-300 hover:border-brand/30 hover:bg-surface-strong/80">
                                <summary className="cursor-pointer font-extrabold text-text-body select-none hover:text-brand-light transition-colors">{item.q}</summary>
                                <p className="mt-3 text-text-muted leading-relaxed text-[0.95rem]">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 pb-5">
                <div className={containerClass}>
                    <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-surface-strong/80 to-surface/60 shadow-[0_8px_24px_rgba(108,99,255,0.12)] text-center p-6 md:p-8">
                        <h2 className="mb-2 font-display text-white font-extrabold text-[clamp(1.6rem,3.2vw,2.2rem)] leading-tight">{dictionary.finalTitle}</h2>
                        <p className="mb-5 text-text-muted">{dictionary.finalLead}</p>
                        <DownloadButton
                            className={`${btnBase} ${btnSolid} ${btnLarge}`}
                            initialUrl={apk.url}
                            loadingText={dictionary.loadingText}>
                            {dictionary.downloadNow}
                        </DownloadButton>
                    </div>
                </div>
            </section>

            <footer className="py-6 pb-8 border-t border-brand/10">
                <div className={containerClass}>
                    <p className="m-0 text-[0.85rem] text-text-muted">{dictionary.footerNote}</p>
                    <p className="mt-3 inline-flex items-center gap-2">
                        <a
                            href={APK_REDIRECT_ENDPOINT}
                            target="_blank"
                            rel="noreferrer"
                            className="text-brand-light font-bold underline underline-offset-2 hover:text-brand-soft">
                            API Endpoint
                        </a>
                    </p>
                </div>
            </footer>
        </main>
    );
}
