import { NavLink } from "react-router"
import { navLinks } from "./navLinks"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay — mobile only */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-20
          w-64 bg-white border-r border-gray-200 shadow-sm
          flex flex-col gap-1 pt-4 px-3
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Menu
        </p>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </aside>
    </>
  )
}

export default Sidebar
