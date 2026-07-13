// 删除这行 import
// import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 左侧文字 */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              <span className="text-[#D4A574]">用镜头</span>
              <br />
              <span className="text-[#3D3D3D]">和代码</span>
              <br />
              <span className="text-[#B8A99A]">记录生活</span>
            </h1>
            <p className="mt-6 text-[#B8A99A] text-lg max-w-md mx-auto md:mx-0">
              你好，我是 Perry。摄影师、开发者、生活记录者。
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
                href="#works" 
                className="px-8 py-3 bg-[#D4A574] text-white rounded-full hover:bg-[#B8A99A] transition-colors"
              >
                看看我的作品
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 border border-[#D4A574] text-[#3D3D3D] rounded-full hover:bg-[#FAF0E6] transition-colors"
              >
                了解我
              </a>
            </div>
          </div>
          
          {/* 右侧头像 - 使用普通 img 标签 */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl bg-[#F5E6D3]">
              <img
                src="/images/avatar.jfif"
                alt="Perry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}