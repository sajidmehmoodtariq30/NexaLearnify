const DashboardStats = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${stat.bgColor || 'bg-indigo-500'}`}>
                <span className="text-white text-sm font-medium">
                  {stat.icon || '#'}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              {stat.change && (
                <p className={`text-sm ${stat.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change > 0 ? '+' : ''}{stat.change}% from last month
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
