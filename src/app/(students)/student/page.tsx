"use client";

import Image from "next/image";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Event Attendance Management System",
    category: "Cyber-Physical Systems Projects",
    image: "/project.png", // replace with actual image
  },
  {
    id: 2,
    title: "AI Powered Knowledge Management System",
    category: "Undergraduate Research Projects",
    image: "/project.png",
  },
  {
    id: 3,
    title: "Keyboard for Visually Impaired",
    category: "Software Systems Projects",
    image: "/project.png",
  },
  {
    id: 4,
    title: "Baby Development Tracking System Mobileapplication",
    category: "Software Constructions Projects (CO225)",
    image: "/project.png",
  },
];

// Profile Card
const ProfileCard = () => (
  <div className="flex flex-col items-center gap-2">
    <Image
      src="/smiling_female_student.jpg" // replace with actual photo
      alt="Student"
      width={150}
      height={150}
      className="rounded-md object-cover"
    />
    <h2 className="text-xl font-semibold">Ravindu</h2>
    <div className="flex gap-3 text-2xl text-gray-700">
      <a href="#"><FaGithub /></a>
      <a href="#"><FaFacebook /></a>
    </div>
  </div>
);

// Student Info
const StudentInfo = () => (
  <div className="bg-white shadow rounded-md p-4 w-full">
    <p><span className="font-semibold">Full Name :</span><br />R.D.A.Nayana</p>
    <p className="mt-2"><span className="font-semibold">Registration Number</span><br />123456</p>
    <p className="mt-2"><span className="font-semibold">Natinal Identity Card</span><br />20008988888</p>
    <p className="mt-2"><span className="font-semibold">Passport ID</span><br />20008988888</p>
    <p className="mt-2"><span className="font-semibold">Department</span><br />Finance</p>
    <p className="mt-2"><span className="font-semibold">Email</span><br />
      <a href="mailto:e19004@eng.pdn.ac.lk" className="text-blue-600">dsatf@gmail.com</a>
    </p>
    <p className="mt-2"><span className="font-semibold">Current Affiliation</span><br />
      Teleborg Group
    </p>
  </div>
);

// Project Card
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-3 bg-white shadow rounded-md p-3">
    <div className="w-16 h-16 flex-shrink-0">
      <Image src={project.image} alt={project.title} width={64} height={64} />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.category}</p>
    </div>
    <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50">
      View
    </button>
  </div>
);

// Projects Section
const ProjectsSection = () => (
  <div className="bg-white shadow rounded-md p-4 w-full">
    <h2 className="text-lg font-semibold mb-3">Projects</h2>
    <div className="flex flex-col gap-3">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  </div>
);

const StudentPage = () => {
  return (
    <div className="min-h-screen widht-full">
      <Header/>
      <div className="min-h-screen bg-gray-50 p-4 flex flex-col lg:flex-row gap-6">

      {/* Left Column */}
      <div className="flex flex-col items-center lg:w-1/4 gap-4">
        <ProfileCard />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 lg:w-3/4">
        <StudentInfo />
        <ProjectsSection />
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default StudentPage;

