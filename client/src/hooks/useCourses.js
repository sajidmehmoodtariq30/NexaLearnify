import { useState, useEffect } from 'react';
import { courseAPI } from '../services/api';

export const useCourses = (filters = {}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });

  const fetchCourses = async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const queryParams = { ...filters, ...params };
      const response = await courseAPI.getAllCourses(queryParams);
      
      setCourses(response.courses || []);
      setPagination(response.pagination || pagination);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching courses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [JSON.stringify(filters)]);

  const refetch = () => {
    fetchCourses();
  };

  const loadMore = () => {
    if (pagination.page < pagination.totalPages) {
      fetchCourses({ page: pagination.page + 1 });
    }
  };

  return {
    courses,
    loading,
    error,
    pagination,
    refetch,
    loadMore,
    fetchCourses
  };
};

export const useCourse = (courseId) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await courseAPI.getCourse(courseId);
        setCourse(response);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching course:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const refetch = () => {
    if (courseId) {
      fetchCourse();
    }
  };

  return {
    course,
    loading,
    error,
    refetch
  };
};

export const useEnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await courseAPI.getEnrolledCourses();
        setEnrolledCourses(response.courses || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching enrolled courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  const enrollInCourse = async (courseId) => {
    try {
      await courseAPI.enrollCourse(courseId);
      // Refetch enrolled courses
      const response = await courseAPI.getEnrolledCourses();
      setEnrolledCourses(response.courses || []);
      return true;
    } catch (err) {
      console.error('Error enrolling in course:', err);
      throw err;
    }
  };

  return {
    enrolledCourses,
    loading,
    error,
    enrollInCourse
  };
};

export const useCourseProgress = (courseId) => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!courseId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await courseAPI.getCourseProgress(courseId);
        setProgress(response);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching course progress:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [courseId]);

  const updateProgress = (newProgress) => {
    setProgress(prev => ({ ...prev, ...newProgress }));
  };

  return {
    progress,
    loading,
    error,
    updateProgress
  };
};

export default {
  useCourses,
  useCourse,
  useEnrolledCourses,
  useCourseProgress
};
