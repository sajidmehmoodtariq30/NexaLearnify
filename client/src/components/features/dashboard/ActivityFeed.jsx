const ActivityFeed = ({ activities = [] }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'assignment':
        return '📝';
      case 'class':
        return '🎓';
      case 'grade':
        return '📊';
      case 'announcement':
        return '📢';
      default:
        return '📌';
    }
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const activityDate = new Date(date);
    const diffInHours = Math.floor((now - activityDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            No recent activity
          </div>
        ) : (
          activities.map((activity, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-xl">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {getTimeAgo(activity.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
