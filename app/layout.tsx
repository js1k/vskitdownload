import type { Metadata } from "next";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vskitdownload.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VSKit APK 下载站 | Android 官方安装包",
    template: "%s | VSKit APK 下载",
  },
  description:
    "VSKit APK 下载页面，提供 Android 安装包、安装步骤和常见问题。下载链接通过官方接口动态获取，避免过期地址。",
  keywords: [
    "VSKit",
    "VSKit APK",
    "VSKit 下载",
    "VSKit 安卓版",
    "com.community.vskit",
    "Android APK 下载",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    title: "VSKit APK 下载站 | Android 官方安装包",
    description:
      "下载 VSKit APK，支持 Android 手机安装。下载地址通过接口实时获取，减少失效问题。",
    siteName: "VSKit APK 下载站",
  },
  twitter: {
    card: "summary_large_image",
    title: "VSKit APK 下载站 | Android 官方安装包",
    description: "下载 VSKit APK，接口实时解析最新地址，适合做 SEO 落地页。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
