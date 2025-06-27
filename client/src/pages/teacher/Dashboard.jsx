import DashboardStats from '../../components/features/dashboard/DashboardStats';
import ActivityFeed from '../../components/features/dashboard/ActivityFeed';
import QuickActions from '../../components/features/dashboard/QuickActions';

const TeacherDashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    {
      label: 'Active Courses',
      value: '12',
      change: 15,
      icon: '📚',
      bgColor: 'bg-blue-500'
    },
    {
      label: 'Total Students',
      value: '387',
      change: 22,
      icon: '👥',
      bgColor: 'bg-green-500'
    },
    {
      label: 'Pending Reviews',
      value: '24',
      change: -10,
      icon: '📝',
      bgColor: 'bg-yellow-500'
    },
    {
      label: 'Course Rating',
      value: '4.8',
      change: 3,
      icon: '⭐',
      bgColor: 'bg-purple-500'
    }
  ];

  const activities = [
    {
      type: 'assignment',
      message: 'New assignment submitted by John Doe for "React Fundamentals"',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
    },
    {
      type: 'class',
      message: 'Live session "Advanced JavaScript" completed with 28 students',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
    },
    {
      type: 'grade',
      message: 'Graded 15 assignments for "HTML/CSS Fundamentals"',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
    },
    {
      type: 'announcement',
      message: 'Posted new course material for "Node.js Basics"',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }
  ];

  const quickActions = [
    {
      title: 'Create Course',
      description: 'Start a new course',
      icon: '➕',
      onClick: () => console.log('Create course'),
      color: 'border-green-300 hover:border-green-500 hover:bg-green-50'
    },
    {
      title: 'Start Live Class',
      description: 'Begin a live session',
      icon: '🎥',
      onClick: () => console.log('Start live class'),
      color: 'border-red-300 hover:border-red-500 hover:bg-red-50'
    },
    {
      title: 'Grade Assignments',
      description: '24 assignments pending',
      icon: '📊',
      onClick: () => console.log('Grade assignments'),
      color: 'border-yellow-300 hover:border-yellow-500 hover:bg-yellow-50'
    },
    {
      title: 'View Analytics',
      description: 'Course performance insights',
      icon: '📈',
      onClick: () => console.log('View analytics'),
      color: 'border-blue-300 hover:border-blue-500 hover:bg-blue-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Professor!</h1>
        <p className="text-gray-600">Here's an overview of your teaching activities.</p>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions actions={quickActions} />
        <ActivityFeed activities={activities} />
      </div>

      {/* Scheduled Classes */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Today's Schedule</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Advanced JavaScript</h4>
                <p className="text-sm text-gray-600">28 students enrolled</p>
                <p className="text-sm text-blue-600">2:00 PM - 3:30 PM</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Start Class
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">React Fundamentals</h4>
                <p className="text-sm text-gray-600">35 students enrolled</p>
                <p className="text-sm text-green-600">4:00 PM - 5:30 PM</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Prepare Class
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Student Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Student Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-medium">JD</span>
              </div>
              <div>
                <p className="text-sm text-gray-900">John Doe submitted assignment for React Fundamentals</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm font-medium">SA</span>
              </div>
              <div>
                <p className="text-sm text-gray-900">Sarah Adams completed lesson 5 of JavaScript Basics</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm font-medium">MJ</span>
              </div>
              <div>
                <p className="text-sm text-gray-900">Mike Johnson asked a question in HTML/CSS course</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
