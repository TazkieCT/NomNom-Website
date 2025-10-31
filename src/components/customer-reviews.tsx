"use client"

import { User, Star } from "lucide-react"

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Sarah Chen",
      rating: 5,
      review: "Amazing experience! Got a gourmet meal for half the price. The food was fresh and delicious. Definitely doing this again!",
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      review: "Love this concept! Not only am I saving money, but I'm also helping reduce food waste. Win-win!",
    },
    {
      name: "Emma Thompson",
      rating: 5,
      review: "The variety of restaurants is incredible. I've discovered so many new places in my neighborhood through this app.",
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Join thousands of happy customers saving money and fighting food waste</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <User className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
