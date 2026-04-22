"use client";

import { MouseEvent, ReactNode, useState } from "react";

type DownloadButtonProps = {
  className?: string;
  children: ReactNode;
  initialUrl: string;
};

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export default function DownloadButton({
  className,
  children,
  initialUrl,
}: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || isModifiedClick(event)) {
      return;
    }

    event.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/apk-url", { cache: "no-store" });
      if (response.ok) {
        const data = (await response.json()) as { url?: string };
        if (data.url) {
          window.location.assign(data.url);
          return;
        }
      }
    } catch {
      // fall through to initial URL
    } finally {
      setIsLoading(false);
    }

    window.location.assign(initialUrl);
  };

  return (
    <a
      href={initialUrl}
      className={className}
      onClick={onClick}
      aria-busy={isLoading}
      data-loading={isLoading ? "true" : "false"}
    >
      {isLoading ? "正在获取最新下载地址..." : children}
    </a>
  );
}
