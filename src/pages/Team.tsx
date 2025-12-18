import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Nabaraj Khanal",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Leading Concern Nepal with strategic vision and extensive experience in political consulting and organizational management.",
    expertise: ["Strategic Leadership", "Political Consulting", "Business Development"],
    email: "nabaraj@concernnepal.org",
    linkedin: "#"
  },
  {
    name: "Narayan Panthi",
    role: "Research and Data Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Expert in research methodologies and data-driven strategies, providing insights that power informed decision-making.",
    expertise: ["Research Methodology", "Data Analysis", "Strategic Planning"],
    email: "narayan@concernnepal.org",
    linkedin: "#"
  },
  {
    name: "Rajan Bhandari",
    role: "Researcher",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Dedicated researcher with expertise in political and social research, delivering comprehensive analysis and insights.",
    expertise: ["Political Research", "Social Analysis", "Report Writing"],
    email: "rajan@concernnepal.org",
    linkedin: "#"
  },
  {
    name: "Roshan Khanal",
    role: "Technology and Digital Operations Manager",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    bio: "Managing digital operations and technology infrastructure, ensuring seamless technical solutions for all projects.",
    expertise: ["Digital Operations", "Technology Management", "Data Systems"],
    email: "roshan@concernnepal.org",
    linkedin: "#"
  }
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Team
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Meet the dedicated professionals driving political research and consulting excellence in Nepal
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our People</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Skilled professionals committed to delivering excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-secondary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about political research and governance
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Team;