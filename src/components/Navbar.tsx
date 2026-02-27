import { NavLink } from 'react-router-dom'

const linkBase =
  'text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors duration-200'

const linkActive = '!text-cyan-300'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-bold tracking-widest uppercase transition-colors ${
              isActive ? 'text-cyan-300' : 'text-white hover:text-cyan-300'
            }`
          }
        >
          seanwelch<span className="text-cyan-400">.dev</span>
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
