import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// Auth Components
import { AuthProvider } from './components/features/auth/AuthContext'
import ProtectedRoute from './components/common/ProtectedRoute'
import LayoutSwitch from './components/layout/LayoutSwitch'

// Route Configurations
import { 
  publicRoutes, 
  studentRoutes, 
  teacherRoutes, 
  adminRoutes, 
  sharedRoutes, 
  errorRoutes 
} from './routes'

// Special imports for routes that need dynamic props
import LiveClassroom from './components/features/live-classes/LiveClassroom'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <LayoutSwitch>
          <Routes>
            {/* Public Routes */}
            {publicRoutes.map((route, index) => (
              route.element === 'redirect' ? (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={<Navigate to={route.to} replace />} 
                />
              ) : (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={route.element} 
                />
              )
            ))}

            {/* Student Protected Routes */}
            {studentRoutes.map((route, index) => (
              <Route 
                key={`student-${index}`}
                path={route.path} 
                element={
                  <ProtectedRoute requiredRole="STUDENT">
                    {route.element}
                  </ProtectedRoute>
                } 
              />
            ))}

            {/* Teacher Protected Routes */}
            {teacherRoutes.map((route, index) => (
              <Route 
                key={`teacher-${index}`}
                path={route.path} 
                element={
                  <ProtectedRoute requiredRole="TEACHER">
                    {route.element}
                  </ProtectedRoute>
                } 
              />
            ))}

            {/* Admin Protected Routes */}
            {adminRoutes.map((route, index) => (
              <Route 
                key={`admin-${index}`}
                path={route.path} 
                element={
                  <ProtectedRoute requiredRoles={["ADMIN", "SUB_ADMIN"]}>
                    {route.element}
                  </ProtectedRoute>
                } 
              />
            ))}

            {/* Special Routes with Dynamic Components */}
            <Route 
              path="/student/live-classes" 
              element={
                <ProtectedRoute requiredRole="STUDENT">
                  <LiveClassroom userRole="STUDENT" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher/live-classes" 
              element={
                <ProtectedRoute requiredRole="TEACHER">
                  <LiveClassroom userRole="TEACHER" />
                </ProtectedRoute>
              } 
            />

            {/* Shared Protected Routes */}
            {sharedRoutes.map((route, index) => (
              <Route 
                key={`shared-${index}`}
                path={route.path} 
                element={
                  <ProtectedRoute>
                    {route.element}
                  </ProtectedRoute>
                } 
              />
            ))}

            {/* Error Routes */}
            {errorRoutes.map((route, index) => (
              <Route 
                key={`error-${index}`}
                path={route.path} 
                element={route.element} 
              />
            ))}
          </Routes>
        </LayoutSwitch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
