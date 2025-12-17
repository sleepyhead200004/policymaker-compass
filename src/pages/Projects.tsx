import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "campaign", label: "Political Campaigns" },
  { id: "research", label: "Research & Surveys" },
  { id: "policy", label: "Policy Projects" },
  { id: "training", label: "Training Programs" },
];

const projects = [
  {
    title: "Provincial Election Strategy 2022",
    category: "campaign",
    categoryLabel: "Political Campaign",
    client: "Political Party",
    duration: "6 months",
    description: "Comprehensive campaign strategy development for provincial elections, including voter outreach programs, messaging frameworks, and ground game operations.",
    outcomes: ["Increased voter turnout by 15%", "Won 12 out of 18 targeted constituencies", "Established network of 5,000+ volunteers"],
  },
  {
    title: "Youth Political Engagement Survey",
    category: "research",
    categoryLabel: "Research",
    client: "International Development Partner",
    duration: "4 months",
    description: "Large-scale quantitative and qualitative research study analyzing youth participation in political processes across all 7 provinces.",
    outcomes: ["Surveyed 10,000+ respondents", "Published comprehensive research report", "Policy recommendations adopted"],
  },
  {
    title: "Municipal Governance Capacity Building",
    category: "training",
    categoryLabel: "Training",
    client: "Government Institution",
    duration: "12 months",
    description: "Capacity building program for newly elected municipal representatives covering governance, public administration, and leadership skills.",
    outcomes: ["Trained 500+ elected officials", "Developed training curriculum", "Established ongoing mentorship program"],
  },
  {
    title: "Electoral Boundary Analysis",
    category: "research",
    categoryLabel: "Research",
    client: "Civil Society Organization",
    duration: "3 months",
    description: "GIS-based analysis of electoral boundaries and demographic patterns to support advocacy for fair representation.",
    outcomes: ["Mapped all 165 constituencies", "Identified representation gaps", "Presented findings to stakeholders"],
  },
  {
    title: "Political Communication Strategy",
    category: "campaign",
    categoryLabel: "Political Campaign",
    client: "Independent Candidate",
    duration: "4 months",
    description: "Development and execution of integrated communication strategy including traditional media, social media, and grassroots outreach.",
    outcomes: ["400% increase in social media engagement", "Secured 50+ media appearances", "Successfully elected to office"],
  },
  {
    title: "Policy Reform Consultation",
    category: "policy",
    categoryLabel: "Policy",
    client: "Government Ministry",
    duration: "8 months",
    description: "Comprehensive policy review and stakeholder consultation for local governance reform legislation.",
    outcomes: ["Consulted 200+ stakeholders", "Drafted policy recommendations", "Key recommendations incorporated in law"],
  },
  {
    title: "Women in Politics Leadership Program",
    category: "training",
    categoryLabel: "Training",
    client: "NGO Partner",
    duration: "6 months",
    description: "Specialized leadership training program designed to increase women's participation and effectiveness in political leadership.",
    outcomes: ["Graduated 100 women leaders", "30% subsequently ran for office", "Created alumni network"],
  },
  {
    title: "Voter Behavior Study",
    category: "research",
    categoryLabel: "Research",
    client: "Research Institution",
    duration: "5 months",
    description: "In-depth research on voter decision-making processes, information sources, and factors influencing electoral choices.",
    outcomes: ["Analyzed 15 years of electoral data", "Published academic paper", "Developed predictive models"],
  },
];

export default function Projects() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Our Projects
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Explore our portfolio of impactful work across political consulting,
              research, policy analysis, and capacity building.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Badge
                  key={cat.id}
                  variant={cat.id === "all" ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm"
                >
                  {cat.label}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary">{project.categoryLabel}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {project.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    Client: {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      Key Outcomes:
                    </p>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
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
