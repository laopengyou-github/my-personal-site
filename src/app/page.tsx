import Hero from '@/components/Hero'
import WorkCard from '@/components/WorkCard'
import { getLatestWorks } from '@/data/works'
import { Camera, Video, Code } from 'lucide-react'

export default function Home() {
  const latestWorks = getLatestWorks(6)

  return (
    <main>
      <Hero />
      
      {/* 作品区域 */}
      <section id="works" className="py-20 bg-warm-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-warm-900">我的作品</h2>
            <p className="mt-2 text-warm-400">精选最近的一些创作</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/works" 
              className="inline-block px-8 py-3 border border-warm-300 text-warm-900 rounded-full hover:bg-warm-300 hover:text-white transition-colors"
            >
              查看全部作品 →
            </a>
          </div>
        </div>
      </section>
      
      {/* 底部 */}
      <footer className="py-12 text-center text-warm-400 text-sm border-t border-warm-100">
        <p>用 ❤️ 和 ☕ 制作 · {new Date().getFullYear()}</p>
        <p className="mt-2 text-xs">有空常来坐坐</p>
      </footer>
    </main>
  )
}