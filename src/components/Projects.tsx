import { ExternalLink, Github, Brain, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Student Counselling System',
      description: 'A comprehensive Java-based application using Core Java, JDBC, and MySQL to efficiently manage student counseling records. Features include student registration, counselor assignment, session scheduling, and detailed reporting.',
      technologies: ['Java', 'JDBC', 'MySQL', 'Swing GUI'],
      icon: Users,
      gradient: 'bg-gradient-primary',
      github: 'https://github.com/Suprajapatoju/Student-Counselling-System',
      demo: '#',
      highlights: ['Database Management', 'GUI Interface', 'Session Tracking']
    },
    {
      title: 'AI-Powered Heart Disease Risk Assessment',
      description: 'An intelligent chatbot leveraging BioMistral7B and PubMedBert models to provide accurate medical Q&A and heart disease risk assessment. Combines natural language processing with medical expertise.',
      technologies: ['Python', 'BioMistral7B', 'PubMedBert', 'NLP', 'AI/ML'],
      icon: Heart,
      gradient: 'bg-gradient-secondary',
      github: 'https://github.com/Suprajapatoju/MedicalChatBot',
      demo: '#',
      highlights: ['Medical AI', 'NLP Processing', 'Risk Assessment']
    },
    {
      title: 'Employee Burnout Prediction',
      description: 'A regression-based machine learning model that analyzes fatigue and workload metrics to predict employee burnout. Helps organizations proactively address workplace wellness and productivity.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Regression Analysis'],
      icon: Brain,
      gradient: 'bg-gradient-primary',
      github: 'https://github.com/Suprajapatoju/Employee-Burnout-Prediction',
      demo: '#',
      highlights: ['Predictive Analytics', 'Workplace Wellness', 'Data Analysis']
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my portfolio of technical projects showcasing innovation and problem-solving skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="card-glow border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${project.gradient} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-2 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-primary/10 text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="card-glow border-secondary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary">View More Projects</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Check out my GitHub for the latest updates and contributions.
              </p>
              <Button className="bg-gradient-secondary hover:opacity-90 text-accent-foreground" asChild>
                <a href="https://github.com/Suprajapatoju" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;