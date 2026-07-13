import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// 使用 Next.js 内置字体
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Perry - 用镜头和代码记录生活',
  description: '摄影师 | 开发者 | 生活记录者',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
