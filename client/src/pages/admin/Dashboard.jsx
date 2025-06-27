import DashboardStats from '../../components/features/dashboard/DashboardStats';
import ActivityFeed from '../../components/features/dashboard/ActivityFeed';
import QuickActions from '../../components/features/dashboard/QuickActions';

const AdminDashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    {
      label: 'Total Users',
      value: '2,847',
      change: 18,
      icon: '👥',
      bgColor: 'bg-blue-500'
    },
    {
      label: 'Active Courses',
      value: '156',
      change: 12,
      icon: '📚',
      bgColor: 'bg-green-500'
    },
    {
      label: 'Monthly Revenue',
      value: '$48,394',
      change: 25,
      icon: '💰',
      bgColor: 'bg-yellow-500'
    },
    {
      label: 'Platform Rating',
      value: '4.9',
      change: 5,
      icon: '⭐',
      bgColor: 'bg-purple-500'
    }
  ];

  const activities = [
    {
      type: 'user',
      message: '47 new user registrations today',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
    },
    {
      type: 'course',
      message: 'Course "Machine Learning Basics" approved and published',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      type: 'payment',
      message: '$2,340 in course purchases processed',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
    },
    {
      type: 'system',
      message: 'Server maintenance completed successfully',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
    }
  ];

  const quickActions = [
    {
      title: 'User Management',
      description: 'Manage user accounts',
      icon: '👥',
      onClick: () => console.log('User management'),
      color: 'border-blue-300 hover:border-blue-500 hover:bg-blue-50'
    },
    {
      title: 'Course Approval',
      description: '8 courses pending review',
      icon: '✅',
      onClick: () => console.log('Course approval'),
      color: 'border-yellow-300 hover:border-yellow-500 hover:bg-yellow-50'
    },
    {
      title: 'Analytics Report',
      description: 'Generate platform report',
      icon: '📊',
      onClick: () => console.log('Analytics report'),
      color: 'border-green-300 hover:border-green-500 hover:bg-green-50'
    },
    {
      title: 'System Settings',
      description: 'Configure platform',
      icon: '⚙️',
      onClick: () => console.log('System settings'),
      color: 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Platform overview and management tools.</p>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions actions={quickActions} />
        <ActivityFeed activities={activities} />
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Server Status</p>
                <p className="text-lg font-semibold text-green-600">Operational</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">CPU Usage</p>
                <p className="text-lg font-semibold text-blue-600">42%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💾</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Storage</p>
                <p className="text-lg font-semibold text-purple-600">68% Used</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Users */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent User Registrations</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registration Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">JD</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">john@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Student</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Today</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-medium">SA</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Sarah Adams</div>
                      <div className="text-sm text-gray-500">sarah@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Teacher</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yesterday</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
