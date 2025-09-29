"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero Section */}
      <div className="usw-blue min-h-[600px] relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  TOP
                  <br />
                  UNIVERSITY FOR
                  <br />
                  AYURUWEDIC
                </h1>
                <p className="text-lg md:text-xl max-w-md">
                  Find out why we're a top University for Ayuruwedic in Sri Lanka. Join us
                  at our next Open Day on Saturday 25 October.
                </p>
              </div>
              <Link href="/Courses">
                <Button
                    className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold"
                    size="lg"
                >
                  Find Your Courses
                </Button>
              </Link>
            </div>

            {/* Right Content - Student Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Video Thumbnail */}
                <div className="relative">
                  <div className="bg-gray-300 aspect-square rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop"
                      alt="Students in discussion"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open("https://www.youtube.com/watch?v=7ghUuMyP7uU", "_blank")}
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                                       >
                           <Play className="w-4 h-4 mr-2" />
                              PLAY VIDEO
                            </Button>

                    </div>
                  </div>
                </div>

                {/* Student Image */}
                <div className="space-y-4">
                  <div className="bg-gray-200 aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/smiling_female_student.jpg"
                      alt="Smiling female student"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Welcome Card */}
                  <Link href="/Started">
                       <Card className="p-4 bg-white/95 backdrop-blur-sm cursor-pointer">
                          <div className="text-center space-y-2">
                           <div className="w-8 h-8 mx-auto bg-black rounded-full flex items-center justify-center">
                               <span className="text-white text-xs">→</span>
                          </div>
                          <div className="text-sm">
                              <p className="font-semibold">WELCOME</p>
                              <p className="text-gray-600">NEW STUDENTS</p>
                              <p className="text-xs">YOUR GUIDE</p>
                              <p className="text-xs">TO THE START</p>
                              <p className="text-xs">OF TERM</p>
                          </div>
                           </div>
                       </Card>
                   </Link>
                </div>
              </div>

              {/* Floating Question Mark */}
              <div className="absolute bottom-4 right-4">
                <div className="w-12 h-12 usw-red rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              At the University of South Wales, we deliver courses that will change
              lives and our world for the better.{" "}
              <span className="text-usw-red">This is education in action.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
