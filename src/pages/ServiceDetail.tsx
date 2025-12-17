import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getServiceBySlug, servicesData } from "@/data/servicesData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  FileText,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  // Get related services (exclude current)
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/services"
              className="mb-6 inline-flex items-center text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <div className="flex items-start gap-6">
              <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 md:flex">
                <ServiceIcon className="h-10 w-10 text-primary-foreground" />
              </div>
              <div>
                <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-5xl">
                  {service.title}
                </h1>
                <p className="text-xl text-primary-foreground/80">
                  {service.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Overview</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {service.overview}
            </p>

            {/* Key Features */}
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
              {service.methodology.title}
            </h2>
            <div className="space-y-6">
              {service.methodology.steps.map((step, index) => (
                <div key={step.name} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="mb-2 text-lg font-semibold">{step.name}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Target Audience */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Target Audience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Who Is This For?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.targetAudience.map((audience) => (
                      <li
                        key={audience}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {audience}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">Case Studies</h2>
            <div className="space-y-8">
              {service.caseStudies.map((caseStudy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="mb-2">{caseStudy.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Client: {caseStudy.client}
                        </p>
                      </div>
                      <Badge variant="outline">Case Study {index + 1}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-1 font-semibold text-destructive">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-primary">
                        Solution
                      </h4>
                      <p className="text-muted-foreground">
                        {caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-secondary">
                        Outcome
                      </h4>
                      <p className="text-muted-foreground">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold md:text-3xl">
              <Lightbulb className="h-7 w-7 text-secondary" />
              Key Insights
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {service.keyInsights.map((insight) => (
                <Card key={insight.title} className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold md:text-3xl">
              <FileText className="h-7 w-7 text-primary" />
              What You'll Receive
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="flex items-center gap-3 rounded-lg bg-background p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-sm font-medium">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
              Related Services
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <Card
                    key={relatedService.slug}
                    className="group transition-all hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <RelatedIcon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">
                        {relatedService.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                        {relatedService.description}
                      </p>
                      <Link
                        to={`/services/${relatedService.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Contact us today to discuss how our {service.title.toLowerCase()}{" "}
              services can help you achieve your objectives.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
