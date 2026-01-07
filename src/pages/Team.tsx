import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Loader2 } from "lucide-react";
import { teamApi, ApiTeamMember } from "@/lib/api";

const Team = () => {
  const { data: teamMembers, isLoading, error } = useQuery({
    queryKey: ['team'],
    queryFn: teamApi.getAll,
  });

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

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load team members. Please try again later.</p>
            </div>
          )}

          {/* Team Grid */}
          {!isLoading && teamMembers && (
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member: ApiTeamMember) => (
                <Card key={member._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-secondary font-medium mb-3">{member.position}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {member.linkedin_link && (
                            <a href={member.linkedin_link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                              <Mail className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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
