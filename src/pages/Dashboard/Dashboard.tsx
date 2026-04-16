function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Users", "Revenue", "Sessions"].map((title, i) => (
          <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-3xl font-bold text-indigo-600 mt-1">{(i + 1) * 128}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
