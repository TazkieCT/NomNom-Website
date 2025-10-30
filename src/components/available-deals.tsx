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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <button className="text-red-700 font-bold hover:text-red-900 transition">Explore More Deals →</button>
        </div>
      </div>
    </section>
  )
}
