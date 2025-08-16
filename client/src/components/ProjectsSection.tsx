import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Parkinson's Disease Detection System",
      description: "Real-time system detecting Parkinson's disease using voice inputs with 22 extracted voice features. Built with Python and machine learning, featuring a Streamlit web application for user interaction.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "VR Anatomy Exploration Using AI",
      description: "Interactive VR platform for human anatomy learning with AI-driven object interaction and real-time 3D model rendering. Built using Unity engine with advanced VR capabilities.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Unity", "VR", "AI", "3D Modeling"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" data-testid="projects-subtitle">
            A showcase of my recent work combining AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-3d-effect"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4" data-testid={`project-technologies-${project.id}`}>
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`project-tech-${tech.toLowerCase().replace(' ', '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    data-testid={`project-github-${project.id}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    data-testid={`project-live-${project.id}`}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.id === 1 ? "Live Demo" : "Demo Video"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Button asChild className="bg-primary-600 hover:bg-primary-700" data-testid="button-more-projects">
            <a href="https://github.com/vinod0609600" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
