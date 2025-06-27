// Layout switching based on user role
import { useAuth } from '../features/auth/AuthContext';
import PublicLayout from './PublicLayout';
import StudentLayout from './StudentLayout';
import TeacherLayout from './TeacherLayout';
import AdminLayout from './AdminLayout';

const LayoutSwitch = ({ children }) => {
  const { user, isAuthenticated } = useAuth();

  // If not authenticated, use public layout
  if (!isAuthenticated || !user) {
    return <PublicLayout>{children}</PublicLayout>;
  }

  // Switch layout based on user role
  switch (user.role) {
    case 'STUDENT':
      return <StudentLayout>{children}</StudentLayout>;
    case 'TEACHER':
      return <TeacherLayout>{children}</TeacherLayout>;
    case 'ADMIN':
    case 'SUB_ADMIN':
      return <AdminLayout>{children}</AdminLayout>;
    default:
      return <PublicLayout>{children}</PublicLayout>;
  }
};

export default LayoutSwitch;
