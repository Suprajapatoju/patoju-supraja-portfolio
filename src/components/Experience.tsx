import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'AI & ML Intern',
      company: 'APSSDC',
      location: 'Online',
      duration: 'Jun 2024 - Jul 2024',
      description: [
        'Worked on an Employee Burnout Prediction model using regression techniques',
        'Gained insights into ML workflows and practical applications in organizational health analytics',
        'Collaborated with team members to analyze fatigue and workload metrics',
        'Implemented data preprocessing and model evaluation strategies'
      ],
      type: 'Internship',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey and hands-on experience in the tech industry
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className="md:ml-16 card-glow border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="bg-gradient-primary p-2 rounded-lg">
                            <Briefcase className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Future aspirations */}
        <div className="mt-16 text-center">
          <Card className="card-glow border-secondary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Looking Forward</h3>
              <p className="text-muted-foreground leading-relaxed">
                Actively seeking opportunities to expand my expertise in AI/ML, web development, 
                and software engineering. Eager to contribute to innovative projects and collaborate 
                with talented teams in the tech industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;