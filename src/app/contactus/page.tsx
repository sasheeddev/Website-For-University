"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col">
      {/* CONTACT HEADER */}
      <section className="bg-[#85004B] text-white px-6 py-12 md:px-20 md:py-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CONTACT US</h1>
            <p className="text-sm md:text-base mb-4 leading-relaxed">
              Looking for more information? Here you will find contact
              information for a range of services who can give you the support
              you need.
            </p>

            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="underline uppercase font-semibold tracking-wide"
              >
                University Services A–Z
              </a>
              <a
                href="#"
                className="underline uppercase font-semibold tracking-wide"
              >
                Getting Here
              </a>
            </div>
          </div>

          {/* IMAGES */}
          <div className="flex md:flex-col gap-4 md:gap-6 md:w-1/2 justify-center md:justify-end">
            <img
              src="/contact-1.png"
              alt="Student 1"
              className="rounded-lg w-40 md:w-60"
            />
            <img
              src="/contact-2.png"
              alt="Students chatting"
              className="rounded-lg w-40 md:w-72"
            />
          </div>
        </div>
      </section>

      {/* COURSE ENQUIRIES */}
      <section className="bg-white px-6 py-12 md:px-20 md:py-20">
        <h2 className="text-3xl font-bold mb-8">COURSE ENQUIRIES</h2>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Contact Box */}
          <div className="bg-green-800 text-white rounded-b-3xl p-8 flex flex-col md:flex-row gap-12 md:w-3/5">
            {/* Telephone */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Telephone</h3>
              </div>
              <p className="text-sm mb-2 font-medium">UK Students</p>
              <p className="mb-4">03455 76 77 78</p>

              <p className="text-sm mb-2 font-medium">
                International and EU Students
              </p>
              <p>01443 654450</p>
            </div>

            {/* Email */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <p className="text-sm mb-2 font-medium">UK Students</p>
              <p className="mb-4">enquiries@southwales.ac.uk</p>

              <p className="text-sm mb-2 font-medium">
                International and EU Students
              </p>
              <p>uswglobal@southwales.ac.uk</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 md:w-1/3">
            <button className="bg-black text-white py-3 font-semibold hover:bg-gray-900">
              TALK TO US ON LIVE CHAT
            </button>
            <button className="bg-black text-white py-3 font-semibold hover:bg-gray-900">
              CHAT WITH STAFF AND STUDENTS
            </button>
            <button className="bg-black text-white py-3 font-semibold hover:bg-gray-900">
              MAKE AN ENQUIRY
            </button>
          </div>
        </div>
      </section>

      {/* APPLICATION ENQUIRIES */}
      <section className="bg-[#323C96] text-white px-6 py-12 md:px-20 md:py-20">
        <h2 className="text-3xl font-bold mb-10">APPLICATION ENQUIRIES</h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="bg-blue-100 text-black p-6 rounded-md flex-1">
            <h3 className="font-bold mb-2">UK Students</h3>
            <p>admissions@southwales.ac.uk</p>
          </div>

          <div className="bg-blue-100 text-black p-6 rounded-md flex-1">
            <h3 className="font-bold mb-2">International and EU Students</h3>
            <p>international.admissions@southwales.ac.uk</p>
          </div>
        </div>
      </section>
    </div>
  );
}
