export interface NavLink {
  to: string
  label: string
}

export const navLinks: NavLink[] = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/dashboard/profile", label: "Profile" },
  { to: "/dashboard/settings", label: "Settings" },
]
