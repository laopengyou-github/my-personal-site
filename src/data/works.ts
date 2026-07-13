export interface Work {
  id: string
  title: string
  description: string
  category: 'photography' | 'video' | 'code'
  image?: string
  link: string
  date: string
}

export const works: Work[] = [
  // 摄影作品
  {
    id: 'photo-1',
    title: '小紫花',
    description: '在去往伊犁的路上拍摄的一朵小紫花',
    category: 'photography',
    image: '/images/photo-1.jpg',
    link: 'https://unsplash.com/...',
    date: '2026-06-15'
  },
  {
    id: 'photo-2',
    title: '同行陌生伙伴',
    description: '给一起旅行的陌生伙伴拍的路人照',
    category: 'photography',
    image: '/images/photo-2.jpg',
    link: 'https://unsplash.com/...',
    date: '2026-05-20'
  },
  {
    id: 'photo-3',
    title: '旅行路上的塔',
    description: '草原上唯一的一座塔，孤独而美丽',
    category: 'photography',
    image: '/images/photo-3.jpg',
    link: 'https://unsplash.com/...',
    date: '2026-04-10'
  },
  
  // 短视频
  {
    id: 'video-1',
    title: '前海石公园',
    description: '用镜头记录前海石公园的美丽景色',
    category: 'video',
    image: '/images/video-1.jpg',
    link: 'https://www.bilibili.com/video/BV1NFTF6fEXX/?spm_id_from=333.1387.homepage.video_card.click&vd_source=49ee7eca0e8399724dcb20a7f86b5440',
    date: '2026-03-01'
  },
  {
    id: 'video-2',
    title: '新疆的雪山',
    description: '深夜城市的独行记录',
    category: 'video',
    image: '/images/video-2.jpg',
    link: 'https://bilibili.com/...',
    date: '2026-01-15'
  },
  
  // GitHub 项目
  {
    id: 'code-1',
    title: '个人博客系统',
    description: '基于 Next.js 的全栈博客',
    category: 'code',
    image: '/images/code-1.png',
    link: 'https://github.com/laopengyou-github',
    date: '2025-12-01'
  },
  {
    id: 'code-2',
    title: '天气小程序',
    description: '极简风格的天气预报工具',
    category: 'code',
    image: '/images/code-2.jpg',
    link: 'https://github.com/laopengyou-github',
    date: '2025-10-20'
  }
]

// 按分类获取
export function getWorksByCategory(category: Work['category']) {
  return works.filter(work => work.category === category)
}

// 获取最新作品（首页展示）
export function getLatestWorks(limit: number = 6) {
  return works
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}