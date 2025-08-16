import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="experience-title">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" data-testid="experience-subtitle">
            My professional journey and hands-on experience in the tech industry
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-start space-x-6 pb-8" data-testid="experience-blockchain">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-lg">
                  <Code className="text-primary-600 dark:text-primary-400 w-6 h-6" />
                </div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg card-3d-effect">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold" data-testid="experience-role">Blockchain Developer</h3>
                  <Badge variant="secondary" className="w-fit" data-testid="experience-duration">3 months</Badge>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3" data-testid="experience-company">Diigo</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed" data-testid="experience-description">
                  Worked on decentralized Ethereum applications and learned comprehensive blockchain development processes. Gained hands-on experience with smart contracts, DeFi protocols, and blockchain architecture.
                </p>
                <div className="mt-4 flex flex-wrap gap-2" data-testid="experience-skills">
                  {["Ethereum", "Smart Contracts", "DeFi", "Web3"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs" data-testid={`skill-${skill.toLowerCase().replace(' ', '-')}`}>
                      {skill}
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

export default ExperienceSection;
