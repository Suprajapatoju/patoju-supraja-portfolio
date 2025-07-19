import { Code, Database, Wrench, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'Python', 'MySQL'],
      gradient: 'bg-gradient-primary',
    },
    {
      title: 'Web Development',
      icon: Monitor,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      gradient: 'bg-gradient-secondary',
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['IntelliJ IDEA', 'VS Code', 'Jupyter Notebook', 'GitHub', 'Postman'],
      gradient: 'bg-gradient-primary',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'Database Design', 'JDBC'],
      gradient: 'bg-gradient-secondary',
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-glow border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;