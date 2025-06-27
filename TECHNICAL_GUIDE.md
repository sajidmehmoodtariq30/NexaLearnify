# NexaLearnify - Technical Implementation Guide

## 🎯 Smart Component Strategy

### Dynamic UI Based on User State

The platform will use intelligent component rendering that adapts to user roles and enrollment status.

#### Course Card Component Example

```jsx
<CourseCard 
  course={course}
  userRole={user.role}
  isEnrolled={user.enrolledCourses.includes(course.id)}
  renderActions={() => {
    if (isEnrolled) {
      return <Button>Continue Learning</Button> // → Student Dashboard
    }
    if (userRole === 'TEACHER' && course.instructor === user.id) {
      return <Button>Manage Course</Button> // → Teacher Dashboard
    }
    if (userRole === 'ADMIN') {
      return <Button>Edit Course</Button> // → Admin Dashboard
    }
    return <Button>Enroll Now</Button> // → Payment/Registration
  }}
/>
```

#### Smart Navigation Component

```jsx
<SmartNavigation 
  userRole={user.role}
  routes={{
    STUDENT: ['/student/dashboard', '/student/my-courses', '/student/live-classes'],
    TEACHER: ['/teacher/dashboard', '/teacher/courses', '/teacher/analytics'],
    ADMIN: ['/admin/dashboard', '/admin/users', '/admin/analytics'],
    SUB_ADMIN: ['/sub-admin/dashboard', '/sub-admin/reports'],
    GUEST: ['/home', '/academics', '/courses', '/about']
  }}
/>
```

---

## 🏗️ Layout Architecture Strategy

### Role-Based Layout Switching

```jsx
// AppLayout.jsx - Master Layout Controller
const AppLayout = () => {
  const { user } = useAuth()
  
  const getLayoutComponent = () => {
    if (!user) return PublicLayout
    
    switch (user.role) {
      case 'STUDENT': return StudentLayout
      case 'TEACHER': return TeacherLayout
      case 'ADMIN':
      case 'SUB_ADMIN': return AdminLayout
      default: return PublicLayout
    }
  }
  
  const LayoutComponent = getLayoutComponent()
  
  return (
    <LayoutComponent>
      <Outlet />
    </LayoutComponent>
  )
}
```

### Shared Components with Role Variations

```jsx
// Sidebar.jsx - Adaptive Sidebar
const Sidebar = ({ userRole }) => {
  const navigationConfig = {
    STUDENT: [
      { path: '/student/dashboard', icon: Home, label: 'Dashboard' },
      { path: '/student/my-courses', icon: BookOpen, label: 'My Courses' },
      { path: '/student/live-classes', icon: Video, label: 'Live Classes' },
      { path: '/student/academics', icon: Library, label: 'Resources' },
      { path: '/student/progress', icon: TrendingUp, label: 'Progress' }
    ],
    TEACHER: [
      { path: '/teacher/dashboard', icon: Home, label: 'Dashboard' },
      { path: '/teacher/courses', icon: BookOpen, label: 'My Courses' },
      { path: '/teacher/live-classes', icon: Video, label: 'Live Classes' },
      { path: '/teacher/students', icon: Users, label: 'Students' },
      { path: '/teacher/earnings', icon: DollarSign, label: 'Earnings' }
    ],
    ADMIN: [
      { path: '/admin/dashboard', icon: Home, label: 'Dashboard' },
      { path: '/admin/users', icon: Users, label: 'Users' },
      { path: '/admin/courses', icon: BookOpen, label: 'Courses' },
      { path: '/admin/payments', icon: CreditCard, label: 'Payments' },
      { path: '/admin/analytics', icon: BarChart, label: 'Analytics' }
    ]
  }
  
  return (
    <nav>
      {navigationConfig[userRole]?.map(item => (
        <SidebarItem key={item.path} {...item} />
      ))}
    </nav>
  )
}
```

---

## 🎨 Component Reusability Strategy

### Base Components with Variants

```jsx
// DataTable.jsx - Universal Data Table
const DataTable = ({ 
  data, 
  columns, 
  actions, 
  userRole,
  permissions = [] 
}) => {
  const filteredActions = actions.filter(action => 
    permissions.includes(action.permission) || 
    action.roles.includes(userRole)
  )
  
  return (
    <Table>
      <TableHeader>
        {columns.map(col => <TableHead key={col.key}>{col.label}</TableHead>)}
        {filteredActions.length > 0 && <TableHead>Actions</TableHead>}
      </TableHeader>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id}>
            {columns.map(col => (
              <TableCell key={col.key}>
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </TableCell>
            ))}
            {filteredActions.length > 0 && (
              <TableCell>
                <ActionMenu actions={filteredActions} item={row} />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

// Usage Examples:
// 1. Admin User Management
<DataTable 
  data={users}
  columns={userColumns}
  userRole="ADMIN"
  actions={[
    { label: 'Edit', permission: 'edit:users', roles: ['ADMIN'] },
    { label: 'Delete', permission: 'delete:users', roles: ['ADMIN'] },
    { label: 'View', permission: 'view:users', roles: ['ADMIN', 'SUB_ADMIN'] }
  ]}
/>

// 2. Sub-Admin User Viewing (Read-Only)
<DataTable 
  data={users}
  columns={userColumns}
  userRole="SUB_ADMIN"
  actions={[
    { label: 'Export', permission: 'export:users', roles: ['SUB_ADMIN'] }
  ]}
/>
```

### Smart Course Components

```jsx
// CourseGrid.jsx - Context-Aware Course Display
const CourseGrid = ({ userRole, userId }) => {
  const { data: courses } = useQuery(['courses', userRole], () => {
    switch (userRole) {
      case 'STUDENT':
        return api.getEnrolledCourses(userId)
      case 'TEACHER':
        return api.getTeacherCourses(userId)
      case 'ADMIN':
        return api.getAllCourses()
      default:
        return api.getPublicCourses()
    }
  })
  
  return (
    <Grid>
      {courses.map(course => (
        <CourseCard 
          key={course.id}
          course={course}
          variant={getCardVariant(userRole, course)}
          actions={getCourseActions(userRole, course, userId)}
        />
      ))}
    </Grid>
  )
}

const getCardVariant = (userRole, course) => {
  if (userRole === 'STUDENT' && course.isEnrolled) return 'enrolled'
  if (userRole === 'TEACHER' && course.instructor === userId) return 'owned'
  if (userRole === 'ADMIN') return 'admin'
  return 'public'
}
```

---

## 🔐 Permission-Based Component Rendering

### ProtectedComponent Wrapper

```jsx
const ProtectedComponent = ({ 
  userRole, 
  requiredPermissions = [], 
  requiredRoles = [],
  fallback = null,
  children 
}) => {
  const hasPermission = requiredPermissions.every(permission => 
    userPermissions[userRole]?.includes(permission) || 
    userPermissions[userRole]?.includes('*')
  )
  
  const hasRole = requiredRoles.length === 0 || requiredRoles.includes(userRole)
  
  if (hasPermission && hasRole) {
    return children
  }
  
  return fallback
}

// Usage Examples:
<ProtectedComponent 
  userRole={user.role}
  requiredRoles={['ADMIN']}
  fallback={<div>Access Denied</div>}
>
  <DeleteUserButton userId={user.id} />
</ProtectedComponent>

<ProtectedComponent 
  userRole={user.role}
  requiredPermissions={['edit:courses']}
>
  <EditCourseButton courseId={course.id} />
</ProtectedComponent>
```

---

## 🎭 Dashboard Component Strategy

### Modular Dashboard Widgets

```jsx
// Dashboard.jsx - Role-Based Dashboard Assembly
const Dashboard = ({ userRole }) => {
  const widgetConfig = {
    STUDENT: [
      { component: 'RecentCourses', props: { limit: 4 } },
      { component: 'UpcomingClasses', props: { limit: 3 } },
      { component: 'LearningProgress', props: {} },
      { component: 'Achievements', props: {} }
    ],
    TEACHER: [
      { component: 'TeacherStats', props: {} },
      { component: 'RecentStudents', props: { limit: 5 } },
      { component: 'UpcomingClasses', props: { teacherView: true } },
      { component: 'EarningsChart', props: { period: '30d' } }
    ],
    ADMIN: [
      { component: 'PlatformStats', props: {} },
      { component: 'RevenueChart', props: {} },
      { component: 'UserGrowth', props: {} },
      { component: 'PendingApprovals', props: {} }
    ]
  }
  
  const widgets = widgetConfig[userRole] || []
  
  return (
    <DashboardGrid>
      {widgets.map((widget, index) => {
        const Widget = getWidgetComponent(widget.component)
        return (
          <DashboardCard key={index}>
            <Widget {...widget.props} userRole={userRole} />
          </DashboardCard>
        )
      })}
    </DashboardGrid>
  )
}
```

### Smart Action Buttons

```jsx
// ActionButton.jsx - Context-Aware Actions
const SmartActionButton = ({ 
  item, 
  userRole, 
  userId,
  type = 'course' // 'course', 'user', 'class', etc.
}) => {
  const getActions = () => {
    switch (type) {
      case 'course':
        if (userRole === 'STUDENT' && item.isEnrolled) {
          return { 
            label: 'Continue Learning', 
            href: `/student/my-courses/${item.id}`,
            variant: 'default'
          }
        }
        if (userRole === 'STUDENT' && !item.isEnrolled) {
          return { 
            label: 'Enroll Now', 
            onClick: () => handleEnrollment(item.id),
            variant: 'default'
          }
        }
        if (userRole === 'TEACHER' && item.instructorId === userId) {
          return { 
            label: 'Manage Course', 
            href: `/teacher/courses/${item.id}`,
            variant: 'outline'
          }
        }
        if (userRole === 'ADMIN') {
          return { 
            label: 'Edit Course', 
            href: `/admin/courses/${item.id}`,
            variant: 'outline'
          }
        }
        break
      
      case 'live-class':
        if (userRole === 'STUDENT' && item.isEnrolled) {
          return { 
            label: item.status === 'live' ? 'Join Class' : 'View Recording', 
            href: `/student/live-classes/${item.id}`,
            variant: item.status === 'live' ? 'default' : 'outline'
          }
        }
        if (userRole === 'TEACHER' && item.instructorId === userId) {
          return { 
            label: item.status === 'live' ? 'Enter Classroom' : 'Start Class', 
            href: `/teacher/live-classes/${item.id}`,
            variant: 'default'
          }
        }
        break
    }
    
    return null
  }
  
  const action = getActions()
  
  if (!action) return null
  
  return (
    <Button 
      variant={action.variant}
      onClick={action.onClick}
      asChild={!!action.href}
    >
      {action.href ? (
        <Link to={action.href}>{action.label}</Link>
      ) : (
        action.label
      )}
    </Button>
  )
}
```

---

## 🗂️ File Organization Strategy

### Feature-Based Architecture

``` bash
src/
├── components/
│   ├── ui/                         # Reusable UI components
│   ├── layout/                     # Layout components
│   └── features/                   # Feature-specific components
│       ├── auth/
│       ├── courses/
│       ├── academics/
│       ├── dashboard/
│       └── admin/
├── pages/                          # Page components
│   ├── public/                     # Public pages
│   ├── student/                    # Student pages
│   ├── teacher/                    # Teacher pages
│   ├── admin/                      # Admin pages
│   └── shared/                     # Shared pages
├── hooks/                          # Custom React hooks
│   ├── useAuth.js
│   ├── usePermissions.js
│   ├── useCourses.js
│   └── useRoleBasedNavigation.js
├── contexts/                       # React contexts
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── NotificationContext.jsx
├── utils/                          # Utility functions
│   ├── permissions.js
│   ├── roleHelpers.js
│   └── constants.js
└── services/                       # API services
    ├── authService.js
    ├── courseService.js
    ├── userService.js
    └── adminService.js
```

---

## 🎯 Development Priority Order

### Phase 1: Core Foundation (Weeks 1-2)

1. **Authentication System**
   - Multi-role login/registration
   - Role-based route protection
   - JWT token management

2. **Base Layout Components**
   - Public layout (current AppLayout)
   - Student layout
   - Teacher layout  
   - Admin layout

3. **Essential UI Components**
   - Enhanced Button, Input, Card
   - DataTable, Modal, Form components
   - Loading states and error handling

### Phase 2: Student Experience (Weeks 3-4)

1. **Student Dashboard**
   - Course enrollment status
   - Learning progress tracking
   - Quick actions

2. **Course Interaction**
   - Course catalog with "Continue Learning" logic
   - Video player with progress tracking
   - Academic resources access

### Phase 3: Teacher Experience (Weeks 5-6)

1. **Teacher Dashboard**
   - Course management interface
   - Student analytics
   - Earnings tracking

2. **Course Creation**
   - Course content upload
   - Lesson organization
   - Pricing and settings

### Phase 4: Admin Experience (Weeks 7-8)

1. **Admin Dashboard**
   - Platform analytics
   - User management
   - Content moderation

2. **Sub-Admin Implementation**
   - Read-only interfaces
   - Report generation
   - Data export functionality

---

This technical approach ensures maximum code reusability while providing distinct experiences for each user role. The component architecture allows for easy maintenance and feature additions as the platform grows.
