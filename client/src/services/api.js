// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// HTTP Methods
const httpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  // Add auth token if available
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
};

// Auth API
export const authAPI = {
  login: (credentials) => 
    apiRequest('/auth/login', {
      method: httpMethods.POST,
      body: JSON.stringify(credentials)
    }),
  
  register: (userData) =>
    apiRequest('/auth/register', {
      method: httpMethods.POST,
      body: JSON.stringify(userData)
    }),
  
  logout: () =>
    apiRequest('/auth/logout', {
      method: httpMethods.POST
    }),
  
  refreshToken: () =>
    apiRequest('/auth/refresh', {
      method: httpMethods.POST
    }),
  
  forgotPassword: (email) =>
    apiRequest('/auth/forgot-password', {
      method: httpMethods.POST,
      body: JSON.stringify({ email })
    }),
  
  resetPassword: (token, password) =>
    apiRequest('/auth/reset-password', {
      method: httpMethods.POST,
      body: JSON.stringify({ token, password })
    })
};

// User API
export const userAPI = {
  getProfile: () => apiRequest('/users/profile'),
  
  updateProfile: (userData) =>
    apiRequest('/users/profile', {
      method: httpMethods.PUT,
      body: JSON.stringify(userData)
    }),
  
  changePassword: (passwordData) =>
    apiRequest('/users/change-password', {
      method: httpMethods.POST,
      body: JSON.stringify(passwordData)
    }),
  
  uploadAvatar: (formData) =>
    apiRequest('/users/avatar', {
      method: httpMethods.POST,
      headers: {}, // Remove Content-Type for FormData
      body: formData
    })
};

// Course API
export const courseAPI = {
  getAllCourses: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/courses?${queryString}`);
  },
  
  getCourse: (id) => apiRequest(`/courses/${id}`),
  
  createCourse: (courseData) =>
    apiRequest('/courses', {
      method: httpMethods.POST,
      body: JSON.stringify(courseData)
    }),
  
  updateCourse: (id, courseData) =>
    apiRequest(`/courses/${id}`, {
      method: httpMethods.PUT,
      body: JSON.stringify(courseData)
    }),
  
  deleteCourse: (id) =>
    apiRequest(`/courses/${id}`, {
      method: httpMethods.DELETE
    }),
  
  enrollCourse: (courseId) =>
    apiRequest(`/courses/${courseId}/enroll`, {
      method: httpMethods.POST
    }),
  
  getEnrolledCourses: () => apiRequest('/courses/enrolled'),
  
  getCourseProgress: (courseId) => 
    apiRequest(`/courses/${courseId}/progress`)
};

// Assignment API
export const assignmentAPI = {
  getAssignments: (courseId) => 
    apiRequest(`/courses/${courseId}/assignments`),
  
  getAssignment: (assignmentId) =>
    apiRequest(`/assignments/${assignmentId}`),
  
  submitAssignment: (assignmentId, submission) =>
    apiRequest(`/assignments/${assignmentId}/submit`, {
      method: httpMethods.POST,
      body: JSON.stringify(submission)
    }),
  
  gradeAssignment: (submissionId, grade) =>
    apiRequest(`/assignments/submissions/${submissionId}/grade`, {
      method: httpMethods.POST,
      body: JSON.stringify(grade)
    })
};

// Live Class API
export const liveClassAPI = {
  getLiveClasses: () => apiRequest('/live-classes'),
  
  joinClass: (classId) =>
    apiRequest(`/live-classes/${classId}/join`, {
      method: httpMethods.POST
    }),
  
  createClass: (classData) =>
    apiRequest('/live-classes', {
      method: httpMethods.POST,
      body: JSON.stringify(classData)
    })
};

// Admin API
export const adminAPI = {
  getUsers: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/users?${queryString}`);
  },
  
  getUserById: (id) => apiRequest(`/admin/users/${id}`),
  
  updateUser: (id, userData) =>
    apiRequest(`/admin/users/${id}`, {
      method: httpMethods.PUT,
      body: JSON.stringify(userData)
    }),
  
  deleteUser: (id) =>
    apiRequest(`/admin/users/${id}`, {
      method: httpMethods.DELETE
    }),
  
  getAnalytics: () => apiRequest('/admin/analytics'),
  
  getSystemStats: () => apiRequest('/admin/system-stats')
};

export default apiRequest;
