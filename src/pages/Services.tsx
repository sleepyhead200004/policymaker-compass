import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Building2,
  FileText,
  Globe2,
  LineChart,
  MapPin,
  Megaphone,
  Palette,
  Target,
  Users,
  Vote,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Political Consulting",
    slug: "political-consulting",
    description: "Strategic advisory services for political leaders, parties, and institutions navigating complex political landscapes.",
    features: [
      "Strategic positioning and messaging",
      "Coalition building strategies",
      "Policy development support",
      "Political risk assessment",
    ],
  },
  {
    icon: Users,
    title: "Leadership Training",
    slug: "leadership-training",
    description: "Comprehensive programs designed to develop competent, ethical, and visionary political leaders.",
    features: [
      "Executive leadership programs",
      "Public speaking and communication",
      "Decision-making frameworks",
      "Ethical governance training",
    ],
  },
  {
    icon: BarChart3,
    title: "Market Research & Surveys",
    slug: "market-research",
    description: "Rigorous data collection and analysis to inform strategic decision-making.",
    features: [
      "Opinion polls and surveys",
      "Focus group discussions",
      "Quantitative research methods",
      "Data visualization and reporting",
    ],
  },
  {
    icon: Megaphone,
    title: "Press Media & Management",
    slug: "press-media",
    description: "Strategic media relations and communication management for political entities.",
    features: [
      "Media strategy development",
      "Press release and content creation",
      "Crisis communication management",
      "Media training for leaders",
    ],
  },
  {
    icon: Vote,
    title: "Voter Analysis & Data Collection",
    slug: "voter-analysis",
    description: "In-depth voter behavior analysis and segmentation for targeted campaign strategies.",
    features: [
      "Voter demographic analysis",
      "Swing voter identification",
      "Voting pattern research",
      "Electoral forecasting models",
    ],
  },
  {
    icon: MapPin,
    title: "GIS Mapping & Spatial Analysis",
    slug: "gis-mapping",
    description: "Geographic information systems for electoral mapping and spatial strategy.",
    features: [
      "Electoral boundary mapping",
      "Demographic overlay analysis",
      "Resource allocation optimization",
      "Campaign territory planning",
    ],
  },
  {
    icon: Globe2,
    title: "Social Strategy & Management",
    slug: "social-strategy",
    description: "Digital and social media strategies for political engagement and outreach.",
    features: [
      "Social media campaign design",
      "Digital content strategy",
      "Online community management",
      "Digital advertising campaigns",
    ],
  },
  {
    icon: FileText,
    title: "Policy Review & Management",
    slug: "policy-review",
    description: "Expert analysis and development of policy frameworks and governance structures.",
    features: [
      "Policy impact assessment",
      "Legislative analysis",
      "Policy recommendation reports",
      "Stakeholder consultation",
    ],
  },
  {
    icon: Target,
    title: "Election Campaign Design & Management",
    slug: "election-campaign",
    description: "End-to-end campaign management from strategy to execution.",
    features: [
      "Campaign strategy development",
      "Ground game operations",
      "Volunteer management systems",
      "Election day operations",
    ],
  },
  {
    icon: Palette,
    title: "Political Branding",
    slug: "political-branding",
    description: "Building strong, authentic political brands that resonate with voters.",
    features: [
      "Brand identity development",
      "Visual identity design",
      "Messaging framework creation",
      "Brand consistency management",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive political consulting solutions designed to help you
              navigate complex challenges and achieve your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.slug} className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Contact us today to discuss how our services can help you achieve
              your political objectives with evidence-based strategies.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
