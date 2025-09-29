"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    {
      title: "STUDY",
      href: "/study",
      submenu: [
        { title: "Undergraduate", href: "/study/undergraduate-degrees" },
        { title: "Postgraduate", href: "/study/postgraduate-degrees" },
        { title: "Subjects", href: "/courses/course-listing" },
        { title: "Courses", href: "/courses" },
        { title: "Apply", href: "/apply" },
        { title: "Student Life", href: "/student-life" },
        { title: "Accommodation", href: "/accommodation" },
        { title: "Fees and Funding", href: "/money" },
      ],
    },
    {
      title: "RESEARCH",
      href: "/research",
      submenu: [
        { title: "Research Areas", href: "/research/research-areas" },
        { title: "Our Research Strategy", href: "/research/research-and-innovation-strategy-2030" },
        { title: "Research Excellence Framework", href: "/research/research-impact/research-excellence-framework" },
        { title: "Research Environment", href: "/research/research-environment" },
      ],
    },
    {
      title: "INTERNATIONAL",
      href: "/international",
      submenu: [
        { title: "Welcome", href: "/international/welcome" },
        { title: "Fees and Scholarships", href: "/international/fees-scholarships" },
        { title: "How to Apply", href: "/international/welcome/apply-questions" },
        { title: "Visas and Pre Arrival", href: "/international/visas-and-pre-arrival" },
      ],
    },
    {
      title: "BUSINESS",
      href: "/business",
      submenu: [
        { title: "Professional Development", href: "/business/professional-development" },
        { title: "Venues and Facilities", href: "/business/venues-and-facilities-hire" },
        { title: "USW Exchange", href: "/business/usw-exchange" },
        { title: "Our Expertise", href: "/business/our-expertise" },
      ],
    },
    {
      title: "ABOUT US",
      href: "/about",
      submenu: [
        { title: "Our Locations", href: "/location" },
        { title: "Our Structure", href: "/about/our-structure" },
        { title: "Sustainability", href: "/about/sustainability" },
        { title: "News", href: "/news" },
        { title: "Events", href: "/events" },
        { title: "University Services", href: "/services" },
      ],
    },
  ];

  const topNavItems = [
    { title: "Courses", href: "/courses" },
    { title: "Apply", href: "/apply" },
    { title: "Open Days", href: "/opendays" },
    { title: "Current Students", href: "/current-students" },
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

        <div className="flex h-full">
          {/* Left Side - Navigation */}
          <div className="flex-1 flex items-center justify-start pl-16">
            <nav className="space-y-8">
              {mainNavItems.map((item, index) => (
                <div key={item.title} className="group">
                  <a
                    href={item.href}
                    className="block text-6xl md:text-7xl lg:text-8xl font-bold text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                  <div className="w-full h-1 bg-white mt-2"></div>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Side - Image and Card */}
          <div className="flex-1 relative flex items-center justify-center">
            {/* Library Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
                alt="Students in library"
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Red Card */}
            <div className="absolute bottom-20 right-20 usw-red p-8 rounded-lg max-w-sm text-white">
              <div className="flex items-start justify-between mb-4">
                <span className="text-lg font-bold">FIND OUT WHY WE'RE A TOP UNIVERSITY FOR AURUWEDA .</span>
                <div className="ml-4 flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
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

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        {/* Top Navigation Bar */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto flex items-center justify-between py-2 px-4">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {topNavItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-600 hover:text-usw-red transition-colors"
                >
                  {item.title}
                </a>
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
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-usw-red">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 usw-red rounded flex items-center justify-center">
                <img src="/logo.jpg"/>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">IUSS</h1>
                <h2 className="text-lg font-bold text-gray-900">Campuse</h2>
                <p className="text-xs text-gray-600">Sri Lanka</p>
              </div>
            </a>
          </div>

          {/* Spacer - No desktop navigation */}
          <div></div>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <FullscreenNav />
    </>
  );
}
