import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Twitter } from "lucide-react";

const leadershipTeam = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Founder & Executive Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Dr. Sharma brings over 20 years of experience in political research and policy analysis. He has advised multiple government bodies and international organizations on governance reforms.",
    expertise: ["Political Strategy", "Policy Analysis", "Governance Reform"],
    education: "Ph.D. in Political Science, Tribhuvan University",
    linkedin: "#",
    twitter: "#",
    email: "rajesh@concernnepal.org"
  },
  {
    name: "Sunita Thapa",
    role: "Director of Research",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Sunita leads our research division with expertise in quantitative and qualitative research methodologies. She has published extensively on electoral behavior and voter analysis.",
    expertise: ["Research Methodology", "Data Analysis", "Electoral Studies"],
    education: "M.A. in Sociology, Delhi University",
    linkedin: "#",
    twitter: "#",
    email: "sunita@concernnepal.org"
  },
  {
    name: "Bikram Rai",
    role: "Head of Political Consulting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Bikram has managed over 50 political campaigns across Nepal. His strategic insights have helped numerous candidates achieve electoral success through data-driven approaches.",
    expertise: ["Campaign Management", "Strategic Planning", "Political Communication"],
    education: "MBA, Kathmandu University",
    linkedin: "#",
    twitter: "#",
    email: "bikram@concernnepal.org"
  },
  {
    name: "Priya Adhikari",
    role: "Director of Leadership Academy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Priya designs and delivers our leadership training programs. She has trained over 500 emerging political leaders and is passionate about developing ethical leadership in Nepal.",
    expertise: ["Leadership Development", "Training Design", "Youth Engagement"],
    education: "M.Ed. in Educational Leadership, University of London",
    linkedin: "#",
    twitter: "#",
    email: "priya@concernnepal.org"
  }
];

const teamMembers = [
  {
    name: "Anil Gurung",
    role: "Senior Research Analyst",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    expertise: ["Survey Design", "Statistical Analysis"]
  },
  {
    name: "Maya Tamang",
    role: "GIS Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    expertise: ["Spatial Analysis", "Data Visualization"]
  },
  {
    name: "Rohan Shrestha",
    role: "Media & Communications Manager",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    expertise: ["Public Relations", "Content Strategy"]
  },
  {
    name: "Sita Karki",
    role: "Policy Analyst",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    expertise: ["Policy Research", "Stakeholder Engagement"]
  },
  {
    name: "Dipesh Maharjan",
    role: "Campaign Strategist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    expertise: ["Digital Campaigns", "Voter Outreach"]
  },
  {
    name: "Kamala Basnet",
    role: "Training Coordinator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    expertise: ["Program Management", "Facilitation"]
  }
];

const advisors = [
  {
    name: "Prof. Krishna Prasad Oli",
    role: "Senior Advisor - Governance",
    affiliation: "Former Secretary, Government of Nepal"
  },
  {
    name: "Dr. Meena Acharya",
    role: "Research Advisor",
    affiliation: "Tribhuvan University"
  },
  {
    name: "Hon. Narayan Khadka",
    role: "Strategic Advisor",
    affiliation: "Former Minister"
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

      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership brings decades of combined experience in political consulting, research, and governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((member, index) => (
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
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium">Education:</span> {member.education}
                      </p>
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
                        <a href={member.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="h-5 w-5" />
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

      {/* Team Members */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our People</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Team Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Skilled professionals committed to delivering excellence in every project
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Advisors</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Advisory Board</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Distinguished experts guiding our strategic direction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{advisor.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-2">{advisor.role}</p>
                  <p className="text-muted-foreground text-sm">{advisor.affiliation}</p>
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
