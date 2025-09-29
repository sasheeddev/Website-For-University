import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const Starterpage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        {/* Section 1 - Hero */}
        <div className="bg-red-700 text-white p-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold">Your university application</h2>
            <h1 className="text-3xl font-bold">HOW TO APPLY</h1>
            <p>
              Applying to university shouldn’t be a daunting experience. From
              finding the right course to how to submit the perfect application,
              we’ve got everything you need to get started.
            </p>
            <button className="bg-black px-4 py-2 rounded text-white">
              FIND YOUR COURSE
            </button>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <Image
              src="/apply-hero.jpg"
              alt="Students"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
        </div>

        {/* Section 2 - Making your application */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">MAKING YOUR APPLICATION</h2>

          <div className="space-y-4 md:flex md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <h3 className="font-semibold">Apply through UCAS</h3>
              <p>
                All applications for full-time undergraduate courses at UK
                universities should be made via UCAS...
              </p>
              <a href="#" className="text-red-700 font-semibold">
                APPLY THROUGH UCAS
              </a>
            </div>

            <div className="md:w-1/2">
              <h3 className="font-semibold">Apply direct</h3>
              <p>
                You can apply direct to the University for most postgraduate
                courses and international part-time...
              </p>
              <a href="#" className="text-red-700 font-semibold">
                FIND A COURSE
              </a>
            </div>
          </div>
        </div>

        {/* Section 3 - Get Started */}
        <div className="bg-red-600 text-white p-6">
          <h2 className="text-3xl font-bold">GET STARTED</h2>
          <p className="mt-4">
            There’s lots to think about when applying to university. Choosing the
            right course for you is a big decision...
          </p>
          <div className="mt-4 space-y-2">
            <a href="#" className="underline">
              CHOOSING THE RIGHT COURSE FOR YOU
            </a>
            <a href="#" className="underline">
              CHOOSING WHERE TO LIVE
            </a>
            <a href="#" className="underline">
              APPLICATION TOOLKIT
            </a>
          </div>
        </div>

        {/* Section 4 - Pick location */}
        <div className="p-6 md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <Image
              src="/apply-location.jpg"
              alt="Campus"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2">
            <h2 className="text-2xl font-bold">PICK THE PERFECT LOCATION</h2>
            <p>
              Choosing where to study is about finding a place that feels right
              for you...
            </p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-red-700 font-semibold">
                VIRTUAL TOURS
              </a>
              <a href="#" className="text-red-700 font-semibold">
                UNIVERSITY OPEN DAYS
              </a>
            </div>
          </div>
        </div>

        {/* Section 5 - Money */}
        <div className="bg-indigo-900 text-white p-6 md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <Image
              src="/apply-finance.jpg"
              alt="Finance help"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">DON’T LET MONEY GET IN THE WAY</h2>
            <p>
              University is a big investment and searching for money advice can
              be overwhelming...
            </p>
            <div className="space-y-2">
              <a href="#" className="underline">
                GET SUPPORT WITH YOUR FINANCES
              </a>
              <a href="#" className="underline">
                MANAGING YOUR MONEY
              </a>
            </div>
          </div>
        </div>

        {/* Section 6 - International Admissions */}
        <div className="bg-gray-900 text-white p-6 text-center">
          <h2 className="text-2xl font-bold">INTERNATIONAL ADMISSIONS</h2>
          <p className="mt-2">
            We work closely with a trusted network of approved agents who are
            here to support you with...
          </p>
          <button className="mt-4 bg-red-700 px-4 py-2 rounded text-white">
            INTERNATIONAL AGENT PORTAL
          </button>
        </div>

        {/* Section 7 - Terms */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold">TERMS AND POLICIES</h2>
          <p className="mt-2">
            Please read the Application Terms and Conditions for UK students or
            International students before you accept your offer.
          </p>
          <div className="mt-4 flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-2 md:space-y-0">
            <a href="#" className="underline">
              ADMISSIONS POLICY
            </a>
            <a href="#" className="underline">
              HOME TERMS AND CONDITIONS
            </a>
            <a href="#" className="underline">
              INTERNATIONAL TERMS AND CONDITIONS
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Starterpage;

