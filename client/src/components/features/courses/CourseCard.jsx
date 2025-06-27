import { Button } from '../../ui/button';

const CourseCard = ({ course }) => {
  const {
    id,
    title,
    description,
    instructor,
    thumbnail,
    duration,
    studentsCount,
    rating,
    price,
    category,
    level
  } = course;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={thumbnail || '/api/placeholder/400/225'}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {category}
          </span>
          <span className="text-sm text-gray-500">{level}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-4">👨‍🏫 {instructor}</span>
          <span className="mr-4">⏱️ {duration}</span>
          <span>👥 {studentsCount} students</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center text-yellow-400">
              {'★'.repeat(Math.floor(rating))}
              {'☆'.repeat(5 - Math.floor(rating))}
            </div>
            <span className="ml-1 text-sm text-gray-600">({rating})</span>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">
              {price === 0 ? 'Free' : `$${price}`}
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <Button className="flex-1">
            Enroll Now
          </Button>
          <Button variant="outline">
            Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
