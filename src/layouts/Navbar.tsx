import { NavLink } from "react-router"
import { navLinks } from "./navLinks"

interface NavbarProps {
  onMenuClick: () => void
}

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm z-20">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-xl font-bold text-indigo-600">MyApp</span>
      </div>

      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <span className="hidden sm:block text-sm text-gray-500">Enrique</span>
        <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-semibold">
          E
        </div>
      </div>
    </header>
  )
}

export default Navbar
