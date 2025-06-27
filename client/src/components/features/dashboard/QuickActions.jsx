const QuickActions = ({ actions = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`p-4 rounded-lg border-2 border-dashed transition-colors hover:border-solid ${
                action.color || 'border-gray-300 hover:border-indigo-500 hover:bg-indigo-50'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{action.icon}</div>
                <p className="text-sm font-medium text-gray-900">{action.title}</p>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
