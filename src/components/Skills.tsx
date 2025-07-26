import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "React.js", level: 50, category: "Frontend" },
    { name: "Node.js", level: 30, category: "Backend" },
    { name: "Python", level: 60, category: "Programming" },
    { name: "Java", level: 85, category: "Programming" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "SQL", level: 75, category: "Database" },
    { name: "Git", level: 85, category: "Tools" },
  ];

  const technologies = [
    "React", "Node.js","JavaScript", "Python", "Java", "C++","HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Git",
    "GitHub", "VS Code", "Docker", "AWS"
  ];

  const categories = {
    "Programming": technicalSkills.filter(skill => skill.category === "Programming"),
    "Frontend": technicalSkills.filter(skill => skill.category === "Frontend"),
    "Backend": technicalSkills.filter(skill => skill.category === "Backend"),
    "Database": technicalSkills.filter(skill => skill.category === "Database"),
    "Tools": technicalSkills.filter(skill => skill.category === "Tools")
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Progress Bars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(categories).map(([categoryName, skills]) => (
              <Card key={categoryName} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {categoryName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Strong analytical skills with experience in data structures, algorithms, and system design
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">Project Management</h4>
                <p className="text-sm text-muted-foreground">
                  Experience with Agile methodologies, version control, and collaborative development workflows
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 text-center">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Committed to staying updated with latest technologies and industry best practices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;