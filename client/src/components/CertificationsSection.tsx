import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  BarChart3, 
  Globe, 
  Table, 
  Brain,
  Award
} from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: "Programming Essentials in Python",
      provider: "CISCO",
      icon: Code,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms using Java",
      provider: "NPTEL",
      icon: Code,
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    },
    {
      id: 3,
      title: "Data Analytics Essentials",
      provider: "CISCO",
      icon: BarChart3,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    },
    {
      id: 4,
      title: "Web Fundamentals",
      provider: "IBM",
      icon: Globe,
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
    },
    {
      id: 5,
      title: "Data Structures & Algorithms",
      provider: "SMART INTERVIEWS",
      icon: Table,
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
    },
    {
      id: 6,
      title: "Oracle Cloud AI Foundation",
      provider: "Oracle",
      icon: Brain,
      color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="certifications-title">Certifications</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" data-testid="certifications-subtitle">
            Professional certifications and courses that showcase my continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={cert.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card-3d-effect"
                data-testid={`certification-${cert.id}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${cert.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-sm leading-tight" data-testid={`cert-title-${cert.id}`}>
                      {cert.title}
                    </h3>
                    <Badge variant="outline" className="mt-1 text-xs" data-testid={`cert-provider-${cert.id}`}>
                      {cert.provider}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
