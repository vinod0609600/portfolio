import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResumeSection = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real application, this would trigger an actual PDF download
    toast({
      title: "Resume Download",
      description: "Resume download functionality would be implemented here. This would trigger a PDF download of the resume.",
    });
  };

  return (
    <section id="resume" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <Download className="w-16 h-16 text-primary-600 dark:text-primary-400 mb-4 mx-auto" data-testid="resume-icon" />
            <h2 className="text-3xl font-bold mb-4" data-testid="resume-title">Download My Resume</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" data-testid="resume-description">
              Get a comprehensive overview of my skills, experience, and projects in a downloadable PDF format.
            </p>
          </div>
          
          <Button 
            onClick={handleDownload}
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            data-testid="button-download-resume"
          >
            <Download className="w-4 h-4 mr-3" />
            Download Resume (PDF)
          </Button>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4" data-testid="resume-updated">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
