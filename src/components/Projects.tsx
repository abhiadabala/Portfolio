import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    /*{
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, shopping cart, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Web",
      github: "#",
      live: "#",
      icon: Globe
    },
    {
      title: "Task Management App",
      description: "Responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Intuitive design for enhanced productivity.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "Web",
      github: "#",
      live: "#",
      icon: Code
    },
    {
      title: "Mobile Weather App",
      description: "Cross-platform mobile application providing real-time weather data, forecasts, and location-based alerts. Clean UI with smooth animations and offline capabilities.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      technologies: ["React Native", "JavaScript", "Weather API", "Redux"],
      category: "Mobile",
      github: "#",
      live: "#",
      icon: Smartphone
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics with real-time charts, filtering options, and export functionality. Designed for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js"],
      category: "Data",
      github: "#",
      live: "#",
      icon: Database
    },
    {
      title: "Social Media Platform",
      description: "Social networking application with user profiles, posts, comments, real-time messaging, and content sharing. Focus on user engagement and community building.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
      technologies: ["MERN Stack", "Socket.io", "Cloudinary", "JWT"],
      category: "Web",
      github: "#",
      live: "#",
      icon: Globe
    },
    {
      title: "Machine Learning Classifier",
      description: "Image classification system using deep learning techniques. Trained model with high accuracy for object detection and classification with web interface.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
      category: "ML",
      github: "#",
      live: "#",
      icon: Code
    }*/
  ];

  const categories = ['All', 'Web', 'Mobile', 'Data', 'ML'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical skills and creative problem-solving through diverse projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 ${
                  filter === category 
                    ? "bg-primary hover:bg-primary-glow shadow-glow" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 backdrop-blur-sm">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary-glow transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow transition-all duration-300 hover:shadow-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;