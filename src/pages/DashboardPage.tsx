const DashboardPage = () => {
  const stats = [
    { label: 'Aktive Projekte', value: '12', icon: '🏗️', color: 'bg-blue-500' },
    { label: 'Offene Aufgaben', value: '34', icon: '📋', color: 'bg-orange-500' },
    { label: 'Kunden', value: '89', icon: '👥', color: 'bg-green-500' },
    { label: 'Umsatz (Monat)', value: '€ 125.4K', icon: '💰', color: 'bg-purple-500' },
  ];

  const recentProjects = [
    { id: 1, name: 'Tiefbau Hauptstraße', status: 'In Arbeit', progress: 65 },
    { id: 2, name: 'Kanalsanierung Nord', status: 'Planung', progress: 20 },
    { id: 3, name: 'Brückenbau A42', status: 'In Arbeit', progress: 45 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg text-white text-2xl`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Aktuelle Projekte</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                  <span className="text-sm text-gray-500">{project.status}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{project.progress}% abgeschlossen</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center">
          <span className="text-2xl mr-3">✅</span>
          <div>
            <h3 className="font-semibold text-green-800">Routing funktioniert!</h3>
            <p className="text-green-700">Die Dashboard-Seite wurde erfolgreich geladen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;