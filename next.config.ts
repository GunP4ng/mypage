import type { NextConfig } from "next";
import path from "path";

// GitHub Actions 빌드 환경 감지
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // GitHub Pages 빌드 시에만 정적 export + basePath 적용
  // Vercel 및 로컬 dev 환경에는 영향 없음
  ...(isGitHubPages && {
    output: "export",
    basePath: "/mypage",
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
  // 로컬 dev: Turbopack 루트 경로 고정 (상위 폴더 package.json 오감지 방지)
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
