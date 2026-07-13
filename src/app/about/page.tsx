import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom max-w-2xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-warm-400 hover:text-warm-900 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          回到首页
        </Link>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-3xl font-light text-warm-900">关于我</h1>
          
          <div className="mt-8 space-y-6 text-warm-600 leading-relaxed">
            <p>
              你好！我是 刘佩羽，一个热爱用镜头和代码记录生活的创作者。
            </p>
            
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center p-4 bg-warm-50 rounded-xl">
                <div className="text-2xl">📷</div>
                <div className="text-sm text-warm-900 mt-1">摄影师</div>
              </div>
              <div className="text-center p-4 bg-warm-50 rounded-xl">
                <div className="text-2xl">💻</div>
                <div className="text-sm text-warm-900 mt-1">开发者</div>
              </div>
              <div className="text-center p-4 bg-warm-50 rounded-xl">
                <div className="text-2xl">🐱</div>
                <div className="text-sm text-warm-900 mt-1">铲屎官</div>
              </div>
            </div>
            
            <p>
              我住在塔城，喜欢在草原和城市之间游走，寻找那些被忽略的美丽瞬间。
              这个网站是我分享作品和想法的小角落，希望能给你带来一些温暖或灵感。
            </p>
            
            <div className="pt-4 border-t border-warm-100">
              <h3 className="font-medium text-warm-900">找到我</h3>
              <div className="flex gap-4 mt-3">
                <a href="#" className="text-warm-400 hover:text-warm-900">GitHub</a>
                <a href="#" className="text-warm-400 hover:text-warm-900">B站</a>
                <a href="#" className="text-warm-400 hover:text-warm-900">小红书</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}