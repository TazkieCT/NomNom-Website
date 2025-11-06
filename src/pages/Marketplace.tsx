import { useMemo, useState } from "react"
import { motion } from "framer-motion"

type Deal = {
  id: string
  title: string
  price: string
  original?: string
  vendor: string
  eta: string
  image?: string
  tags?: string[]
}

const SAMPLE_DEALS: Deal[] = [
  { id: "1", title: "BBQ Chicken Rice Bowl", price: "$6", original: "$12", vendor: "Smokey's Grill", eta: "Ready now", tags: ["pickup"] },
  { id: "2", title: "Vegetarian Bento", price: "$5", original: "$10", vendor: "GreenLeaf", eta: "Prep in 10-20m", tags: ["vegan"] },
  { id: "3", title: "Artisan Pizza Slice + Salad", price: "$4", original: "$9", vendor: "Piazza", eta: "Ready in 5m", tags: ["dine-in"] },
  { id: "4", title: "Sushi Box - 8 pcs", price: "$8", original: "$16", vendor: "Ocean Roll", eta: "Prep in 15m", tags: ["fresh"] },
  { id: "5", title: "Daily Pastry Bundle", price: "$3", original: "$7", vendor: "Bakehouse", eta: "Ready now", tags: ["bakery"] },
]

export default function Marketplace() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState<string | null>(null)
  const [sort, setSort] = useState("popular")

  const deals = useMemo(() => {
    let list = SAMPLE_DEALS.filter((d) => d.title.toLowerCase().includes(query.toLowerCase()) || d.vendor.toLowerCase().includes(query.toLowerCase()))
    if (filter) list = list.filter((d) => d.tags?.includes(filter))
    if (sort === "price") list = list.slice().sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")))
    return list
  }, [query, filter, sort])

  return (
    <div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-extrabold">Marketplace — Today's surplus deals</h1>
            <p className="text-sm text-gray-600">Fresh, local deals uploaded by nearby restaurants. Claim quickly — quantities are limited.</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes or vendors"
              className="px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-200"
            />

            <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 border rounded-md">
              <option value="popular">Most popular</option>
              <option value="price">Price: low to high</option>
            </select>
          </div>
        </header>

        <div className="flex gap-4 mb-6 items-center">
          <span className="text-sm text-gray-600">Filter:</span>
          <div className="flex gap-2">
            {[
              [null, "All"],
              ["pickup", "Pickup"],
              ["vegan", "Vegan"],
              ["bakery", "Bakery"],
            ].map(([val, label]) => (
              <button
                key={String(val)}
                onClick={() => setFilter(val as string | null)}
                className={`px-3 py-1 rounded-full text-sm ${filter === val ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <motion.article
                key={deal.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow p-4 flex flex-col"
              >
                <div className="h-40 bg-gray-50 rounded-md mb-3 flex items-center justify-center text-gray-400">Image</div>
                <h3 className="font-semibold text-lg">{deal.title}</h3>
                <p className="text-sm text-gray-600">{deal.vendor} • <span className="text-xs text-gray-500">{deal.eta}</span></p>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-gray-900">{deal.price}</div>
                    {deal.original && <div className="text-sm line-through text-gray-400">{deal.original}</div>}
                  </div>

                  <button className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition text-sm">
                    Claim
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {deals.length === 0 && (
            <div className="mt-8 text-center text-gray-600">No deals match your search — try clearing filters or checking back later.</div>
          )}
        </section>
      </main>
    </div>
  )
}
