# NexaLearnify - Comprehensive Educational Platform

## 🎯 Project Overview

NexaLearnify is a multi-purpose educational platform that combines free academic resources, premium courses, live teaching, and career development in a unified ecosystem. Built with MERN stack + TailwindCSS + Shadcn UI.

## 🏗️ Platform Architecture

### User Roles & Access Levels

1. **Super Admin** - Complete platform control
2. **Sub Admin** - Limited administrative access
3. **Teachers** - Course creation and management
4. **Students** - Learning and course access
5. **Career Applicants** - Job/internship applications
6. **Guests** - Public content access

---

## 📄 Complete Page Structure

### 🌐 Public Pages (No Authentication Required)

``` bash
/
├── / (Home)                          # Landing page with platform overview
├── /about                           # Company information and team
├── /contact                         # Contact forms and support
├── /academics                       # educational resources
│   ├── /academics/punjab-board      # Punjab Board materials
│   ├── /academics/cambridge         # O/A Level resources
│   └── /academics/[subject]/[class] # Subject-specific content
├── /courses                         # Course catalog (public browse)
│   ├── /courses/[courseId]          # Individual course details
│   └── /courses/category/[category] # Category-wise courses
├── /teachers                        # Teacher profiles (public)
│   └── /teachers/[teacherId]        # Individual teacher profile
├── /career                          # Career opportunities
│   ├── /career/jobs                 # Job listings
│   ├── /career/internships          # Internship opportunities
│   └── /career/success-stories      # Alumni success stories
├── /login                           # User authentication
├── /register                        # User registration
├── /forgot-password                 # Password recovery
└── /privacy-policy                  # Legal pages
```

### 🎓 Student Dashboard & Pages

``` bash
/student/
├── /student/dashboard               # Main student dashboard
├── /student/profile                 # Profile management
├── /student/my-courses             # Enrolled courses
│   ├── /student/my-courses/[courseId] # Course player/viewer
│   └── /student/my-courses/[courseId]/lesson/[lessonId] # Individual lessons
├── /student/live-classes           # Scheduled live classes
│   └── /student/live-classes/[classId] # Live class room
├── /student/academics              # Academic resources (enhanced for students)
├── /student/bookmarks              # Saved/bookmarked content
├── /student/certificates           # Earned certificates
├── /student/progress               # Learning progress tracking
├── /student/payments               # Payment history and billing
├── /student/settings               # Account settings
└── /student/support                # Student support center
```

### 👨‍🏫 Teacher Dashboard & Pages

``` bash
/teacher/
├── /teacher/dashboard              # Main teacher dashboard
├── /teacher/profile                # Teacher profile management
├── /teacher/courses                # Course management
│   ├── /teacher/courses/create     # Create new course
│   ├── /teacher/courses/[courseId] # Edit course
│   └── /teacher/courses/[courseId]/lessons # Lesson management
├── /teacher/live-classes           # Live class management
│   ├── /teacher/live-classes/schedule # Schedule new classes
│   ├── /teacher/live-classes/[classId] # Live class room (teacher view)
│   └── /teacher/live-classes/recordings # Class recordings
├── /teacher/students               # Student management
│   └── /teacher/students/[courseId] # Course-specific students
├── /teacher/earnings               # Revenue and payment tracking
├── /teacher/analytics              # Teaching analytics
├── /teacher/calendar               # Class schedule calendar
├── /teacher/resources              # Teaching resources
├── /teacher/settings               # Account settings
└── /teacher/support                # Teacher support center
```

### 🛡️ Super Admin Dashboard & Pages

``` bash
/admin/
├── /admin/dashboard                # Main admin dashboard
├── /admin/users                    # User management
│   ├── /admin/users/students       # Student management
│   ├── /admin/users/teachers       # Teacher management
│   ├── /admin/users/admins         # Admin management
│   └── /admin/users/[userId]       # Individual user management
├── /admin/courses                  # Course oversight
│   ├── /admin/courses/pending      # Pending course approvals
│   ├── /admin/courses/active       # Active courses
│   └── /admin/courses/[courseId]   # Course details/edit
├── /admin/academics                # Academic content management
│   ├── /admin/academics/upload     # Upload new materials
│   ├── /admin/academics/categories # Category management
│   └── /admin/academics/approval   # Content approval queue
├── /admin/payments                 # Payment and revenue management
│   ├── /admin/payments/transactions # All transactions
│   ├── /admin/payments/refunds     # Refund requests
│   └── /admin/payments/reports     # Financial reports
├── /admin/live-classes             # Live class oversight
├── /admin/career                   # Career section management
│   ├── /admin/career/jobs          # Job posting management
│   ├── /admin/career/applications  # Application management
│   └── /admin/career/interviews    # Interview scheduling
├── /admin/analytics                # Platform analytics
├── /admin/support                  # Support ticket management
├── /admin/settings                 # Platform settings
│   ├── /admin/settings/general     # General settings
│   ├── /admin/settings/payments    # Payment gateway settings
│   └── /admin/settings/notifications # Notification settings
└── /admin/logs                     # System logs and audit
```

### 📊 Sub Admin Dashboard & Pages

``` bash
/sub-admin/
├── /sub-admin/dashboard            # Main sub-admin dashboard
├── /sub-admin/users                # User viewing (read-only)
│   ├── /sub-admin/users/students   # Student list
│   ├── /sub-admin/users/teachers   # Teacher list
│   └── /sub-admin/users/export     # Export user data
├── /sub-admin/courses              # Course viewing (read-only)
├── /sub-admin/academics            # Academic content viewing
├── /sub-admin/payments             # Payment reports (read-only)
├── /sub-admin/analytics            # Analytics viewing
├── /sub-admin/support              # Support ticket viewing
└── /sub-admin/reports              # Generate reports
```

### 💼 Career Applicant Pages

``` bash
/career-portal/
├── /career-portal/dashboard        # Applicant dashboard
├── /career-portal/profile          # Professional profile
├── /career-portal/applications     # Application tracking
├── /career-portal/interviews       # Interview scheduling
├── /career-portal/resume           # Resume builder/upload
└── /career-portal/notifications    # Application updates
```

---

## 🧩 Component Architecture

### 🎨 UI Components (Reusable)

``` bash
src/components/ui/
├── Button.jsx                      # Button variations
├── Input.jsx                       # Form inputs
├── Card.jsx                        # Content cards
├── Modal.jsx                       # Modal dialogs
├── Table.jsx                       # Data tables
├── Badge.jsx                       # Status badges
├── Avatar.jsx                      # User avatars
├── Dropdown.jsx                    # Dropdown menus
├── Tabs.jsx                        # Tab navigation
├── Accordion.jsx                   # Collapsible content
├── Progress.jsx                    # Progress bars
├── Skeleton.jsx                    # Loading skeletons
├── Toast.jsx                       # Notification toasts
├── Tooltip.jsx                     # Hover tooltips
├── Calendar.jsx                    # Date picker
├── Chart.jsx                       # Data visualization
└── VideoPlayer.jsx                 # Custom video player
```

### 🏢 Layout Components

``` bash
src/components/layout/
├── Sidebar.jsx                     # Navigation sidebar
├── TopBar.jsx                      # Top navigation
├── Footer.jsx                      # Page footer
├── AdminLayout.jsx                 # Admin dashboard layout
├── StudentLayout.jsx               # Student dashboard layout
├── TeacherLayout.jsx               # Teacher dashboard layout
└── PublicLayout.jsx                # Public pages layout
```

### 🎯 Feature Components

``` bash
src/components/features/
├── auth/
│   ├── LoginForm.jsx
│   ├── RegisterForm.jsx
│   ├── ForgotPasswordForm.jsx
│   └── ProtectedRoute.jsx
├── courses/
│   ├── CourseCard.jsx
│   ├── CourseList.jsx
│   ├── CoursePlayer.jsx
│   ├── CourseCreator.jsx
│   ├── LessonPlayer.jsx
│   └── CourseProgress.jsx
├── academics/
│   ├── ResourceCard.jsx
│   ├── ResourceViewer.jsx
│   ├── CategoryFilter.jsx
│   └── DownloadTracker.jsx
├── live-classes/
│   ├── ClassRoom.jsx
│   ├── ClassScheduler.jsx
│   ├── VideoConference.jsx
│   ├── Whiteboard.jsx
│   └── ChatBox.jsx
├── dashboard/
│   ├── StatsCard.jsx
│   ├── ActivityFeed.jsx
│   ├── QuickActions.jsx
│   └── ProgressChart.jsx
├── users/
│   ├── UserTable.jsx
│   ├── UserProfile.jsx
│   ├── UserStats.jsx
│   └── UserActions.jsx
├── payments/
│   ├── PaymentForm.jsx
│   ├── PaymentHistory.jsx
│   ├── RefundRequest.jsx
│   └── PricingTable.jsx
├── career/
│   ├── JobCard.jsx
│   ├── ApplicationForm.jsx
│   ├── InterviewScheduler.jsx
│   └── ResumeUploader.jsx
└── analytics/
    ├── AnalyticsChart.jsx
    ├── RevenueChart.jsx
    ├── UserGrowthChart.jsx
    └── EngagementMetrics.jsx
```

---

## 🎭 User Experience Flow

### 🎓 Student Journey

``` bash
1. Browse public content → Register → Email verification
2. Explore free academics → Download resources
3. Browse premium courses → Purchase course
4. Access student dashboard → "Continue Learning" button
5. Take courses → Track progress → Earn certificates
6. Join live classes → Interact with teachers
7. Apply for careers → Interview process
```

### 👨‍🏫 Teacher Journey

``` bash
1. Apply as teacher → Verification process
2. Create teacher profile → Get approved
3. Pay platform fee → Create courses
4. Schedule live classes → Manage students
5. Track earnings → Withdraw payments
6. Access teaching resources → Analytics
```

### 🛡️ Admin Journey

``` bash
1. Monitor platform activity → User management
2. Approve courses/content → Payment oversight
3. Handle support tickets → Analytics review
4. Platform configuration → Security management
```

---

## 🔒 Authentication & Authorization

### Role-Based Access Control (RBAC)

```javascript
// Permission Matrix
const permissions = {
  SUPER_ADMIN: ['*'], // All permissions
  SUB_ADMIN: ['read:users', 'read:courses', 'read:analytics', 'export:data'],
  TEACHER: ['create:courses', 'manage:own_courses', 'view:students', 'manage:earnings'],
  STUDENT: ['access:courses', 'download:resources', 'join:classes', 'apply:careers'],
  GUEST: ['view:public_content', 'browse:courses']
}
```

### Protected Routes

- **Public Routes**: Home, About, Contact, Course Catalog
- **Student Routes**: Student Dashboard, My Courses, Live Classes
- **Teacher Routes**: Teacher Dashboard, Course Management, Analytics
- **Admin Routes**: Admin Dashboard, User Management, Platform Settings
- **Mixed Access**: Academics (different features based on role)

---

## 💾 Database Schema Overview

### Core Collections

``` bash
Users: { role, profile, auth, subscription, preferences }
Courses: { content, pricing, enrollment, analytics }
LiveClasses: { schedule, participants, recordings }
AcademicResources: { category, files, downloads, approval }
Payments: { transactions, subscriptions, refunds }
Applications: { career, status, interviews }
Analytics: { user_activity, revenue, engagement }
```

## 🛠️ Key Technical Features

### Dynamic Content Rendering

- **Conditional UI**: Different components/buttons based on user role and course ownership
- **Smart Routing**: Role-based navigation and access control
- **Responsive Design**: Mobile-first approach for all user types

### State Management

- **Global State**: User authentication, course enrollment status
- **Local State**: Component-specific data and UI states
- **Server State**: API data caching and synchronization

### Real-time Features

- **Live Classes**: Video conferencing and chat
- **Notifications**: Real-time updates for all user types
- **Analytics**: Live dashboard updates

---

## 📝 Content Management Strategy

### Academic Resources

- **Multi-board Support**: Punjab Board, Cambridge O/A Levels
- **Content Approval**: Admin moderation workflow
- **Version Control**: Track resource updates and changes

### Course Content

- **Video Streaming**: Secure video delivery with DRM
- **Progress Tracking**: Detailed learning analytics
- **Interactive Elements**: Quizzes, assignments, certificates

### User-Generated Content

- **Teacher Profiles**: Portfolio and credential verification
- **Student Reviews**: Course ratings and feedback
- **Community Features**: Q&A forums and discussions

---

This comprehensive structure provides a scalable foundation for building the complete NexaLearnify platform, with clear separation of concerns and role-based functionality.
