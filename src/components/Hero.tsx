import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["B.Tech Graduate", "Software Developer", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(220 25% 5% / 0.95), hsl(220 20% 10% / 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Hello, I'm{' '}
              <span className="block mt-2">
                ADABALA ABHIRAM
              </span>
            </h1>
            
            {/* Animated Role Text */}
            <div className="h-12 mb-6">
              <p className="text-2xl md:text-3xl text-muted-foreground">
                <span className="text-primary font-semibold animate-glow">
                  {roles[currentRole]}
                </span>
              </p>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and building impactful software. 
              Ready to contribute to cutting-edge projects and grow in the tech industry.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow transition-all duration-300 hover:shadow-glow hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://github.com/abhiadabala" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhiram-adabala" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="Resume"
            >
              <FileText className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;