import { Button } from "@/components/ui/button";

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
        { title: "Our Locations", href: "/location/" },
        { title: "Our Campuses", href: "/our-campuses/" },
        { title: "Virtual Tours", href: "/tours/" },
        { title: "Venues and Facilities Hire", href: "/business/venues-and-facilities-hire/" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { title: "Staff Portal", href: "https://universityofsouthwales.sharepoint.com/sites/staff" },
        { title: "Student Portal", href: "https://unilife.southwales.ac.uk/dashboard/home" },
        { title: "Research Explorer", href: "https://pure.southwales.ac.uk/en/" },
        { title: "Term Dates", href: "/about/term-dates/" },
        { title: "Contact Us", href: "/contact-us/" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/UniSouthWales" },
    { name: "Instagram", href: "https://instagram.com/unisouthwales" },
    { name: "Twitter", href: "https://twitter.com/UniSouthWales" },
    { name: "YouTube", href: "https://youtube.com/UniSouthWales" }
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xs">{social.name[0]}</span>
                </a>
              ))}
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
              <div className="w-full h-32 bg-gray-700 rounded flex items-center justify-center mb-4">
                <span className="text-gray-400">Map of Wales</span>
              </div>
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
            <p className="text-gray-400 text-sm">
              © University of South Wales. The University of South Wales is a registered charity.
              Registration No.1140312
            </p>
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
