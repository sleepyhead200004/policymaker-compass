import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle,
  Globe2,
  LineChart,
  MapPin,
  Megaphone,
  Shield,
  Target,
  TrendingUp,
  Users,
  Vote,
} from "lucide-react";

const stats = [
  { label: "Established", value: "2018" },
  { label: "Projects Completed", value: "150+" },
  { label: "Ongoing Projects", value: "12" },
  { label: "Core Areas", value: "10" },
];

const services = [
  {
    icon: Building2,
    title: "Political Consulting",
    description: "Strategic advisory for political leaders, parties, and institutions.",
    href: "/services/political-consulting",
  },
  {
    icon: Users,
    title: "Leadership Training",
    description: "Comprehensive programs to develop next-generation political leaders.",
    href: "/services/leadership-training",
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description: "In-depth surveys and data analysis for informed decision-making.",
    href: "/services/market-research",
  },
  {
    icon: Megaphone,
    title: "Press & Media",
    description: "Media strategy and management for political communications.",
    href: "/services/press-media",
  },
  {
    icon: Vote,
    title: "Voter Analysis",
    description: "Comprehensive voter behavior analysis and segmentation.",
    href: "/services/voter-analysis",
  },
  {
    icon: MapPin,
    title: "GIS Mapping",
    description: "Spatial analysis and geographic information systems for campaigns.",
    href: "/services/gis-mapping",
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Data-Driven Approach",
    description: "Every strategy is backed by rigorous research and data analysis.",
  },
  {
    icon: Globe2,
    title: "Ground-Level Research",
    description: "Direct engagement with communities for authentic insights.",
  },
  {
    icon: Shield,
    title: "Ethical Consulting",
    description: "Commitment to transparency and ethical practices.",
  },
  {
    icon: TrendingUp,
    title: "Global Standards",
    description: "International best practices with local contextual expertise.",
  },
];

const featuredProjects = [
  {
    title: "Provincial Election Strategy 2022",
    category: "Political Campaign",
    description: "Comprehensive campaign strategy for provincial elections with voter outreach programs.",
  },
  {
    title: "Youth Political Engagement Survey",
    category: "Research",
    description: "Large-scale survey analyzing youth participation in political processes.",
  },
  {
    title: "Municipal Governance Training",
    category: "Training",
    description: "Capacity building program for newly elected municipal representatives.",
  },
];

const blogPosts = [
  {
    title: "The Future of Democratic Governance in Nepal",
    category: "Governance",
    date: "Dec 15, 2024",
    excerpt: "Exploring the evolving landscape of democratic institutions and their role in Nepal's development.",
  },
  {
    title: "Understanding Voter Behavior Patterns",
    category: "Politics",
    date: "Dec 10, 2024",
    excerpt: "Analysis of voting patterns and what drives electoral decisions in different demographics.",
  },
  {
    title: "Policy Reform for Economic Growth",
    category: "Policy",
    date: "Dec 5, 2024",
    excerpt: "Key policy recommendations for sustainable economic development in post-pandemic Nepal.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Research-Driven Political & Policy Consulting
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              Empowering democratic governance through evidence-based strategies,
              comprehensive research, and transformative leadership development.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              About Concern Nepal
            </h2>
            <p className="text-lg text-muted-foreground">
              Concern Nepal is a premier research and political consulting organization
              dedicated to strengthening democratic governance. We combine rigorous
              academic research with practical political expertise to deliver
              actionable insights and strategies for political leaders, institutions,
              and civil society organizations.
            </p>
            <Button variant="outline" className="mt-6" asChild>
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive solutions for political success, from strategic consulting
              to ground-level campaign management.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Concern Nepal
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our commitment to excellence and ethical practices sets us apart in
              political consulting.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-primary-foreground/80">
              Explore some of our impactful work across political consulting, research,
              and capacity building.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground"
              >
                <CardHeader>
                  <div className="mb-2 text-sm font-medium text-secondary">
                    {project.category}
                  </div>
                  <CardTitle className="text-xl text-primary-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="secondary" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Academy Highlight */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary">
                <BookOpen className="mr-2 h-4 w-4" />
                Leadership Building Academy
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Developing Tomorrow's Political Leaders
              </h2>
              <p className="mb-6 text-muted-foreground">
                The Leadership Building Academy (LBA) is our flagship program designed
                to nurture and develop the next generation of ethical, competent, and
                visionary political leaders. Through comprehensive training modules,
                mentorship, and practical exercises, we prepare aspiring leaders for
                the challenges of democratic governance.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Comprehensive leadership curriculum",
                  "Expert mentors and facilitators",
                  "Practical governance simulations",
                  "Networking with political leaders",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/leadership-academy">
                  Explore the Academy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <Users className="mx-auto mb-4 h-16 w-16 text-primary" />
                    <p className="text-lg font-medium text-muted-foreground">
                      Leadership Academy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Insights & Analysis
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                Stay informed with our latest research findings, political analysis,
                and expert commentary.
              </p>
            </div>
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link to="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} className="group">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-2xl bg-primary p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Transform Your Political Strategy?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Partner with Concern Nepal for research-driven insights and strategic
              consulting that delivers results.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
