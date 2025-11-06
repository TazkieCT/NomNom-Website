import { Link } from "react-router-dom"

export default function AboutUs() {
  return (
    <div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our mission: make great food accessible</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              NomNom helps restaurants reduce surplus and food waste by connecting them with local
              customers through time-sensitive deals. We believe delicious food should find a plate
              — not the bin. Our platform makes discovery, claiming, and redemption quick and
              reliable for both diners and merchants.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-5 py-3 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
              >
                Browse deals
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                Partner with us
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold">Our impact so far</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                <strong className="text-red-600">1,200+</strong> weekly deals posted by local merchants
              </li>
              <li>
                <strong className="text-red-600">35k+</strong> meals saved from waste and redistributed
              </li>
              <li>
                <strong className="text-red-600">4.8/5</strong> average customer satisfaction rating
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-lg font-semibold">For diners</h4>
            <p className="mt-2 text-gray-600">Discover high-value meals nearby and help reduce food waste. Great for budget-conscious eaters who love variety.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-lg font-semibold">For restaurants</h4>
            <p className="mt-2 text-gray-600">Turn unsold inventory into revenue with targeted promotions and simple redemption flows.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-lg font-semibold">For communities</h4>
            <p className="mt-2 text-gray-600">Support local businesses while improving food access and lowering environmental impact.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
