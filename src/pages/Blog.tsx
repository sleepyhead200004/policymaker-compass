import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const categories = ["All", "Governance", "Politics", "Society & Media", "Policy Analysis"];

export default function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Insights & Analysis
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Expert commentary, research findings, and analysis on governance,
              politics, and policy in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border py-6">
        <div className="container">
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
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container">
            <Link to={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden transition-shadow hover:shadow-lg md:flex">
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 md:h-auto md:w-2/5">
                  <span className="text-6xl font-bold text-primary/20">Featured</span>
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
