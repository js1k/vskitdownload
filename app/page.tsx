import DownloadButton from "@/app/components/download-button";
import { APK_REDIRECT_ENDPOINT, resolveApkDownloadUrl } from "@/lib/apk";

export const dynamic = "force-dynamic";

const screenshots = [
  "https://pbcdn.aoneroom.com/image/2026/04/14/1bcca879d546f74c8c638967160157b6.jpg?x-oss-process=image/resize,w_720",
  "https://pbcdn.aoneroom.com/image/2026/04/14/26b8cc1400b8cefd0b2b08b3bd54fbe3.jpg?x-oss-process=image/resize,w_540",
  "https://pbcdn.aoneroom.com/image/2026/04/14/65169730c86412b370f7a946be84a86d.jpg?x-oss-process=image/resize,w_540",
];

const featureList = [
  {
    title: "接口实时解析下载地址",
    desc: "下载按钮会先请求服务端接口，再跳转到最新 APK 地址，降低链接失效概率。",
  },
  {
    title: "SEO 结构完整",
    desc: "包含标题、描述、FAQ、Schema 数据、sitemap 与 robots，利于搜索收录。",
  },
  {
    title: "移动端优先布局",
    desc: "手机端首屏信息密度更高，按钮更明显，减少下载路径步骤。",
  },
  {
    title: "安装流程一屏可见",
    desc: "把下载、授权安装、首次打开流程做成步骤卡片，降低用户流失。",
  },
];

const faqList = [
  {
    q: "这个下载链接是怎么来的？",
    a: "页面不会写死 APK 文件地址，而是先请求官方 redirect 接口，再读取跳转地址。",
  },
  {
    q: "为什么还保留 redirect 备用链接？",
    a: "如果临时拿不到 Location，我们会自动回退到官方 redirect 链接，确保下载按钮始终可用。",
  },
  {
    q: "支持哪些 Android 版本？",
    a: "建议 Android 5.0 及以上版本，旧设备可能出现兼容性差或运行卡顿。",
  },
  {
    q: "安装 APK 要注意什么？",
    a: "从浏览器下载后，在系统设置中允许该来源安装未知应用，然后完成安装。",
  },
];

function formatFetchedAt(iso: string): string {
  return new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Shanghai",
  }).format(new Date(iso));
}

export default async function HomePage() {
  const apk = await resolveApkDownloadUrl();
  const fetchedAtLabel = formatFetchedAt(apk.fetchedAt);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "VSKit APK 下载站",
        url: "/",
        inLanguage: "zh-CN",
      },
      {
        "@type": "WebPage",
        name: "VSKit APK 下载 | Android 官方安装包",
        url: "/",
        inLanguage: "zh-CN",
        description:
          "VSKit APK 下载页，下载地址通过官方接口实时获取，并提供安装步骤和常见问题。",
      },
      {
        "@type": "SoftwareApplication",
        name: "VSKit",
        applicationCategory: "EntertainmentApplication",
        operatingSystem: "Android",
        softwareVersion: "latest",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        downloadUrl: apk.url,
        installUrl: APK_REDIRECT_ENDPOINT,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqList.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <div className="container header-row">
          <a href="#top" className="brand">
            <span className="brand-dot" />
            VSKit APK
          </a>
          <nav className="top-nav" aria-label="页面导航">
            <a href="#features">优势</a>
            <a href="#screens">截图</a>
            <a href="#faq">FAQ</a>
          </nav>
          <DownloadButton className="button button-sm button-primary" initialUrl={apk.url}>
            立即下载
          </DownloadButton>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-badge">Android APK · SEO 落地页</p>
            <h1>VSKit APK 下载页面</h1>
            <p className="hero-subtitle">
              参考 vskitapk.com 结构重做，下载地址通过接口动态解析。页面布局与样式已改成新的视觉方案，适配手机和桌面端。
            </p>
            <div className="cta-row">
              <DownloadButton className="button button-lg button-primary" initialUrl={apk.url}>
                下载 VSKit APK
              </DownloadButton>
              <a href="#install" className="button button-lg button-outline">
                查看安装步骤
              </a>
            </div>
            <ul className="hero-meta">
              <li>
                <span>包名</span>
                <code>com.community.vskit</code>
              </li>
              <li>
                <span>更新时间</span>
                <strong>{fetchedAtLabel}</strong>
              </li>
              <li>
                <span>地址来源</span>
                <strong>{apk.source === "resolved-location" ? "302 Location" : "Redirect Fallback"}</strong>
              </li>
            </ul>
          </div>

          <aside className="hero-panel">
            <h2>下载链路</h2>
            <ol>
              <li>请求官方接口：`/pkg/redirect`</li>
              <li>读取响应头 `Location`</li>
              <li>跳转到实时 APK 文件地址</li>
            </ol>
            <p>
              备用地址：
              <a href={APK_REDIRECT_ENDPOINT} target="_blank" rel="noreferrer">
                官方 redirect 链接
              </a>
            </p>
          </aside>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <h2>页面能力</h2>
          <div className="grid-cards">
            {featureList.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screens" className="section section-muted">
        <div className="container">
          <h2>应用截图</h2>
          <p className="section-intro">素材来自参考站点展示图，布局与样式已重做。</p>
          <div className="shots-grid">
            {screenshots.map((src, idx) => (
              <figure key={src} className="shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`VSKit 应用截图 ${idx + 1}`} loading={idx === 0 ? "eager" : "lazy"} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="section">
        <div className="container">
          <h2>安装步骤</h2>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>点击下载</h3>
              <p>点击下载按钮，页面会先请求接口并获取最新 APK 地址。</p>
            </article>
            <article>
              <span>02</span>
              <h3>授权安装</h3>
              <p>在系统里允许浏览器或文件管理器安装未知来源应用。</p>
            </article>
            <article>
              <span>03</span>
              <h3>完成安装</h3>
              <p>安装完成后打开 VSKit，即可开始浏览短剧与影片内容。</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="section section-muted">
        <div className="container">
          <h2>常见问题</h2>
          <div className="faq-list">
            {faqList.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="section final-cta">
        <div className="container final-cta-inner">
          <h2>准备好下载了吗？</h2>
          <p>点击按钮后将优先请求接口获取最新地址，再跳转 APK 下载。</p>
          <DownloadButton className="button button-lg button-primary" initialUrl={apk.url}>
            下载 VSKit APK
          </DownloadButton>
        </div>
      </section>
    </main>
  );
}
