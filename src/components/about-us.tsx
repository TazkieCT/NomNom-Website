"use client"

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-300 rounded-xl h-96" />

          <div className="space-y-6">
            <div className="h-8 bg-gray-300 rounded w-3/4" />
            <div className="h-6 bg-gray-300 rounded w-full" />
            <div className="h-6 bg-gray-300 rounded w-5/6" />
            <div className="h-6 bg-gray-300 rounded w-full" />
            <div className="h-6 bg-gray-300 rounded w-4/5" />
            <div className="h-6 bg-gray-300 rounded w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
