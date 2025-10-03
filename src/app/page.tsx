import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CourseCards } from "@/components/CourseCards";
import { CourseSearchSection } from "@/components/CourseSearchSection";
import { OpenDaysSection } from "@/components/OpenDaysSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { IUSSSection } from "@/components/IUSSSection";
import { DiscoverMoreSection } from "@/components/DiscoverMoreSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CourseCards />
        <CourseSearchSection />
        <OpenDaysSection />
        <WhyChooseUsSection />
        <IUSSSection />
        <DiscoverMoreSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
