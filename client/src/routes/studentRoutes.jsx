// Student routes configuration
import StudentDashboard from '../pages/student/Dashboard';

// Placeholder components for future implementation
const PlaceholderPage = ({ title, description }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const studentRoutes = [
  { 
    path: '/student/dashboard', 
    element: <StudentDashboard />, 
    title: 'Student Dashboard' 
  },
  { 
    path: '/student/courses', 
    element: <PlaceholderPage title="My Courses" description="Course management coming soon..." />, 
    title: 'My Courses' 
  },
  { 
    path: '/student/assignments', 
    element: <PlaceholderPage title="My Assignments" description="Assignment management coming soon..." />, 
    title: 'My Assignments' 
  },
  { 
    path: '/student/grades', 
    element: <PlaceholderPage title="My Grades" description="Grade tracking coming soon..." />, 
    title: 'My Grades' 
  },
  { 
    path: '/student/schedule', 
    element: <PlaceholderPage title="My Schedule" description="Schedule management coming soon..." />, 
    title: 'My Schedule' 
  },
  { 
    path: '/student/profile', 
    element: <PlaceholderPage title="My Profile" description="Profile management coming soon..." />, 
    title: 'My Profile' 
  },
  { 
    path: '/student/settings', 
    element: <PlaceholderPage title="Settings" description="Settings coming soon..." />, 
    title: 'Settings' 
  }
];

export default studentRoutes;
