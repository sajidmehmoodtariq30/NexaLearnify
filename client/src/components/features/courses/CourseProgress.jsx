import { useState } from 'react';

const CourseProgress = ({ course, userProgress = {} }) => {
  const [expandedModules, setExpandedModules] = useState(new Set());

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const calculateModuleProgress = (module) => {
    if (!module.lessons || module.lessons.length === 0) return 0;
    const completedLessons = module.lessons.filter(lesson => 
      userProgress.completedLessons?.includes(lesson.id)
    ).length;
    return Math.round((completedLessons / module.lessons.length) * 100);
  };

  const calculateOverallProgress = () => {
    if (!course.modules || course.modules.length === 0) return 0;
    const totalLessons = course.modules.reduce((acc, module) => 
      acc + (module.lessons?.length || 0), 0
    );
    const completedLessons = userProgress.completedLessons?.length || 0;
    return Math.round((completedLessons / totalLessons) * 100);
  };

  const overallProgress = calculateOverallProgress();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Course Progress</h3>
          <span className="text-sm font-medium text-indigo-600">
            {overallProgress}% Complete
          </span>
        </div>
        <div className="mt-2">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {course.modules?.map((module, moduleIndex) => {
          const moduleProgress = calculateModuleProgress(module);
          const isExpanded = expandedModules.has(module.id);

          return (
            <div key={module.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-500">
                      {moduleIndex + 1}.
                    </span>
                    <h4 className="text-sm font-medium text-gray-900">
                      {module.title}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">
                      {moduleProgress}%
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-green-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${moduleProgress}%` }}
                    />
                  </div>
                </div>
              </button>

              {isExpanded && module.lessons && (
                <div className="bg-gray-50">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const isCompleted = userProgress.completedLessons?.includes(lesson.id);
                    const isCurrent = userProgress.currentLesson === lesson.id;

                    return (
                      <div
                        key={lesson.id}
                        className={`px-8 py-3 border-b border-gray-200 last:border-b-0 ${
                          isCurrent ? 'bg-indigo-50' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            isCompleted
                              ? 'bg-green-500 text-white'
                              : isCurrent
                              ? 'bg-indigo-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            {isCompleted ? '✓' : lessonIndex + 1}
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm ${
                              isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'
                            }`}>
                              {lesson.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {lesson.duration} • {lesson.type}
                            </p>
                          </div>
                          {lesson.type === 'video' && (
                            <button className="text-indigo-600 hover:text-indigo-500 text-sm">
                              ▶️ Play
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseProgress;
