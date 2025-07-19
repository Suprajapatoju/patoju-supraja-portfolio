import { GraduationCap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  return <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover my journey in Computer Science Engineering and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">I'm a dedicated Computer Science and Engineering student at Vignan's Institute of Engineering for Women, with a strong foundation in Full Stack Development, Java, and core Computer Science principles. I am passionate about applying my knowledge to real-world challenges and building impactful software solutions.

With hands-on experience in Java, JavaScript, React.js, Node.js, and Data Structures and Algorithms, I’ve worked on academic and personal projects that reflect my ability to solve problems efficiently and think analytically. I’m particularly interested in Machine Learning, AI, and AWS, and I am actively expanding my skills in these domains through self-driven learning and internships.

Beyond technical abilities, I possess strong communication, leadership, and team management skills, having successfully led project teams and organized tech-related events. I enjoy collaborating with others, sharing knowledge, and contributing to innovative ideas that create value.

Driven by curiosity and a growth mindset, I continuously strive to improve my expertise, explore new technologies, and become a well-rounded software engineer capable of adapting to dynamic industry needs.</p>
            </div>
            
            <div>
              <p className="text-muted-foreground leading-relaxed">
            </p>
            </div>

            <Button className="bg-gradient-secondary hover:opacity-90 text-accent-foreground">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
            
            <Card className="card-glow border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">B.Tech in Computer Science Engineering</h4>
                    <p className="text-primary font-medium">Vignan's Institute of Engineering for Women</p>
                    <p className="text-muted-foreground">2022 - Present</p>
                    <div className="mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                        CGPA: 8.82
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-secondary p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">Senior Secondary (MPC)</h4>
                    <p className="text-secondary font-medium">Sri Chaitanya Jr. College</p>
                    <p className="text-muted-foreground">2020 - 2022</p>
                    <div className="mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary">
                        CGPA: 10.0
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;