"use client"

export default function AvailableDeals() {
  const deals = [
    { id: 1, restaurant: "Dummy Restaurant", cuisine: "Dummy Food", location: "Dummy Location", price: 0 },
    { id: 2, restaurant: "Dummy Restaurant", cuisine: "Dummy Food", location: "Dummy Location", price: 0 },
    { id: 3, restaurant: "Dummy Restaurant", cuisine: "Dummy Food", location: "Dummy Location", price: 0 },
    { id: 4, restaurant: "Dummy Restaurant", cuisine: "Dummy Food", location: "Dummy Location", price: 0 },
    { id: 5, restaurant: "Dummy Restaurant", cuisine: "Dummy Food", location: "Dummy Location", price: 0 },
    { id: 6, restaurant: "Dummy Restaurant", cuisine: "Dummy Food", location: "Dummy Location", price: 0 },
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[120px] rotate-180"
        >
          <path
            d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"
            className="fill-red-600"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Available Right Now</h2>
          <p className="text-gray-600 text-lg">
            Fresh surplus food from local restaurants. Ready for pickup today. Grab your favorites before they're gone!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{deal.restaurant}</h3>
                <p className="text-gray-600 text-sm mb-1">{deal.cuisine}</p>
                <p className="text-gray-500 text-sm mb-4">{deal.location}</p>
                <p className="text-red-700 font-bold text-lg">Rp. {deal.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="relative inline-flex items-center px-8 py-3 text-red-700 font-bold rounded-lg cursor-pointer hover:bg-red-50 transition-colors group">
            {/* <span className="absolute inset-0 border-2 border-red-600 rounded-lg" style={{ clipPath: 'polygon(0 0, calc(100%) 0, calc(100%) 35%, calc(100% - 5px) 65%, calc(100%) 100%, 0 100%, 0 0)' }}></span> */}
            <span className="absolute inset-0 border-2 border-red-600 rounded-lg"></span>
            
            <span className="relative z-10">Explore More Deals</span>
            
            {/* <span className="absolute -right-4 top-1/2 w-8 h-8 rounded-full flex items-center justify-center text-red-600 text-4xl transition-transform group-hover:translate-x-1 z-20 leading-none" style={{ transform: 'translateY(-50%)' }}>
              →
            </span> */}
          </button>
        </div>
      </div>
    </section>
  )
}
