import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 900)
  }

  return (
    <main className="min-h-[72vh] flex items-center justify-center px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold">Create your account</h1>
          <p className="mt-2 text-sm text-gray-600">Sign up to unlock local surplus food deals and save great meals.</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Full name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-100 outline-none" placeholder="Jane Doe" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-100 outline-none" placeholder="you@example.com" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-100 outline-none" placeholder="Create a password" />
          </label>

          <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition">
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          By creating an account you agree to our <a className="text-red-600 hover:underline" href="#">Terms</a> and <a className="text-red-600 hover:underline" href="#">Privacy Policy</a>.
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm">Already have an account? <Link to="/signin" className="text-red-600 hover:underline">Sign in</Link></p>
        </div>
      </motion.section>
    </main>
  )
}
