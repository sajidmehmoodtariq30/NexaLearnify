import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TopBar = ({ onMenuClick }) => {
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Academics', href: '/academics' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const getCurrentPageName = () => {
    const currentPage = navigation.find(item => location.pathname === item.href)
    return currentPage ? currentPage.name : 'Dashboard'
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-900 lg:ml-0">
            {getCurrentPageName()}
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default TopBar
