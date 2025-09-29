import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CourseCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Undergraduate Card */}
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                alt="Undergraduate students studying together"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="usw-red p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Undergraduate</h3>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
                  >
                    View Courses
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Postgraduate Card */}
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="Postgraduate student in modern university space"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="usw-red p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Postgraduate</h3>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
                  >
                    View Courses
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <a href="/courses/course-listing" className="text-gray-700 hover:text-usw-red font-medium uppercase tracking-wide">
            Subject Areas
          </a>
          <a href="/study/apprenticeships" className="text-gray-700 hover:text-usw-red font-medium uppercase tracking-wide">
            Apprenticeships
          </a>
          <a href="/research" className="text-gray-700 hover:text-usw-red font-medium uppercase tracking-wide">
            Research
          </a>
          <a href="/international" className="text-gray-700 hover:text-usw-red font-medium uppercase tracking-wide">
            International
          </a>
        </div>
      </div>
    </section>
  );
}
