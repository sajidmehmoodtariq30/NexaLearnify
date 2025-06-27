// Teacher routes configuration
import TeacherDashboard from '../pages/teacher/Dashboard';

// Placeholder components for future implementation
const PlaceholderPage = ({ title, description }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const teacherRoutes = [
  { 
    path: '/teacher/dashboard', 
    element: <TeacherDashboard />, 
    title: 'Teacher Dashboard' 
  },
  { 
    path: '/teacher/courses', 
    element: <PlaceholderPage title="My Courses" description="Course management coming soon..." />, 
    title: 'My Courses' 
  },
  { 
    path: '/teacher/students', 
    element: <PlaceholderPage title="My Students" description="Student management coming soon..." />, 
    title: 'My Students' 
  },
  { 
    path: '/teacher/assignments', 
    element: <PlaceholderPage title="Assignments" description="Assignment creation coming soon..." />, 
    title: 'Assignments' 
  },
  { 
    path: '/teacher/grading', 
    element: <PlaceholderPage title="Grading" description="Grading system coming soon..." />, 
    title: 'Grading' 
  },
  { 
    path: '/teacher/analytics', 
    element: <PlaceholderPage title="Analytics" description="Course analytics coming soon..." />, 
    title: 'Analytics' 
  }
];

export default teacherRoutes;
