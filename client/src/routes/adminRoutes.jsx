// Admin routes configuration
import AdminDashboard from '../pages/admin/Dashboard';
import UserManagement from '../components/features/users/UserManagement';

// Placeholder components for future implementation
const PlaceholderPage = ({ title, description }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const adminRoutes = [
  { 
    path: '/admin/dashboard', 
    element: <AdminDashboard />, 
    title: 'Admin Dashboard' 
  },
  { 
    path: '/admin/users', 
    element: <UserManagement />, 
    title: 'User Management' 
  },
  { 
    path: '/admin/courses', 
    element: <PlaceholderPage title="Course Management" description="Course administration coming soon..." />, 
    title: 'Course Management' 
  },
  { 
    path: '/admin/teachers', 
    element: <PlaceholderPage title="Teacher Management" description="Teacher administration coming soon..." />, 
    title: 'Teacher Management' 
  },
  { 
    path: '/admin/students', 
    element: <PlaceholderPage title="Student Management" description="Student administration coming soon..." />, 
    title: 'Student Management' 
  },
  { 
    path: '/admin/analytics', 
    element: <PlaceholderPage title="Platform Analytics" description="Analytics dashboard coming soon..." />, 
    title: 'Platform Analytics' 
  },
  { 
    path: '/admin/payments', 
    element: <PlaceholderPage title="Payment Management" description="Payment administration coming soon..." />, 
    title: 'Payment Management' 
  }
];

export default adminRoutes;
