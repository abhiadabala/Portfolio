import { Code, Lightbulb, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Strong foundation in programming languages and software development principles"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical mindset with ability to break down complex problems into manageable solutions"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on continuous learning and achieving measurable results in every project"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent communication skills and experience working in collaborative environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driven by passion for technology and innovation, I'm ready to make an impact in the software industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Passionate B.Tech Graduate Ready to Innovate
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a recent B.Tech graduate, I bring fresh perspectives and cutting-edge knowledge 
                  to the software development field. My academic journey has equipped me with a solid 
                  foundation in computer science principles and modern programming paradigms.
                </p>
                
                <p>
                  During my studies, I've worked on diverse projects ranging from web applications 
                  to mobile development, always focusing on writing clean, efficient code and 
                  following best practices. I'm particularly passionate about full-stack development 
                  and emerging technologies.
                </p>
                
                <p>
                  I thrive in collaborative environments and am eager to contribute to teams that 
                  value innovation, quality, and continuous learning. My goal is to grow into a 
                  skilled software engineer while making meaningful contributions to impactful projects.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">9+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <highlight.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;