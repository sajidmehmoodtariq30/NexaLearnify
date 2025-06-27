import DashboardStats from '../../components/features/dashboard/DashboardStats';
import ActivityFeed from '../../components/features/dashboard/ActivityFeed';
import QuickActions from '../../components/features/dashboard/QuickActions';

const StudentDashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    {
      label: 'Enrolled Courses',
      value: '8',
      change: 12,
      icon: '📚',
      bgColor: 'bg-blue-500'
    },
    {
      label: 'Completed Lessons',
      value: '156',
      change: 8,
      icon: '✅',
      bgColor: 'bg-green-500'
    },
    {
      label: 'Pending Assignments',
      value: '3',
      change: -25,
      icon: '📝',
      bgColor: 'bg-yellow-500'
    },
    {
      label: 'Average Grade',
      value: '87%',
      change: 5,
      icon: '🎯',
      bgColor: 'bg-purple-500'
    }
  ];

  const activities = [
    {
      type: 'assignment',
      message: 'Assignment "React Fundamentals" submitted successfully',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      type: 'class',
      message: 'Attended "Advanced JavaScript" live session',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
    },
    {
      type: 'grade',
      message: 'Received grade for "HTML/CSS Project" - 92%',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    },
    {
      type: 'announcement',
      message: 'New course material available: "Node.js Basics"',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
    }
  ];

  const quickActions = [
    {
      title: 'Continue Learning',
      description: 'Resume your current course',
      icon: '▶️',
      onClick: () => console.log('Continue learning'),
      color: 'border-green-300 hover:border-green-500 hover:bg-green-50'
    },
    {
      title: 'Join Live Class',
      description: 'Upcoming class in 30 minutes',
      icon: '🎥',
      onClick: () => console.log('Join live class'),
      color: 'border-red-300 hover:border-red-500 hover:bg-red-50'
    },
    {
      title: 'View Assignments',
      description: '3 assignments due this week',
      icon: '📝',
      onClick: () => console.log('View assignments'),
      color: 'border-yellow-300 hover:border-yellow-500 hover:bg-yellow-50'
    },
    {
      title: 'Browse Courses',
      description: 'Discover new courses',
      icon: '🔍',
      onClick: () => console.log('Browse courses'),
      color: 'border-blue-300 hover:border-blue-500 hover:bg-blue-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="text-gray-600">Here's what's happening with your learning journey.</p>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions actions={quickActions} />
        <ActivityFeed activities={activities} />
      </div>

      {/* Upcoming Classes */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Upcoming Classes</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Advanced JavaScript</h4>
                <p className="text-sm text-gray-600">with Prof. John Smith</p>
                <p className="text-sm text-blue-600">Today at 2:00 PM</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Join Class
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">React Fundamentals</h4>
                <p className="text-sm text-gray-600">with Prof. Sarah Johnson</p>
                <p className="text-sm text-green-600">Tomorrow at 10:00 AM</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
