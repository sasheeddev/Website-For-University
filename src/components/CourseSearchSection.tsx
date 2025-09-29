import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function CourseSearchSection() {
  return (
    <section className="usw-blue py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Find a course
          </h2>

          <div className="relative max-w-lg mx-auto">
            <Input
              placeholder="Search course by keyword"
              className="bg-white border-0 py-4 px-6 text-lg rounded-lg shadow-lg pr-12"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-usw-blue"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button
              variant="link"
              className="text-white hover:text-gray-200 underline text-base"
            >
              VIEW COURSES
            </Button>
            <Button
              variant="link"
              className="text-white hover:text-gray-200 underline text-base"
            >
              BROWSE SUBJECTS
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,120 C300,40 900,40 1200,120 L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
