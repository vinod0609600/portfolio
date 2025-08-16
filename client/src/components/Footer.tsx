import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/vinod0609600",
      icon: Github,
      label: "GitHub",
      testId: "footer-github",
    },
    {
      href: "https://www.linkedin.com/in/vinod-sadula-5753402bb/",
      icon: Linkedin,
      label: "LinkedIn",
      testId: "footer-linkedin",
    },
    {
      href: "mailto:sadulavinod06@gmail.com",
      icon: Mail,
      label: "Email",
      testId: "footer-email",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text" data-testid="footer-name">Sadula Vinod</h3>
            <p className="text-slate-400 leading-relaxed" data-testid="footer-description">
              AI Engineer & Full-Stack Developer passionate about creating innovative solutions that make a difference.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-title">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-400 hover:text-white transition-colors duration-200 text-left"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-connect-title">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.testId}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    data-testid={link.testId}
                    aria-label={link.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400" data-testid="footer-copyright">
            © {currentYear} Sadula Vinod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
