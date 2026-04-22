# VSKit SEO Landing

一个基于 Next.js 的 VSKit APK SEO 落地页示例。

## 本地启动

```bash
npm install
npm run dev
```

## 核心点

- `lib/apk.ts`：请求官方 `redirect` 接口并解析 `Location`
- `app/api/apk-url/route.ts`：对外提供最新地址接口
- `app/components/download-button.tsx`：点击时请求最新地址再跳转
- `app/page.tsx`：页面布局、文案、FAQ 和 JSON-LD SEO 数据
