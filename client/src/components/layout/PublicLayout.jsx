import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Footer from './Footer';

const PublicLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <TopBar onMenuClick={handleMenuClick} />

        {/* Page Content */}
        <main className="flex-1 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
