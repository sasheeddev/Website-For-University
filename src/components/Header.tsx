"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const mainNavItems = [
    { title: "STUDY", href: "/study" },
    { title: "RESEARCH", href: "/research" },
    { title: "INTERNATIONAL", href: "/international" },
    { title: "BUSINESS", href: "/business" },
    { title: "ABOUT US", href: "/about" },
  ];

  const topNavItems = [
    { title: "Courses", href: "/Courses" },
    { title: "Apply", href: "/apply" },
    { title: "Open Days", href: "/opendays" },
    { title: "Current Students", href: "/current-students" },
    { title: "Student", href: "/student" },
    { title: "LMS", href: "https://lavenderblush-lapwing-692518.hostingersite.com/" },
  ];

  // Fullscreen Navigation Overlay
  const FullscreenNav = () => {
    if (!isMenuOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black">
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex h-full flex-col lg:flex-row">
          {/* Left Side - Navigation */}
          <div className="flex-1 flex items-center justify-start px-6 lg:pl-16 min-h-screen">
            <nav className="space-y-6 lg:space-y-8">
              {mainNavItems.map((item) => (
                <div key={item.title} className="group">
                  <Link
                    href={item.href}
                    className="block text-4xl md:text-6xl lg:text-8xl font-bold text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  <div className="w-full h-1 bg-white mt-1 lg:mt-2"></div>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Side - Image and Card */}
          <div className="flex-1 relative flex flex-col items-center justify-center gap-6 mt-8 lg:mt-0 lg:block">
            {/* Library Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
                alt="Students in library"
                className="rounded-lg shadow-xl w-full max-w-sm lg:max-w-md"
              />
            </div>

            {/* Red Card */}
            <div className="bg-red-600 p-6 lg:p-8 rounded-lg max-w-xs lg:max-w-sm text-white lg:absolute lg:bottom-20 lg:right-20">
              <div className="flex items-start justify-between mb-3 lg:mb-4">
                <span className="text-sm lg:text-lg font-bold">
                  FIND OUT WHY WE'RE A TOP UNIVERSITY FOR AURUWEDA.
                </span>
                <div className="ml-3 flex-shrink-0">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- New: Search Overlay ---
  const SearchOverlay = () => {
    if (!isSearchOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center p-6">
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-gray-300"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 text-lg rounded-lg focus:outline-none shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
              }
            }}
          />
          <Button
            onClick={() =>
              (window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`)
            }
            className="mt-4 w-full bg-red-600 text-white hover:bg-red-700"
          >
            Search
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        {/* Top Navigation Bar */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto flex items-center justify-between py-2 px-4">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {topNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-600 hover:text-usw-red transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {/* Hamburger Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-usw-red"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              {/* Search */}
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-usw-red"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 usw-red rounded flex items-center justify-center">
                <img src="/logo.jpg" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">IUSS</h1>
                <h2 className="text-lg font-bold text-gray-900">Campuse</h2>
                <p className="text-xs text-gray-600">Sri Lanka</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <FullscreenNav />

      {/* Search Overlay */}
      <SearchOverlay />
    </>
  );
}
