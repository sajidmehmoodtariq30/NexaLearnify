// Feature Components
export { default as LoginForm } from './features/auth/LoginForm';
export { default as RegisterForm } from './features/auth/RegisterForm';
export { AuthProvider, useAuth } from './features/auth/AuthContext';

export { default as DashboardStats } from './features/dashboard/DashboardStats';
export { default as ActivityFeed } from './features/dashboard/ActivityFeed';
export { default as QuickActions } from './features/dashboard/QuickActions';

export { default as CourseCard } from './features/courses/CourseCard';
export { default as CourseFilters } from './features/courses/CourseFilters';
export { default as CourseProgress } from './features/courses/CourseProgress';

export { default as LiveClassroom } from './features/live-classes/LiveClassroom';
export { default as UserManagement } from './features/users/UserManagement';
export { default as PaymentForm } from './features/payments/PaymentForm';

// Layout Components
export { default as PublicLayout } from './layout/PublicLayout';
export { default as StudentLayout } from './layout/StudentLayout';
export { default as TeacherLayout } from './layout/TeacherLayout';
export { default as AdminLayout } from './layout/AdminLayout';
export { default as LayoutSwitch } from './layout/LayoutSwitch';
export { default as Sidebar } from './layout/Sidebar';
export { default as TopBar } from './layout/TopBar';
export { default as Footer } from './layout/Footer';

// Common Components
export { default as ProtectedRoute } from './common/ProtectedRoute';

// UI Components
export { Button } from './ui/button';
