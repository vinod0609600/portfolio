import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Tag } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Python", percentage: 90 },
    { name: "Java", percentage: 90 },
    { name: "AI Tools", percentage: 90 },
    { name: "Machine Learning", percentage: 80 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "TensorFlow", percentage: 75 },
  ];

  const technologies = [
    "React.js", "Node.js", "TensorFlow", "PyTorch", "MongoDB", "Express.js",
    "HTML", "CSS", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Firebase"
  ];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" data-testid="about-subtitle">
            Learn more about my background, education, and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6" data-testid="education-title">Education</h3>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 card-3d-effect" data-testid="education-btech">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg shadow-inner">
                  <GraduationCap className="text-primary-600 dark:text-primary-400 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">B.Tech in Computer Science Engineering</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Marri Laxman Reddy Institute of Technology, Hyderabad</p>
                  <p className="text-slate-600 dark:text-slate-400">2023 - Present</p>
                  <div className="mt-2">
                    <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-medium border-emerald-200 dark:border-emerald-800 shadow-sm">
                      CGPA: 9.0/10
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 card-3d-effect" data-testid="education-diploma">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg shadow-inner">
                  <Tag className="text-primary-600 dark:text-primary-400 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Diploma in Mining Engineering</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Govt Polytechnic-Kothagudem</p>
                  <p className="text-slate-600 dark:text-slate-400">2020 - 2023</p>
                  <div className="mt-2">
                    <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-medium border-emerald-200 dark:border-emerald-800 shadow-sm">
                      CGPA: 9.8/10
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="skills-title">Technical Skills</h3>
            
            <div className="space-y-6">
              {/* Programming Languages */}
              <div ref={skillsRef}>
                <h4 className="font-semibold mb-3 text-slate-700 dark:text-slate-300">Programming Languages</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase()}`} className="p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.percentage}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.percentage} 
                          className="h-2 overflow-hidden progress-glow"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Technologies */}
              <div className="p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-slate-700 dark:text-slate-300">Frameworks & Technologies</h4>
                <div className="flex flex-wrap gap-2" data-testid="technologies-list">
                  {technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm"
                      data-testid={`tech-${tech.toLowerCase().replace('.', '')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
