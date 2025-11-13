'use client'

import { useMemo } from 'react'

type NewsItem = {
  title: string
  image: string
  tag?: string
}

const news: NewsItem[] = [
  {
    title: 'Red Sea Global secures SAR 6.5 billion funding for AMAALA',
    image:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80',
    tag: 'NEWS',
  },
  {
    title: 'AMAALA Residences reveal new coastal masterplan',
    image:
      'https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/_1200x480_crop_center-center_80_none/Um-Rumah-Island-The-Red-Sea-Project.jpg',
    tag: 'NEWS',
  },
  {
    title: 'Logistics partnership announced for Neom seaport expansion',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1600&q=80',
    tag: 'NEWS',
  },
]

export default function LatestNews() {
  const items = useMemo(() => news, [])

  return (
    <section id="latest-news" className="py-24 bg-white">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left column - heading and blurb */}
          <div className="lg:col-span-4">
            <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 leading-tight font-heading mb-4">
              <span className="font-extralight">Latest </span>
              <span className="font-extralight text-gray-900">News</span>
            </h2>
            <p className="text-body-md md:text-body-lg text-gray-600 font-body max-w-md">
              The latest news, updates, media coverage, and industry insights.
            </p>
          </div>

          {/* Right column - horizontal media cards */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
                {items.map((n, idx) => (
                  <article key={idx} className="relative snap-start flex-shrink-0 w-[85%] md:w-[70%] lg:w-[85%]">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/35"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block bg-brand-primary text-white text-xs px-3 py-1 rounded-full mb-3 font-heading">
                          {n.tag || 'NEWS'}
                        </span>
                        <h3 className="text-white text-title-sm md:text-title-md font-heading">
                          {n.title}
                        </h3>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


