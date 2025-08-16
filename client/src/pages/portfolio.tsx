import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
          <ResumeSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;
