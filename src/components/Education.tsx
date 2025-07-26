import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Swarnandhra Institute of Engineering & Technology",
      location: "Narsapur, Andhra Pradesh",
      duration: "2019 - 2023",
      grade: "6.58/10 CGPA",
      description: "Comprehensive program covering software engineering, data structures, algorithms, database management, and web development. Strong focus on practical application and industry-relevant skills.",
      highlights: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Web Development",
        "Computer Networks",
        "Operating Systems"
      ]
    },
    {
      degree: "Higher Secondary Certificate",
      field: "MPC",
      institution: "Sri Chaitanya Junior college",
      location: "Bhimavaram, Andhra Pradesh",
      duration: "2017 - 2019",
      grade: "6.5/10 CGPA",
      description: "Focused on Physics, Chemistry, and Mathematics.",
      highlights: [
        "Physics",
        "Chemistry", 
        "Mathematics"
      ]
    },
    {
      degree: "School Secondary Certificate",
      field: "SSC",
      institution: "Z.P.HIGH SCHOOL",
      location: "Bhimavaram, Andhra Pradesh",
      duration: "2016 - 2017",
      grade: "7.2/10 CGPA",
      description: "Focused on Physics, Chemistry, Social and Mathematics.",
      highlights: [
        "Physics",
        "Chemistry", 
        "Mathematics",
        "Social Studies"
      ]
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Recognized for academic excellence with CGPA above 6.5",
      icon: Award
    },
    {
      title: "Best Project Award",
      description: "Won first place in final year project competition",
      icon: GraduationCap
    },
    {
      title: "Coding Competition",
      description: "Top 3 finish in inter-college programming contest",
      icon: BookOpen
    }
  ];

  const certifications = [
    "Full Stack Web Development - Online Course",
    "React.js Development Certification",
    "Python Programming Certificate",
    "AWS Cloud Fundamentals",
    "Git & GitHub Essentials"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Academic foundation and continuous learning journey in computer science and technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="text-lg text-muted-foreground">
                        {edu.field}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{edu.institution}</h4>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-accent">{edu.grade}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold mb-3">Key Subjects:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((subject, subIndex) => (
                        <Badge
                          key={subIndex}
                          variant="secondary"
                          className="bg-secondary/50"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">
                Academic Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <achievement.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">
                Certifications & Courses
              </h3>
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-gradient-card border-border/50 mt-6">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Actively pursuing new technologies and skills through online courses, 
                    workshops, and self-directed learning to stay current with industry trends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;