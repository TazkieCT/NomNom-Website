import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Mock delay to mimic network
    setTimeout(() => setLoading(false), 800)
  }

  return (
    <main className="min-h-[72vh] flex items-center justify-center px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-md bg-gradient-to-br from-white via-red-50 to-white/95 rounded-2xl shadow-lg p-8"
      >
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in to claim deals and manage your vouchers.</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-200 outline-none"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <Link to="/forgot" className="text-sm text-red-600 hover:underline">Forgot?</Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-200 outline-none"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          New to NomNom?{' '}
          <Link to="/signup" className="text-red-600 font-medium hover:underline">Create an account</Link>
        </div>

        <div className="mt-6 border-t pt-4">
          <p className="text-xs text-gray-500">Or continue with</p>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <button aria-label="Continue with Google" className="px-3 py-2 bg-white rounded-lg shadow-sm text-sm">Google</button>
            <button aria-label="Continue with Apple" className="px-3 py-2 bg-white rounded-lg shadow-sm text-sm">Apple</button>
            <button aria-label="Continue with Facebook" className="px-3 py-2 bg-white rounded-lg shadow-sm text-sm">Facebook</button>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
