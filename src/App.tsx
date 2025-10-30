import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Marketplace from './pages/Marketplace'
import AboutUs from './pages/AboutUs'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />

      <main style={{padding: '1rem'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
