// Main routes index - exports all route configurations
export { publicRoutes } from './publicRoutes';
export { studentRoutes } from './studentRoutes';
export { teacherRoutes } from './teacherRoutes';
export { adminRoutes } from './adminRoutes';
export { sharedRoutes, errorRoutes } from './sharedRoutes';

// Route configuration helper
export const getAllRoutes = () => ({
  public: publicRoutes,
  student: studentRoutes,
  teacher: teacherRoutes,
  admin: adminRoutes,
  shared: sharedRoutes,
  error: errorRoutes
});

export default getAllRoutes;
