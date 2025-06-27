// Role-based constants
export const USER_ROLES = {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN',
  SUB_ADMIN: 'SUB_ADMIN',
  CAREER_APPLICANT: 'CAREER_APPLICANT',
  GUEST: 'GUEST'
};

// Course levels
export const COURSE_LEVELS = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

// Course categories
export const COURSE_CATEGORIES = {
  PROGRAMMING: 'Programming',
  DATA_SCIENCE: 'Data Science',
  WEB_DEVELOPMENT: 'Web Development',
  MOBILE_DEVELOPMENT: 'Mobile Development',
  MACHINE_LEARNING: 'Machine Learning',
  DESIGN: 'Design',
  BUSINESS: 'Business',
  MARKETING: 'Marketing',
  LANGUAGE: 'Language',
  MUSIC: 'Music',
  PHOTOGRAPHY: 'Photography',
  OTHER: 'Other'
};

// Assignment types
export const ASSIGNMENT_TYPES = {
  QUIZ: 'QUIZ',
  PROJECT: 'PROJECT',
  ESSAY: 'ESSAY',
  CODING: 'CODING',
  PRESENTATION: 'PRESENTATION'
};

// Assignment status
export const ASSIGNMENT_STATUS = {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  GRADED: 'GRADED',
  LATE: 'LATE'
};

// Payment status
export const PAYMENT_STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

// Live class status
export const LIVE_CLASS_STATUS = {
  SCHEDULED: 'SCHEDULED',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

// Notification types
export const NOTIFICATION_TYPES = {
  ASSIGNMENT: 'ASSIGNMENT',
  GRADE: 'GRADE',
  ANNOUNCEMENT: 'ANNOUNCEMENT',
  LIVE_CLASS: 'LIVE_CLASS',
  SYSTEM: 'SYSTEM'
};

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password'
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    CHANGE_PASSWORD: '/users/change-password',
    UPLOAD_AVATAR: '/users/avatar'
  },
  COURSES: {
    BASE: '/courses',
    ENROLLED: '/courses/enrolled',
    ENROLL: (id) => `/courses/${id}/enroll`,
    PROGRESS: (id) => `/courses/${id}/progress`
  },
  ADMIN: {
    USERS: '/admin/users',
    ANALYTICS: '/admin/analytics',
    SYSTEM_STATS: '/admin/system-stats'
  }
};

// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language'
};

// Form validation rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: {
    MIN_LENGTH: 8,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
  },
  PHONE: /^\+?[\d\s\-\(\)]+$/,
  NAME: /^[a-zA-Z\s]{2,50}$/
};

// File upload constraints
export const FILE_CONSTRAINTS = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: {
    IMAGES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    VIDEOS: ['video/mp4', 'video/webm', 'video/ogg']
  }
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  INPUT: 'YYYY-MM-DD',
  DATETIME: 'MMM DD, YYYY HH:mm',
  TIME: 'HH:mm'
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100]
};

// Theme colors
export const THEME_COLORS = {
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8'
  },
  SUCCESS: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d'
  },
  WARNING: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309'
  },
  ERROR: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c'
  }
};

// Course difficulty levels with colors
export const DIFFICULTY_LEVELS = {
  [COURSE_LEVELS.BEGINNER]: {
    label: 'Beginner',
    color: 'green',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
  [COURSE_LEVELS.INTERMEDIATE]: {
    label: 'Intermediate',
    color: 'yellow',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800'
  },
  [COURSE_LEVELS.ADVANCED]: {
    label: 'Advanced',
    color: 'red',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800'
  }
};

export default {
  USER_ROLES,
  COURSE_LEVELS,
  COURSE_CATEGORIES,
  ASSIGNMENT_TYPES,
  ASSIGNMENT_STATUS,
  PAYMENT_STATUS,
  LIVE_CLASS_STATUS,
  NOTIFICATION_TYPES,
  API_ENDPOINTS,
  STORAGE_KEYS,
  VALIDATION_RULES,
  FILE_CONSTRAINTS,
  DATE_FORMATS,
  PAGINATION,
  THEME_COLORS,
  DIFFICULTY_LEVELS
};
