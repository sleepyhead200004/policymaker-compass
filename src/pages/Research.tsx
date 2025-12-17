import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from "lucide-react";

const publications = [
  {
    title: "Democratic Governance in Nepal: Challenges and Opportunities",
    type: "Research Report",
    category: "Governance",
    date: "November 2024",
    pages: 45,
    description: "Comprehensive analysis of democratic governance structures, challenges, and recommendations for strengthening institutional capacity.",
    abstract: "This report examines the state of democratic governance in Nepal, analyzing institutional frameworks, citizen participation, and policy implementation effectiveness.",
  },
  {
    title: "Youth Political Participation: A Multi-Province Study",
    type: "Survey Report",
    category: "Politics",
    date: "October 2024",
    pages: 62,
    description: "Large-scale survey findings on youth engagement in political processes across Nepal's seven provinces.",
    abstract: "Based on responses from 10,000+ young Nepalis, this study provides insights into factors influencing political participation among youth.",
  },
  {
    title: "Electoral Trends Analysis 2017-2024",
    type: "Research Report",
    category: "Elections",
    date: "September 2024",
    pages: 38,
    description: "Longitudinal analysis of voting patterns, party performance, and electoral dynamics over the past seven years.",
    abstract: "This analysis tracks changes in electoral behavior and provides forecasting models for future elections.",
  },
  {
    title: "Women's Political Leadership in Local Governance",
    type: "Policy Brief",
    category: "Gender",
    date: "August 2024",
    pages: 18,
    description: "Policy recommendations for increasing women's meaningful participation in local government leadership.",
    abstract: "Drawing from qualitative research with women elected officials, this brief outlines barriers and enablers of women's political leadership.",
  },
  {
    title: "Digital Transformation in Political Campaigns",
    type: "White Paper",
    category: "Technology",
    date: "July 2024",
    pages: 28,
    description: "Analysis of digital technologies reshaping political campaigning and voter engagement in Nepal.",
    abstract: "This white paper explores how social media, data analytics, and digital outreach are transforming political communication.",
  },
  {
    title: "Provincial Autonomy and Governance Effectiveness",
    type: "Research Report",
    category: "Governance",
    date: "June 2024",
    pages: 55,
    description: "Assessment of provincial governance structures and their effectiveness five years after federalism implementation.",
    abstract: "A comprehensive evaluation of how provincial governments are functioning under Nepal's federal structure.",
  },
];

const categories = ["All", "Governance", "Politics", "Elections", "Gender", "Technology"];

export default function Research() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Research & Publications
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Access our research reports, policy briefs, survey findings, and
              analytical publications on governance and political affairs.
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={cat === "All" ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {publications.map((pub) => (
              <Card key={pub.title}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <Badge variant="outline">{pub.category}</Badge>
                    <span className="text-sm text-muted-foreground">{pub.date}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{pub.pages} pages</span>
                  </div>
                  <CardTitle className="text-xl">{pub.title}</CardTitle>
                  <CardDescription>{pub.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    <span className="font-medium">Abstract: </span>
                    {pub.abstract}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View Summary
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Services CTA */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Need Custom Research?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Our research team can conduct tailored studies, surveys, and analyses
              to meet your specific needs.
            </p>
            <Button size="lg">Request Research Services</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
