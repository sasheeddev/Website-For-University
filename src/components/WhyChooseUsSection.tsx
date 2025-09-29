"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function WhyChooseUsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      title: "Taught by experts",
      description: "With 81% of our research rated as world-leading or internationally recognised, you'll learn from experts whose work shapes their sector, bringing real-world relevance into the classroom and equipping you with insights that influence industries today and will shape them in the future.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
      link: "/research/",
      linkText: "Our research"
    },
    {
      title: "Ranked Top 50 in the UK",
      description: "The University of South Wales is officially ranked in the Top 50 UK universities in the Guardian University Guide 2026. This achievement reflects our commitment to providing an applied, hands-on approach to education, because we believe the best way to learn is to do.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      link: "/campaigns/ranked-in-the-uks-top-50-universities/",
      linkText: "Find out more"
    },
    {
      title: "Employable graduates",
      description: "94% of our graduates are in employment and further study 15 months after graduation (Graduate Outcome Survey 2022/23). Our graduates thrive because every step of their journey at University is built around career-readiness from hands-on learning, immersive facilities, industry connections and world-leading expertise.",
      image: "https://images.unsplash.com/photo-1607013251379-e6eadbd17d32?w=600&h=400&fit=crop",
      link: "/campaigns/usw-in-action/",
      linkText: "USW In Action"
    },
    {
      title: "Hands-on learning",
      description: "From hands-on projects and real-world simulations to industry collaborations working with real clients, tackling real problems, and developing the skills employers are looking for. We create graduates who are prepared for the future and ready to build their careers.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      link: "/campaigns/usw-in-action/applied-learning/",
      linkText: "Learn more"
    },
    {
      title: "Industry connections",
      description: "Not only do our industry partners allow us to set up relevant work experience, but the partnerships inform our curriculum, so everything you learn is relevant for the field you're embarking on.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
      link: "/campaigns/usw-in-action/applied-learning/",
      linkText: "Working with industry"
    },
    {
      title: "Immersive facilities",
      description: "From on-campus flight simulators to mock courtrooms, film studios and a multi-million-pound clinical simulation centre and sport park, our facilities equips you for career success by immersing you in real world learning, so you practice your craft, not just read about it.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      link: "/campaigns/usw-in-action/immersive-facilities/",
      linkText: "Immersive Facilities"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            WHY
            <br />
            CHOOSE
            <br />
            US?
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 min-h-[500px]">
                      <div className="relative">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {benefit.description}
                          </p>
                          <Button
                            variant="link"
                            className="text-usw-red hover:text-red-700 text-base font-semibold p-0 h-auto underline"
                          >
                            {benefit.linkText}
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-usw-red'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
