import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Marketplace from './pages/Marketplace'
import AboutUs from './pages/AboutUs'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import Home from './pages/Dashboard'

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end style={({isActive}) => ({fontWeight: isActive ? '700' : '400'})}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/marketplace" style={({isActive}) => ({fontWeight: isActive ? '700' : '400'})}>
                Marketplace
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({isActive}) => ({fontWeight: isActive ? '700' : '400'})}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" style={({isActive}) => ({fontWeight: isActive ? '700' : '400'})}>
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{padding: '1rem'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
