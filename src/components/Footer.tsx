import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube , FaLinkedinIn, FaTiktok } from "react-icons/fa"; 

export function Footer() {
  const footerSections = [
    {
      title: "About Us",
      links: [
        { title: "Our Structure", href: "/about/our-structure/" },
        { title: "University Services", href: "/services/" },
        { title: "Schools and Colleges", href: "/about/schools-and-colleges/" },
        { title: "Job Vacancies", href: "/jobs/" },
        { title: "News", href: "/news/" }

      ]
    },
    {
      title: "Visit Us",
      links: [
        { title: "Our Locations", href: "https://www.google.com/maps/place/University+of+Colombo/@6.9000202,79.8562189,1174m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ae2596309dfdd3f:0x45a4b0e7834ac0d4!8m2!3d6.9000149!4d79.8587938!16s%2Fm%2F0crc__h?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" },
        { title: "Our Campuses", href: "/our-campuses/" },
        { title: "Virtual Tours", href: "/tours/" },
        { title: "Venues and Facilities Hire", href: "/business/venues-and-facilities-hire/" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { title: "Staff Portal", href: "/" },
        { title: "Student Portal", href: "" },
        { title: "Research Explorer", href: "https://pure.southwales.ac.uk/en/" },
        { title: "Term Dates", href: "/about/term-dates/" },
        { title: "Contact Us", href: "/contactus" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/Iusscampus" },
    { name: "Instagram", href: "https://instagram.com/unisouthwales" },
    { name: "Twitter", href: "https://twitter.com/UniSouthWales" },
    { name: "YouTube", href: "https://www.youtube.com/@iuss_lk" } ,
    { name: "LinkedIn", href: "https://www.linkedin.com/company/iuss-campus/" },
    { name: "TikTok", href: "https://www.tiktok.com/@iuss_campus?_t=ZS-908eMYSkC1A&_r=1" }
    
  ];

  const legalLinks = [
    { title: "Accessibility", href: "/accessibility/" },
    { title: "Modern Slavery Statement", href: "/modern-slavery-statement/" },
    { title: "Freedom of Information Policy", href: "/freedom-of-information/" },
    { title: "Privacy Policy", href: "/privacy-policy/" },
    { title: "Terms and Conditions", href: "/terms-and-conditions/" }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Navigation */}
        <div className="border-b border-gray-700 pb-8 mb-12">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <a href="/courses/" className="hover:text-gray-300">Courses</a>
            <a href="/apply/" className="hover:text-gray-300">Apply</a>
            <a href="/student-life/" className="hover:text-gray-300">Student Life</a>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-6">
            <span className="text-gray-300">Find us on social</span>
            <div className="flex space-x-4">
               {socialLinks.map((social) => {
                   const icons: Record<string, JSX.Element> = {
                   Facebook: <FaFacebookF size={16} />,
                   Instagram: <FaInstagram size={16} />,
                   Twitter: <FaTwitter size={16} />,
                   YouTube: <FaYoutube size={16} />,
                   LinkedIn: <FaLinkedinIn size={16} />,
                   TikTok: <FaTiktok size={16} />,
               };

              return (
                <a
                   key={social.name}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                   aria-label={social.name}
                 >
                  {icons[social.name]}
                </a>
        );
        })}
         </div>
</div>
        
        </div>

        {/* Main Footer Links */}
        <div className="grid md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Map Section */}
         <div className="space-y-4">
           <div className="bg-gray-800 rounded-lg p-4 text-center">
           {/* Embedded Google Map */}
             <div className="w-full h-48 rounded overflow-hidden mb-4">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.808169831467!2d79.85621887499542!3d6.900020193082564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596309dfdd3f%3A0x45a4b0e7834ac0d4!2sUniversity%20of%20Colombo!5e0!3m2!1sen!2slk!4v1727998200000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
             </div>
             <span className="text-gray-300 text-sm">📍 University of Colombo</span>
          </div>

  <div className="text-center">
    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-2">
      <span className="text-black font-bold">QAA</span>
    </div>
    <p className="text-xs text-gray-400">UK Quality Assured</p>
  </div>
         </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-wrap justify-between items-center mb-6">
            
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {legalLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button
              variant="outline"
              size="sm"
              className="bg-usw-red text-white border-usw-red hover:bg-red-700"
            >
              Hide footer
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
