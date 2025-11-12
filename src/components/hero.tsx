"use client"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-red-600">Delicious</span>
              <span className="text-black"> Food</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Save money while saving the planet. Buy surplus food from local restaurants at up to 70% off. Pick up
              yourself and enjoy quality meals that would otherwise go to waste.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium">
                Browse Deals
              </button>
              <button className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/delicious-food-with-pancakes-berries-and-pastries.jpg"
              alt="Delicious food"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[120px]"
        >
          <path
            d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"
            className="fill-red-600"
          ></path>
        </svg>
      </div>
    </section>
  )
}
