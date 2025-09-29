"use client"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, ChevronDown, ListFilter, MapPin, Clock } from 'lucide-react';
import React, { useState, useMemo } from 'react';


interface Course {
  id: number;
  title: string;
  category: 'Full-time' | 'Part-time';
  level: 'Undergraduate' | 'Postgraduate' | 'Apprenticeship';
  excerpt: string;
  location: string;
  duration: string;
  imagePlaceholder: string;
}

const coursesData: Course[] = [
  { id: 1, title: 'BSc (Hons) Accounting and Finance', category: 'Full-time', level: 'Undergraduate', excerpt: 'Develop the essential skills for a rewarding career in finance and professional accountancy.', location: 'Cardiff Campus', duration: '3 Years', imagePlaceholder: '100x70/c02026/ffffff?text=Acc' },
  { id: 2, title: 'MSc Advanced Computer Science', category: 'Part-time', level: 'Postgraduate', excerpt: 'Deepen your knowledge of advanced algorithms, machine learning, and cloud computing architectures.', location: 'Treforest Campus', duration: '1 Year', imagePlaceholder: '100x70/c02026/ffffff?text=CS' },
  { id: 3, title: 'BEng (Hons) Aeronautical Engineering', category: 'Full-time', level: 'Undergraduate', excerpt: 'Gain practical experience in aircraft design, maintenance, and flight mechanics.', location: 'Pontypridd Campus', duration: '4 Years', imagePlaceholder: '100x70/c02026/ffffff?text=Aero' },
  { id: 4, title: 'Advanced Clinical Practice (MSc)', category: 'Part-time', level: 'Postgraduate', excerpt: 'A program for healthcare professionals aiming for advanced clinical roles and leadership.', location: 'Virtual Learning', duration: '2 Years', imagePlaceholder: '100x70/c02026/ffffff?text=Med' },
  { id: 5, title: 'Level 4 Project Management Apprenticeship', category: 'Part-time', level: 'Apprenticeship', excerpt: 'Combine work with study to achieve a formal qualification in project management fundamentals.', location: 'Mixed Mode', duration: '18 Months', imagePlaceholder: '100x70/c02026/ffffff?text=PM' },
  { id: 6, title: 'BA (Hons) Architectural Design', category: 'Full-time', level: 'Undergraduate', excerpt: 'Explore creative and technical aspects of designing sustainable and inspiring buildings.', location: 'Cardiff Campus', duration: '3 Years', imagePlaceholder: '100x70/c02026/ffffff?text=Arch' },
];

const alphabetFilters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const levelFilters = ['All Courses', 'Undergraduate', 'Postgraduate', 'Apprenticeship', 'Short Courses'];

// --- 2. Course Card Component ---

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
    {/* Image container on the left */}
    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
      <img
        src={`https://placehold.co/${course.imagePlaceholder}`}
        alt={course.title}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Content Area */}
    <div className="p-4 flex-grow space-y-2">
      {/* Category Tags */}
      <div className="flex items-center space-x-2 text-xs font-semibold">
        <span className="text-red-700 uppercase">{course.category}</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">{course.level}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 hover:text-red-700 transition cursor-pointer leading-tight">
        {course.title}
      </h3>

      {/* Excerpt/Description (Desktop/Tablet visible) */}
      <p className="text-sm text-gray-600 hidden md:block">
        {course.excerpt}
      </p>

      {/* Location and Duration */}
      <div className="flex flex-wrap text-xs text-gray-500 pt-1">
        <div className="flex items-center mr-4">
          <MapPin className="w-3 h-3 mr-1 text-red-700" />
          <span>{course.location}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-3 h-3 mr-1 text-red-700" />
          <span>{course.duration}</span>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. Course Content Component (Replaces CourseContent.tsx) ---

const CourseContent: React.FC = () => {
  const [activeLevelFilter, setActiveLevelFilter] = useState('All Courses');
  const [activeLetterFilter, setActiveLetterFilter] = useState<string | null>(null);

  // Filter the courses based on current state (simulated)
  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      // Level filter
      if (activeLevelFilter !== 'All Courses' && course.level !== activeLevelFilter) {
        return false;
      }
      // Letter filter
      if (activeLetterFilter && !course.title.startsWith(activeLetterFilter)) {
        return false;
      }
      return true;
    });
  }, [activeLevelFilter, activeLetterFilter]);

  return (
    <div className="bg-gray-50">
      {/* 1. Hero / Header Section */}
      <div className="bg-[#c02026] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content (Title and Search) */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                FIND A COURSE
              </h1>
              {/* Search Input (Always visible) */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a course..."
                  className="w-full py-3 pl-4 pr-12 text-gray-800 rounded-lg focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                />
                <button
                  aria-label="Search"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-700"
                >
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Right Content (Image - Hidden on small screens for better mobile experience) */}
            <div className="hidden lg:block h-64 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/600x400/9e1b2f/ffffff?text=University+Students"
                alt="Students walking on campus"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Filter / Navigation Bar */}
      {/* Making the filter bar sticky on scroll */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-200 shadow-sm"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* A-Z Filter Bar (Scrollable on Mobile) */}
          <div className="py-2 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <div className="inline-flex space-x-2 sm:space-x-3 lg:space-x-4">
              {alphabetFilters.map(letter => (
                <button
                  key={letter}
                  onClick={() => setActiveLetterFilter(prev => prev === letter ? null : letter)}
                  className={`px-2 py-1 text-sm font-semibold rounded transition duration-150 ease-in-out ${
                    activeLetterFilter === letter
                      ? 'bg-red-700 text-white shadow-md'
                      : 'text-gray-600 hover:text-red-700 hover:bg-gray-100'
                  }`}
                >
                  {letter}
                </button>
              ))}
              {/* Custom style to hide scrollbar */}
              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .hide-scrollbar {
                  -ms-overflow-style: none; /* IE and Edge */
                  scrollbar-width: none; /* Firefox */
                }
              `}</style>
            </div>
          </div>
          
          {/* Level Filter Buttons and Sort Dropdown */}
          <div className="flex flex-wrap justify-between items-center py-3 border-t border-gray-100">
            {/* Primary Filter Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              {levelFilters.map(level => (
                <button
                  key={level}
                  onClick={() => setActiveLevelFilter(level)}
                  className={`px-3 py-1 text-sm font-medium rounded-full transition duration-150 ease-in-out ${
                    activeLevelFilter === level
                      ? 'bg-red-700 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-red-50 hover:border-red-300'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Secondary Filter/Sort Dropdown */}
            <div className="relative mt-2 md:mt-0">
              <button
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                <ListFilter className="w-4 h-4 mr-2" />
                Sort By: Title (A-Z)
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Course Listings Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {activeLetterFilter ? `Courses starting with '${activeLetterFilter}'` : 'Showing All Courses'} ({filteredCourses.length})
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {filteredCourses.map(course => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        
        {/* Placeholder for no results */}
        {filteredCourses.length === 0 && (
            <div className="text-center py-10 border border-dashed border-gray-300 rounded-xl bg-white mt-8">
                <p className="text-lg text-gray-600">No courses match your current filters. Try adjusting your selections.</p>
            </div>
        )}
      </div>
    </div>
  );
};

// --- 4. Main Page Component (Original Export) ---

/**
 * This is the main page component that wraps the course listing content
 * with the application's header and footer.
 */
const CoursePage = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      {/* 1. Global Header Component */}
      <Header />

      {/* 2. Main Content Area: The Responsive Course Listing */}
      {/* flex-grow ensures this section takes up available space */}
      <main className="flex-grow">
        <CourseContent />
      </main>

      {/* 3. Global Footer Component */}
      <Footer />
    </div>
  );
};

export default CoursePage;
