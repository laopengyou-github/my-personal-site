import Image from 'next/image'
import { Work } from '@/data/works'

interface WorkCardProps {
  work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
  const categoryColors = {
    photography: 'bg-amber-100 text-amber-700',
    video: 'bg-blue-100 text-blue-700',
    code: 'bg-purple-100 text-purple-700',
  }
  
  const categoryLabels = {
    photography: '📷 摄影',
    video: '🎬 视频',
    code: '💻 代码',
  }

  return (
    <a 
      href={work.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 bg-warm-100 overflow-hidden">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-warm-300 text-4xl">
            {work.category === 'photography' && '📷'}
            {work.category === 'video' && '🎬'}
            {work.category === 'code' && '💻'}
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-3 py-1 rounded-full ${categoryColors[work.category]}`}>
            {categoryLabels[work.category]}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-medium text-warm-900 group-hover:text-warm-300 transition-colors">
          {work.title}
        </h3>
        <p className="mt-1 text-sm text-warm-400 line-clamp-2">
          {work.description}
        </p>
        <div className="mt-3 text-xs text-warm-300">
          {new Date(work.date).toLocaleDateString('zh-CN')}
        </div>
      </div>
    </a>
  )
}