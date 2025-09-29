import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function OpenDaysSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                UPCOMING
                <br />
                OPEN DAYS
              </h2>
              <p className="text-lg text-gray-600 max-w-md">
                Come and meet us on campus and see what makes us special. Discover our facilities,
                explore the campus, and meet academics from your course.
              </p>
            </div>

            <Button
              variant="link"
              className="text-black hover:text-usw-red underline text-base font-semibold p-0"
            >
              VIEW ALL OPEN DAYS
            </Button>
          </div>

          {/* Right Content - Date Cards */}
          <div className="space-y-6">
            {/* October Open Day */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="usw-red p-6 text-white flex-shrink-0">
                    <Badge variant="outline" className="bg-transparent border-white text-white mb-3">
                      Undergraduate Open Day
                    </Badge>
                    <div className="text-center">
                      <div className="text-5xl font-bold">25</div>
                      <div className="text-sm uppercase tracking-wide">OCTOBER</div>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      Come and meet us on campus and see what makes us special.
                      Discover our facilities, explore the campus, and meet
                      academics from your course.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* November Open Day */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="usw-blue p-6 text-white flex-shrink-0">
                    <Badge variant="outline" className="bg-transparent border-white text-white mb-3">
                      Undergraduate Open Day
                    </Badge>
                    <div className="text-center">
                      <div className="text-5xl font-bold">22</div>
                      <div className="text-sm uppercase tracking-wide">NOVEMBER</div>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      Come and meet us on campus and see what makes us special.
                      Discover our facilities, explore the campus, and meet
                      academics from your course.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campus Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=300&fit=crop"
                alt="Students walking on campus with USW banners"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
