import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const StudentLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const studentNavItems = [
    { name: 'Dashboard', href: '/student/dashboard', icon: '📊' },
    { name: 'My Courses', href: '/student/courses', icon: '📚' },
    { name: 'Live Classes', href: '/student/live-classes', icon: '🎥' },
    { name: 'Assignments', href: '/student/assignments', icon: '📝' },
    { name: 'Grades', href: '/student/grades', icon: '📈' },
    { name: 'Schedule', href: '/student/schedule', icon: '📅' },
    { name: 'Resources', href: '/student/resources', icon: '💾' },
    { name: 'Discussion', href: '/student/discussions', icon: '💬' },
    { name: 'Profile', href: '/student/profile', icon: '👤' },
    { name: 'Settings', href: '/student/settings', icon: '⚙️' }
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navItems={studentNavItems}
        userRole="Student"
      />
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          title="Student Portal"
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

export default StudentLayout;
