import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  MessageSquare,
  Target,
  Users,
} from "lucide-react";

const programFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Structured learning modules covering governance, leadership, communication, and policy analysis.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "One-on-one mentoring from experienced political leaders and governance experts.",
  },
  {
    icon: Target,
    title: "Practical Exercises",
    description: "Real-world simulations, case studies, and hands-on campaign exercises.",
  },
  {
    icon: MessageSquare,
    title: "Peer Network",
    description: "Build lasting connections with fellow emerging leaders from across Nepal.",
  },
];

const modules = [
  {
    number: "01",
    title: "Foundations of Democratic Governance",
    duration: "2 weeks",
    topics: ["Constitutional frameworks", "Democratic institutions", "Rule of law", "Citizen rights"],
  },
  {
    number: "02",
    title: "Political Leadership & Ethics",
    duration: "2 weeks",
    topics: ["Leadership styles", "Ethical decision-making", "Conflict resolution", "Public trust"],
  },
  {
    number: "03",
    title: "Public Communication & Media",
    duration: "2 weeks",
    topics: ["Public speaking", "Media relations", "Social media strategy", "Crisis communication"],
  },
  {
    number: "04",
    title: "Policy Development & Analysis",
    duration: "2 weeks",
    topics: ["Policy cycle", "Evidence-based policy", "Stakeholder engagement", "Implementation strategies"],
  },
  {
    number: "05",
    title: "Campaign Strategy & Management",
    duration: "2 weeks",
    topics: ["Campaign planning", "Voter outreach", "Resource management", "Election day operations"],
  },
  {
    number: "06",
    title: "Capstone Project",
    duration: "2 weeks",
    topics: ["Individual leadership project", "Mentorship sessions", "Final presentations", "Graduation"],
  },
];

const mentors = [
  { name: "Dr. Ram Sharma", role: "Governance Expert", experience: "20+ years" },
  { name: "Sita Thapa", role: "Research Director", experience: "15+ years" },
  { name: "Prakash Adhikari", role: "Campaign Strategist", experience: "18+ years" },
  { name: "Maya Gurung", role: "Leadership Coach", experience: "12+ years" },
];

const eligibility = [
  "Age 21-40 years",
  "Demonstrated interest in public service or politics",
  "Bachelor's degree or equivalent experience",
  "Commitment to ethical leadership",
  "Ability to attend all program sessions",
];

const outcomes = [
  "200+ graduates since 2021",
  "40% have run for elected office",
  "85% actively engaged in public service",
  "Active alumni network across all provinces",
];

export default function LeadershipAcademy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <GraduationCap className="mr-2 h-4 w-4" />
              Leadership Building Academy
            </div>
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Developing Tomorrow's Political Leaders
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              A flagship 12-week program designed to nurture ethical, competent, and
              visionary political leaders for Nepal's democratic future.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Program Overview</h2>
            <p className="text-lg text-muted-foreground">
              The Leadership Building Academy combines rigorous academic learning
              with practical political skills training. Our comprehensive program
              prepares emerging leaders for the challenges and responsibilities of
              democratic leadership.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Program Structure</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Six intensive modules covering all aspects of political leadership and
              democratic governance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Card key={module.number}>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary/20">
                      {module.number}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Mentors</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Learn from experienced political leaders, governance experts, and
              industry professionals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor) => (
              <Card key={mentor.name} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <CardDescription className="font-medium text-secondary">
                    {mentor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{mentor.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Application */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
                Eligibility Criteria
              </h2>
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
                Program Outcomes
              </h2>
              <ul className="space-y-4">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <Award className="h-5 w-5 shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="mx-auto max-w-2xl text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <Calendar className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl">Next Cohort: March 2025</CardTitle>
              <CardDescription>
                Applications are now open for our upcoming cohort. Limited seats available.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button size="lg" className="w-full">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Application deadline: February 15, 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
