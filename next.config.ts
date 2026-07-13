import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // ← 添加这一行，开启静态导出
};

export default nextConfig;
