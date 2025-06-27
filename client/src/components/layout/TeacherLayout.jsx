import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const TeacherLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const teacherNavItems = [
    { name: 'Dashboard', href: '/teacher/dashboard', icon: '📊' },
    { name: 'My Courses', href: '/teacher/courses', icon: '📚' },
    { name: 'Live Classes', href: '/teacher/live-classes', icon: '🎥' },
    { name: 'Students', href: '/teacher/students', icon: '👥' },
    { name: 'Assignments', href: '/teacher/assignments', icon: '📝' },
    { name: 'Grading', href: '/teacher/grading', icon: '📊' },
    { name: 'Schedule', href: '/teacher/schedule', icon: '📅' },
    { name: 'Resources', href: '/teacher/resources', icon: '💾' },
    { name: 'Analytics', href: '/teacher/analytics', icon: '📈' },
    { name: 'Profile', href: '/teacher/profile', icon: '👤' },
    { name: 'Settings', href: '/teacher/settings', icon: '⚙️' }
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navItems={teacherNavItems}
        userRole="Teacher"
      />
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          title="Teacher Portal"
        />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;
