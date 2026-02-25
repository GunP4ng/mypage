import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // turbopack.root는 로컬 dev 서버 전용 설정 (next build / Vercel에는 영향 없음)
  // C:\Users\GunP4ng\package-lock.json이 존재해 Turbopack이 루트를 잘못 감지하는 문제 방지
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
