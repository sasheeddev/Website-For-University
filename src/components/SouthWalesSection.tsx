import { Button } from "@/components/ui/button";

export function SouthWalesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                THIS IS
                <br />
                <span className="text-6xl md:text-7xl lg:text-8xl">SOUTH</span>
                <br />
                <span className="text-6xl md:text-7xl lg:text-8xl">WALES</span>
              </h2>

              <div className="usw-red p-8 text-white rounded-lg max-w-md">
                <p className="text-lg leading-relaxed">
                  Welcome to a place of inspiring contrasts. One university across three locations,
                  you can enjoy the buzz of the cities, the beauty of the coast and the calm of the countryside.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <Button
                variant="link"
                className="text-black hover:text-usw-red underline text-base font-semibold p-0 h-auto justify-start"
              >
                OUR LOCATIONS
              </Button>
              <Button
                variant="link"
                className="text-black hover:text-usw-red underline text-base font-semibold p-0 h-auto justify-start"
              >
                OUR CAMPUSES
              </Button>
              <Button
                variant="link"
                className="text-black hover:text-usw-red underline text-base font-semibold p-0 h-auto justify-start"
              >
                VIRTUAL TOURS
              </Button>
              <Button
                variant="link"
                className="text-black hover:text-usw-red underline text-base font-semibold p-0 h-auto justify-start"
              >
                STUDENT LIFE
              </Button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="space-y-6">
            {/* Students on Bridge */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=300&fit=crop"
                alt="Four students walk together on a footbridge"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Cardiff City */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=300&fit=crop"
                  alt="Millennium Stadium on the river at Cardiff city centre"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Campus Building */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=300&fit=crop"
                  alt="Modern university building architecture"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 max-w-4xl">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed">
            University is a place to feed the heart and the head. Somewhere to develop
            yourself personally, socially, and academically.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
