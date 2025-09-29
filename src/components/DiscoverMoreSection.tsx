import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export function DiscoverMoreSection() {
  const discoverItems = [
    {
      title: "WELCOMING NEW STUDENTS",
      description: "Your guide to the start of term. Find everything you could possibly need to start your studies and settle into university life.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      link: "/getting-started/",
      isVideo: true
    },
    {
      title: "OUR LOCATIONS",
      description: "One university across three locations, you can enjoy the buzz of the cities, the beauty of the coast and the calm of the countryside.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop",
      link: "/location/",
      isVideo: true
    },
    {
      title: "STUDENT LIFE",
      description: "Studying with us is more than just earning a degree. Here, you'll make friends for life, try out and learn lots of new things and become more independent than ever before.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      link: "/getting-started/preparing-for-university/preparing-for-student-life/",
      isVideo: true
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            DISCOVER MORE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {discoverItems.map((item, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {item.isVideo && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play Video
                    </Button>
                  </div>
                )}
              </div>

              <CardContent className="p-6 text-white">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
