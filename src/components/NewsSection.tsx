import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function NewsSection() {
  const newsArticles = [
    {
      title: "Songs for Littles: the research that explains YouTube sensation Ms Rachel",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
      link: "/news/2025/september/songs-for-littles-the-research-that-explains-youtube-sensation-ms-rachel/"
    },
    {
      title: "Students rethink fashion for Oxfam's Second Hand September campaign",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      link: "/news/2025/september/students-rethink-fashion-for-oxfams-second-hand-september-campaign/"
    },
    {
      title: "USW signs agreements in India to strengthen family resilience research",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      link: "/news/2025/september/usw-signs-agreements-in-india-to-strengthen-family-resilience-research/"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest University News
          </h2>
          <Button
            variant="outline"
            className="bg-black text-white hover:bg-gray-800 border-black"
          >
            VIEW ALL
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-usw-red transition-colors">
                  <a href={article.link} className="block">
                    {article.title}
                  </a>
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Feature */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
              Transforming Teaching Through Campus Investments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are investing in the future of STEM with the exciting new Calon building
              at the heart of our Pontypridd Campus.
            </p>
            <div className="space-y-2">
              <Button
                variant="link"
                className="text-black hover:text-usw-red underline text-base font-semibold p-0 h-auto block"
              >
                INTRODUCING CALON
              </Button>
              <Button
                variant="link"
                className="text-black hover:text-usw-red underline text-base font-semibold p-0 h-auto block"
              >
                PONTYPRIDD CAMPUS
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
              alt="Modern university building investment"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute top-4 left-4 bg-usw-red text-white p-4 rounded text-sm max-w-48">
              <p className="font-bold">A MULTI-MILLION POUND INVESTMENT IN STEM TEACHING FACILITIES AND CAMPUS DEVELOPMENTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
