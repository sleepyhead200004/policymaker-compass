import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Eye,
  Heart,
  Lightbulb,
  Scale,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our work, maintaining transparency and honesty.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative solutions and cutting-edge methodologies to address complex challenges.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We believe in democratic participation and ensure diverse voices are heard and represented.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description: "We are dedicated to the success of our clients and the advancement of democratic governance.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Foundation",
    description: "Concern Nepal was established with a vision to strengthen democratic governance through research.",
  },
  {
    year: "2019",
    title: "First Major Project",
    description: "Successfully completed our first large-scale voter behavior study covering 50 districts.",
  },
  {
    year: "2020",
    title: "Research Division",
    description: "Launched dedicated research division focusing on policy analysis and governance studies.",
  },
  {
    year: "2021",
    title: "Leadership Academy",
    description: "Initiated the Leadership Building Academy to train emerging political leaders.",
  },
  {
    year: "2022",
    title: "National Presence",
    description: "Expanded operations to all 7 provinces with regional offices and research teams.",
  },
  {
    year: "2023",
    title: "Digital Innovation",
    description: "Introduced advanced GIS mapping and data analytics capabilities for campaigns.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Celebrating 150+ completed projects and ongoing expansion of services.",
  },
];

const team = [
  {
    name: "Dr. Ram Sharma",
    role: "Founder & Executive Director",
    bio: "Political scientist with 20+ years of experience in democratic governance and policy research.",
    expertise: "Political Strategy, Governance",
  },
  {
    name: "Sita Thapa",
    role: "Director of Research",
    bio: "Expert in quantitative research methods with extensive experience in voter behavior studies.",
    expertise: "Research Methodology, Data Analysis",
  },
  {
    name: "Prakash Adhikari",
    role: "Head of Consulting",
    bio: "Former political advisor with deep understanding of Nepal's political landscape.",
    expertise: "Political Consulting, Campaign Strategy",
  },
  {
    name: "Maya Gurung",
    role: "Director of Training",
    bio: "Leadership development specialist focused on building capacity in emerging leaders.",
    expertise: "Leadership Training, Capacity Building",
  },
  {
    name: "Bikash Rai",
    role: "GIS & Data Lead",
    bio: "Geospatial analyst specializing in electoral mapping and demographic analysis.",
    expertise: "GIS Mapping, Spatial Analysis",
  },
  {
    name: "Anita Shrestha",
    role: "Communications Director",
    bio: "Media professional with expertise in political communications and public relations.",
    expertise: "Media Relations, Communications Strategy",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              About Concern Nepal
            </h1>
            <p className="text-lg text-primary-foreground/80">
              A leading research and political consulting organization dedicated to
              strengthening democratic governance in Nepal through evidence-based
              strategies and ethical practices.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Organization</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Concern Nepal is a premier research and political consulting
                organization that bridges the gap between academic rigor and
                practical political strategy. Founded in 2018, we have grown to
                become one of Nepal's most trusted advisors to political leaders,
                parties, government institutions, and civil society organizations.
              </p>
              <p>
                Our multidisciplinary team of political scientists, researchers,
                data analysts, and communication experts works collaboratively to
                deliver comprehensive solutions that drive political success while
                upholding democratic values. We believe that informed decision-making
                is the cornerstone of effective governance, and our work is dedicated
                to providing the insights and strategies that make this possible.
              </p>
              <p>
                With a presence across all seven provinces of Nepal, we combine
                national perspective with local expertise, ensuring our solutions
                are both contextually relevant and strategically sound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 bg-primary text-primary-foreground">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Eye className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl text-primary-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  A Nepal where democratic governance thrives, political leadership
                  is ethical and competent, and every citizen's voice contributes to
                  the nation's progress.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower political leaders and institutions with research-driven
                  insights, strategic consulting, and capacity building that
                  strengthens democratic governance and promotes inclusive
                  development in Nepal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide our work and define our organization.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Key milestones in Concern Nepal's growth and impact.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div
                    className={`absolute left-2 top-1 h-5 w-5 rounded-full border-4 border-background bg-primary md:left-auto ${
                      index % 2 === 0 ? "md:-right-2.5" : "md:-left-2.5"
                    }`}
                  />
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="text-sm font-semibold text-secondary">
                        {item.year}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Leadership Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet the experts driving Concern Nepal's mission and vision.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-secondary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm text-muted-foreground">{member.bio}</p>
                  <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground inline-block">
                    {member.expertise}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
