"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    {
      title: "STUDY",
      href: "/study",
    },
    {
      title: "RESEARCH",
      href: "/research",
    },
    {
      title: "INTERNATIONAL",
      href: "/international",
    },
    {
      title: "BUSINESS",
      href: "/business",
    },
    {
      title: "ABOUT US",
      href: "/about",
    },
  ];

  const topNavItems = [
    { title: "Courses", href: "/Courses" },
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
                  <Link
                    href={item.href}
                    className="block text-6xl md:text-7xl lg:text-8xl font-bold text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
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
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 usw-red rounded flex items-center justify-center">
                <img src="/logo.jpg"/>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">IUSS</h1>
                <h2 className="text-lg font-bold text-gray-900">Campuse</h2>
                <p className="text-xs text-gray-600">Sri Lanka</p>
              </div>
            </Link>
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
