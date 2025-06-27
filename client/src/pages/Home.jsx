import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Play,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  BookMarked,
  Video,
  UserCheck,
  Briefcase,
  Globe,
  Clock,
  Download
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const stats = [
    { number: '10,000+', label: 'Students Enrolled', icon: Users },
    { number: '500+', label: 'Expert Teachers', icon: UserCheck },
    { number: '1,000+', label: 'Courses Available', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: Award }
  ]

  const features = [
    {
      icon: BookMarked,
      title: 'Free Academic Resources',
      description: 'Access comprehensive study notes, past papers, and textbooks for Punjab Board and Cambridge O/A Levels.',
      color: 'bg-blue-500'
    },
    {
      icon: Video,
      title: 'Premium Video Courses',
      description: 'Learn from expert instructors with high-quality recorded lectures and interactive content.',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Live Teaching Platform',
      description: 'Join live classes with experienced teachers and interact with peers in real-time.',
      color: 'bg-purple-500'
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Get career guidance, apply for internships, and prepare for interviews with industry experts.',
      color: 'bg-orange-500'
    }
  ]

  const testimonials = [
    {
      name: 'Ahmed Ali',
      role: 'O Level Student',
      content: 'NexaLearnify helped me achieve A grades in all subjects. The study materials are excellent!',
      rating: 5
    },
    {
      name: 'Fatima Khan',
      role: 'A Level Student',
      content: 'The live teaching sessions are amazing. Teachers are very supportive and knowledgeable.',
      rating: 5
    },
    {
      name: 'Hassan Malik',
      role: 'University Graduate',
      content: 'Got my dream job through NexaLearnify\'s career development program. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Empower Your Learning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Journey with NexaLearnify
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A comprehensive educational platform offering free academic resources, premium courses, live teaching, and career development opportunities for students and professionals.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link to="/academics">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Free Resources
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Browse Courses
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Everything You Need to Succeed
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              From free academic resources to premium courses and career guidance, we provide a complete educational ecosystem.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              What Our Students Say
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              Join thousands of satisfied students who have transformed their academic journey with us.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to Start Your Learning Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Join NexaLearnify today and unlock access to premium educational resources, expert guidance, and career opportunities.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link to="/academics" className="block p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                <Download className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Free Resources</h3>
                <p className="text-gray-400 text-sm">Download study materials, past papers, and notes</p>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/courses" className="block p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                <Play className="h-8 w-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Video Courses</h3>
                <p className="text-gray-400 text-sm">Access premium recorded lectures</p>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/courses" className="block p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                <Clock className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Classes</h3>
                <p className="text-gray-400 text-sm">Join interactive live teaching sessions</p>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/contact" className="block p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                <Briefcase className="h-8 w-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Career Support</h3>
                <p className="text-gray-400 text-sm">Get guidance for internships and jobs</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home