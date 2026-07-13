import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 开启静态导出
  images: {
    unoptimized: true,  // 关键！禁用 next/image 优化
  },
  // 如果部署到子目录，可以加这行（可选）
  // basePath: '/你的仓库名',
};

export default nextConfig;