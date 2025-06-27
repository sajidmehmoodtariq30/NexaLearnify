// Shared and special routes configuration
import LiveClassroom from '../components/features/live-classes/LiveClassroom';
import PaymentForm from '../components/features/payments/PaymentForm';

// Error page components
const UnauthorizedPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-400">403</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">Unauthorized Access</h2>
      <p className="text-gray-500 mt-2">You don't have permission to access this page.</p>
      <button 
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Back
      </button>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-400">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
      <a 
        href="/home"
        className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Home
      </a>
    </div>
  </div>
);

// Shared routes (accessible by authenticated users)
export const sharedRoutes = [
  { 
    path: '/live-class/:classId', 
    element: ({ userRole }) => <LiveClassroom userRole={userRole} />, 
    title: 'Live Classroom',
    requiresAuth: true 
  },
  { 
    path: '/payment', 
    element: (
      <PaymentForm 
        courseId="1" 
        amount={99} 
        onSuccess={(result) => console.log('Payment successful:', result)}
        onCancel={() => console.log('Payment cancelled')}
      />
    ), 
    title: 'Payment',
    requiresAuth: true 
  }
];

// Error routes
export const errorRoutes = [
  { 
    path: '/unauthorized', 
    element: <UnauthorizedPage />, 
    title: 'Unauthorized' 
  },
  { 
    path: '*', 
    element: <NotFoundPage />, 
    title: 'Not Found' 
  }
];

export default { sharedRoutes, errorRoutes };
