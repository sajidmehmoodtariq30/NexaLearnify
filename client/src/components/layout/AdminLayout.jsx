import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const adminNavItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { name: 'Users', href: '/admin/users', icon: '👥' },
    { name: 'Courses', href: '/admin/courses', icon: '📚' },
    { name: 'Teachers', href: '/admin/teachers', icon: '👨‍🏫' },
    { name: 'Students', href: '/admin/students', icon: '👨‍🎓' },
    { name: 'Analytics', href: '/admin/analytics', icon: '📈' },
    { name: 'Reports', href: '/admin/reports', icon: '📋' },
    { name: 'Payments', href: '/admin/payments', icon: '💳' },
    { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
    { name: 'System', href: '/admin/system', icon: '🔧' }
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navItems={adminNavItems}
        userRole="Admin"
      />
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          title="Admin Portal"
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

export default AdminLayout;
