import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Users,
  Heart,
  Target,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Research Analyst",
    department: "Research",
    location: "Kathmandu",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead quantitative and qualitative research projects, design survey methodologies, and produce comprehensive analytical reports on political and social issues.",
    responsibilities: [
      "Design and implement research methodologies",
      "Analyze complex datasets using statistical tools",
      "Produce research reports and policy briefs",
      "Mentor junior research staff",
      "Present findings to clients and stakeholders"
    ],
    requirements: [
      "Master's degree in Social Sciences, Statistics, or related field",
      "3-5 years of research experience",
      "Proficiency in SPSS, R, or similar tools",
      "Strong analytical and writing skills",
      "Experience in political or social research preferred"
    ]
  },
  {
    id: 2,
    title: "Campaign Strategist",
    department: "Political Consulting",
    location: "Kathmandu",
    type: "Full-time",
    experience: "2-4 years",
    description: "Develop and execute comprehensive political campaign strategies, including voter outreach, messaging, and digital campaigns.",
    responsibilities: [
      "Develop campaign strategies and action plans",
      "Coordinate field operations and voter outreach",
      "Create compelling campaign messaging",
      "Manage digital campaign initiatives",
      "Analyze campaign performance metrics"
    ],
    requirements: [
      "Bachelor's degree in Political Science, Communications, or related field",
      "2-4 years of campaign or political experience",
      "Strong understanding of Nepal's political landscape",
      "Excellent communication and interpersonal skills",
      "Willingness to travel during campaign periods"
    ]
  },
  {
    id: 3,
    title: "GIS & Data Visualization Specialist",
    department: "Technology",
    location: "Kathmandu",
    type: "Full-time",
    experience: "2-3 years",
    description: "Create spatial analysis solutions and interactive data visualizations for political research and campaign planning.",
    responsibilities: [
      "Develop GIS-based electoral maps and analysis",
      "Create interactive data dashboards",
      "Process and analyze spatial data",
      "Support research team with visualization needs",
      "Maintain geospatial databases"
    ],
    requirements: [
      "Bachelor's degree in GIS, Geography, or related field",
      "Proficiency in ArcGIS, QGIS, and visualization tools",
      "Experience with Python or R for data processing",
      "Knowledge of Nepal's administrative geography",
      "Strong attention to detail"
    ]
  },
  {
    id: 4,
    title: "Communications Officer",
    department: "Media & PR",
    location: "Kathmandu",
    type: "Full-time",
    experience: "1-3 years",
    description: "Manage organizational communications, media relations, and content creation across all platforms.",
    responsibilities: [
      "Draft press releases and media statements",
      "Manage social media channels",
      "Coordinate media coverage and interviews",
      "Create content for website and publications",
      "Build relationships with journalists"
    ],
    requirements: [
      "Bachelor's degree in Journalism, Communications, or related field",
      "1-3 years of PR or communications experience",
      "Excellent writing skills in English and Nepali",
      "Experience with social media management",
      "Media contacts preferred"
    ]
  }
];

const internships = [
  {
    id: 1,
    title: "Research Intern",
    duration: "3-6 months",
    stipend: "Paid",
    description: "Support research projects through data collection, analysis, and report writing."
  },
  {
    id: 2,
    title: "Communications Intern",
    duration: "3-6 months",
    stipend: "Paid",
    description: "Assist with content creation, social media management, and media monitoring."
  },
  {
    id: 3,
    title: "Campaign Support Intern",
    duration: "Project-based",
    stipend: "Paid",
    description: "Support political campaign operations during election periods."
  }
];

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage for you and your family" },
  { icon: GraduationCap, title: "Learning & Development", description: "Professional development opportunities and training programs" },
  { icon: Users, title: "Collaborative Culture", description: "Work with passionate professionals in a supportive environment" },
  { icon: Target, title: "Impactful Work", description: "Contribute to meaningful change in Nepal's political landscape" }
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. We'll review your application and get back to you soon."
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Careers at Concern Nepal
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join our team and make a meaningful impact on Nepal's political landscape through research and consulting
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Why Join Us</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Build Your Career With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Concern Nepal, we offer more than just a job – we offer the opportunity to shape the future of governance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Opportunities</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the right fit for your skills and aspirations
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="flex items-center text-sm text-muted-foreground">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">{job.experience}</Badge>
                      {expandedJob === job.id ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                {expandedJob === job.id && (
                  <CardContent className="border-t">
                    <p className="text-muted-foreground mb-6">{job.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button
                        onClick={() => {
                          setSelectedPosition(job.title);
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Students & Graduates</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Internship Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gain hands-on experience in political research and consulting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {internships.map((intern) => (
              <Card key={intern.id}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{intern.title}</h3>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline">{intern.duration}</Badge>
                    <Badge variant="secondary">{intern.stipend}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{intern.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedPosition(`${intern.title} (Internship)`);
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Apply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Apply</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">Submit Your Application</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 5 business days
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For *</Label>
                    <Input
                      id="position"
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      placeholder="Select from job listings or type position"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input id="experience" placeholder="e.g., 3 years" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV Link *</Label>
                    <Input id="resume" placeholder="Google Drive or Dropbox link" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      rows={5}
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
