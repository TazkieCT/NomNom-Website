"use client"

import { Search, CreditCard, ShoppingBag } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Browse Deals",
      description: "Explore surplus food from nearby restaurants at discounted prices",
    },
    {
      icon: CreditCard,
      title: "Reserve & Pay",
      description: "Select your meals and complete your purchase securely online",
    },
    {
      icon: ShoppingBag,
      title: "Pick Up",
      description: "Collect your delicious food during the specified pickup window",
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Save money and reduce food waste in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <IconComponent className="w-14 h-14 text-red-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
