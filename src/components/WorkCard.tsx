// 删除这行 import
// import Image from 'next/image'

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
      <div className="relative h-48 bg-[#FAF0E6] overflow-hidden">
        {work.image ? (
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-[#D4A574]">
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
        <h3 className="font-medium text-[#3D3D3D] group-hover:text-[#D4A574] transition-colors">
          {work.title}
        </h3>
        <p className="mt-1 text-sm text-[#B8A99A] line-clamp-2">
          {work.description}
        </p>
        <div className="mt-3 text-xs text-[#D4A574]">
          {new Date(work.date).toLocaleDateString('zh-CN')}
        </div>
      </div>
    </a>
  )
}