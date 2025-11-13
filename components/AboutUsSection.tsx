export default function AboutUsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-title-lg md:text-title-xl font-light text-brand-dark mb-4 font-heading">
            <span className="font-extralight">About </span><span className="font-extralight text-brand-dark">us</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500">
            Communication © 2025 - Privacy Policy
          </p>
        </div>
      </div>
    </section>
  )
}






















