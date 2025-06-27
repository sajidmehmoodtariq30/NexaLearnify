import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  BookOpen, 
  Home, 
  Users, 
  Phone, 
  GraduationCap,
  X,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Academics', href: '/academics', icon: BookOpen },
    { name: 'Courses', href: '/courses', icon: GraduationCap },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen flex flex-col`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0">
          <Link to="/home" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">NexaLearnify</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-8 px-4 overflow-y-auto">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 flex-shrink-0">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Need Help?</h3>
            <p className="text-xs text-gray-600 mb-3">Contact our support team for assistance.</p>
            <Button size="sm" className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
