'use client'

import { useState, useEffect } from 'react'

const projects = [
  {
    title: "NEOM Marine Infrastructure",
    description: "Marine construction support for NEOM development",
    image: "https://eu-images.contentstack.com/v3/assets/bltdcfe6aab5515629e/blt912afb408dabb887/668e954f01ef8505e0e12169/Port_20of_20NEOM_20development_20area_20in_20focus_20at_20Oxagon34.jpg?disable=upscale&width=1200&height=630&fit=crop",
    sector: "Marine Operations",
    impact: "Supporting the world's most ambitious smart city project"
  },
  {
    title: "AMAALA Logistics Hub",
    description: "Comprehensive logistics solutions for luxury tourism development",
    image: "https://www.hoteliermiddleeast.com/cloud/2022/05/24/AMAALA-Reveals-Iconic-Designs-for-New-Yacht-Club-6-Copy-scaled.jpg",
    sector: "Logistics",
    impact: "Enabling seamless operations for premium tourism destination"
  },
  {
    title: "Red Sea Development Support",
    description: "Marine operations and facility management services",
    image: "https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/_1200x480_crop_center-center_80_none/Um-Rumah-Island-The-Red-Sea-Project.jpg",
    sector: "Marine Operations",
    impact: "Supporting sustainable tourism development initiatives"
  },
  {
    title: "Saudi Cruise Terminal",
    description: "Port operations and hospitality services for cruise tourism",
    image: "https://i0.wp.com/cruise-arabia.com/wp-content/uploads/2022/07/JeddahMarina_2aac1bc0ca.png?resize=639%2C317&ssl=1",
    sector: "Hospitality",
    impact: "Establishing Saudi Arabia as a premier cruise destination"
  }
]

export default function FeaturedProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('featured-projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="featured-projects" className="py-24 bg-white relative">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className={`grid lg:grid-cols-12 gap-10 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left title/intro like reference */}
          <div className="lg:col-span-4">
            <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 leading-tight font-heading mb-4">
              <span className="font-extralight">Featured </span>
              <span className="font-extralight text-gray-900">Projects</span>
            </h2>
            <p className="text-body-md md:text-body-lg text-gray-600 font-body max-w-md">
              Discover how HASCO is contributing to Saudi Arabia's most ambitious development projects, delivering world-class solutions across multiple sectors.
            </p>
          </div>

          {/* Right - horizontally scrollable cards */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6">
                {projects.map((project, index) => (
                  <article key={index} className="relative snap-start flex-shrink-0 w-[85%] md:w-[70%] lg:w-[85%]">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/35"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block bg-brand-primary text-white text-xs px-3 py-1 rounded-full mb-3 font-heading">NEWS</span>
                        <h3 className="text-white text-title-sm md:text-title-md font-heading">
                          {project.title}
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
