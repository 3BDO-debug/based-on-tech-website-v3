"use client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// next
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
// theme
import ThemeConfig from "@/theme";
// Recoil
import { RecoilRoot } from "recoil";

export default function RootStyleRegistry({ children }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <RecoilRoot>
        <ThemeConfig>{children}</ThemeConfig>
      </RecoilRoot>
    </CacheProvider>
  );
}
