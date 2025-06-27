import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload, isAuthenticated: true };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload, isAuthenticated: false };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false, loading: false };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // TODO: Verify token with backend
      // For now, just assume it's valid
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
    }
  }, []);

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };

  const register = async (userData) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      clearError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
