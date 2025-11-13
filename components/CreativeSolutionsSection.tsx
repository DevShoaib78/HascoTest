export default function CreativeSolutionsSection() {
  const solutions = [
    "Lorem ipsum dolor sit amet consectetur",
    "Adipiscing elit sed do eiusmod tempor",
    "Incididunt ut labore et dolore magna",
    "Aliqua ut enim ad minim veniam quis",
    "Nostrud exercitation ullamco laboris",
    "Nisi ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor in reprehenderit",
    "Voluptate velit esse cillum dolore eu"
  ]

  return (
    <section className="bg-brand-red py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 relative">
              CREATIVE
              <br />
              SOLUTIONS
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-white"></div>
            </h2>
            
            <div className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg">{solution}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-brand-primary px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              READ MORE
            </button>
          </div>

          {/* Right side - Monitor */}
          <div className="relative">
            {/* Carousel dots */}
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-3 h-3 bg-white rounded-full opacity-60"></div>
              ))}
            </div>

            {/* Monitor */}
            <div className="relative">
              {/* Monitor base */}
              <div className="w-full max-w-lg mx-auto">
                {/* Screen */}
                <div className="bg-gray-800 rounded-t-lg p-4 relative">
                  <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                    {/* Desktop background image */}
                    <div className="absolute inset-0 bg-brand-primary">
                      {/* Desert landscape representation */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-yellow-200">
                        <div className="absolute right-1/4 top-0 w-16 h-16 bg-yellow-300 transform rotate-45"></div>
                        <div className="absolute right-1/3 top-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
                      </div>
                      {/* Person silhouette */}
                      <div className="absolute bottom-1/4 right-1/3 w-4 h-8 bg-black rounded-t-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Monitor stand */}
                <div className="bg-gray-700 h-8 rounded-b-lg relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-600 rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




