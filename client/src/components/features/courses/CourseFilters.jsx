import { useState } from 'react';

const CourseFilters = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    priceRange: '',
    rating: '',
    duration: ''
  });

  const categories = [
    'All Categories',
    'Programming',
    'Data Science',
    'Web Development',
    'Mobile Development',
    'Machine Learning',
    'Design',
    'Business',
    'Marketing'
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
  const priceRanges = ['All Prices', 'Free', '$0-50', '$51-100', '$101-200', '$200+'];
  const ratings = ['All Ratings', '4.5+', '4.0+', '3.5+', '3.0+'];
  const durations = ['All Durations', '0-2 hours', '3-6 hours', '7-17 hours', '17+ hours'];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      level: '',
      priceRange: '',
      rating: '',
      duration: ''
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {categories.map((category) => (
              <option key={category} value={category === 'All Categories' ? '' : category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Level
          </label>
          <select
            value={filters.level}
            onChange={(e) => handleFilterChange('level', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {levels.map((level) => (
              <option key={level} value={level === 'All Levels' ? '' : level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {priceRanges.map((range) => (
              <option key={range} value={range === 'All Prices' ? '' : range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating
          </label>
          <select
            value={filters.rating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {ratings.map((rating) => (
              <option key={rating} value={rating === 'All Ratings' ? '' : rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>
          <select
            value={filters.duration}
            onChange={(e) => handleFilterChange('duration', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {durations.map((duration) => (
              <option key={duration} value={duration === 'All Durations' ? '' : duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;
