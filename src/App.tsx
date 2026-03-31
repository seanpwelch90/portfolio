import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise-overlay dot-pattern min-h-screen bg-[#0a0a0a] text-white">
      <div className="gradient-bg" />
      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
