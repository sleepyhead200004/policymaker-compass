import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Loader2 } from "lucide-react";
import { blogApi, ApiBlog } from "@/lib/api";

const categories = ["All", "Governance", "Politics", "Society & Media", "Policy Analysis"];

export default function Blog() {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: blogApi.getAll,
  });

  const featuredPost = blogs?.[0];
  const regularPosts = blogs?.slice(1) || [];

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

      {/* Loading State */}
      {isLoading && (
        <section className="py-12">
          <div className="container flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-12">
          <div className="container text-center">
            <p className="text-destructive">Failed to load blogs. Please try again later.</p>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {featuredPost && !isLoading && (
        <section className="py-12">
          <div className="container">
            <Link to={`/blog/${featuredPost._id}`}>
              <Card className="overflow-hidden transition-shadow hover:shadow-lg md:flex">
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 md:h-auto md:w-2/5">
                  <span className="text-6xl font-bold text-primary/20">Featured</span>
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {featuredPost.tags[0] && (
                        <Badge variant="secondary">{featuredPost.tags[0]}</Badge>
                      )}
                      <span className="text-sm text-muted-foreground">
                        {new Date(featuredPost.created_date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base">
                      {featuredPost.subtitle || featuredPost.description.slice(0, 150) + '...'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.read_time}
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
      {!isLoading && regularPosts.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">Latest Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post: ApiBlog) => (
                <Link key={post._id} to={`/blog/${post._id}`}>
                  <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-2">
                        {post.tags[0] && (
                          <Badge variant="outline">{post.tags[0]}</Badge>
                        )}
                      </div>
                      <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.subtitle || post.description.slice(0, 100) + '...'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.read_time}
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {new Date(post.created_date).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
