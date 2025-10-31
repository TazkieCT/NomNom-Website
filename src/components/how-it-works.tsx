"use client"

import { Search, CreditCard, ShoppingBag } from "lucide-react"
import { useState } from "react"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Search,
      title: "Browse Deals",
      description: "Explore surplus food from nearby restaurants at discounted prices",
      image: "/delicious-food-with-pancakes-berries-and-pastries.jpg"
    },
    {
      icon: CreditCard,
      title: "Reserve & Pay",
      description: "Select your meals and complete your purchase securely online",
      image: "/delicious-food-with-pancakes-berries-and-pastries.jpg"
    },
    {
      icon: ShoppingBag,
      title: "Pick Up",
      description: "Collect your delicious food during the specified pickup window",
      image: "/delicious-food-with-pancakes-berries-and-pastries.jpg"
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Save money and reduce food waste in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep === index
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-red-600 text-white shadow-lg scale-105' 
                      : 'bg-white hover:shadow-md hover:scale-102'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isActive ? 'bg-red-700' : 'bg-red-50'}`}>
                      <IconComponent 
                        className={`w-8 h-8 ${isActive ? 'text-white' : 'text-red-600'}`} 
                        strokeWidth={1.5} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className={`${isActive ? 'text-red-50' : 'text-gray-600'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right side - Image */}
          <div className="sticky top-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-[500px] object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-semibold">
                  Step {activeStep + 1}: {steps[activeStep].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
