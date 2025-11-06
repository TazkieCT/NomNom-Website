import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-700">We couldn't find the page you're looking for.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/" className="px-5 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition">Return home</Link>
          <Link to="/marketplace" className="px-5 py-3 border rounded-md text-gray-700 hover:bg-gray-100 transition">Browse marketplace</Link>
        </div>
      </div>
    </div>
  )
}
