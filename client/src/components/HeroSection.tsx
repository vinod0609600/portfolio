import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = () => {
    const element = document.getElementById("resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
              Hi, I'm <span className="gradient-text">Sadula Vinod</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6" data-testid="hero-subtitle">
              AI Engineer & Full-Stack Developer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed" data-testid="hero-description">
              Aspiring AI Engineer and full-stack web developer with hands-on experience in machine learning, web technologies, and backend development. Eager to leverage technical skills and AI & ML foundation to contribute to innovative projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToResume}
                className="border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-medium"
                data-testid="button-resume"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://github.com/vinod0609600" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                data-testid="link-github"
              >
                <Github className="w-8 h-8" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vinod-sadula-5753402bb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a 
                href="mailto:sadulavinod06@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                data-testid="link-email"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-80 h-80">
              {/* Outer running border with glow (circular) */}
              <div className="absolute inset-0 w-[calc(100%+12px)] h-[calc(100%+12px)] -left-[6px] -top-[6px] rounded-full">
                <div 
                  className="w-full h-full border-2 border-transparent rounded-full" 
                  style={{
                    background: 'linear-gradient(90deg, transparent, transparent) padding-box, linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.8)) border-box',
                    backgroundSize: '200% 100%',
                    animation: 'borderLine 8s linear infinite, glowPulse 3s ease-in-out infinite'
                  }}
                ></div>
              </div>
              
              {/* Inner running border with reverse direction (circular) */}
              <div className="absolute inset-0 w-[calc(100%+24px)] h-[calc(100%+24px)] -left-[12px] -top-[12px] rounded-full">
                <div 
                  className="w-full h-full border-2 border-transparent rounded-full" 
                  style={{
                    background: 'linear-gradient(90deg, transparent, transparent) padding-box, linear-gradient(90deg, rgba(16, 185, 129, 0.6), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6)) border-box',
                    backgroundSize: '200% 100%',
                    animation: 'borderLineReverse 12s linear infinite'
                  }}
                ></div>
              </div>
              
              <img 
                src="/assets/profile-photo.jpg" 
                alt="Sadula Vinod - Professional headshot" 
                className="relative w-full h-full object-cover rounded-full shadow-2xl z-10"
                data-testid="img-profile"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center animate-bounce-slow z-20">
                <Code className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
