import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

const categories = ["All", "Governance", "Politics", "Society & Media", "Policy Analysis"];

const posts = [
  {
    title: "The Future of Democratic Governance in Nepal",
    category: "Governance",
    author: "Dr. Ram Sharma",
    date: "December 15, 2024",
    readTime: "8 min read",
    excerpt: "Exploring the evolving landscape of democratic institutions and their role in Nepal's development trajectory. An analysis of challenges and opportunities ahead.",
    featured: true,
  },
  {
    title: "Understanding Voter Behavior in Federal Elections",
    category: "Politics",
    author: "Sita Thapa",
    date: "December 10, 2024",
    readTime: "6 min read",
    excerpt: "Analysis of voting patterns and what drives electoral decisions across different demographics in Nepal's federal structure.",
    featured: false,
  },
  {
    title: "Policy Reform Priorities for Economic Growth",
    category: "Policy Analysis",
    author: "Prakash Adhikari",
    date: "December 5, 2024",
    readTime: "10 min read",
    excerpt: "Key policy recommendations for sustainable economic development in post-pandemic Nepal, focusing on governance and institutional reforms.",
    featured: false,
  },
  {
    title: "Social Media's Impact on Political Discourse",
    category: "Society & Media",
    author: "Maya Gurung",
    date: "November 28, 2024",
    readTime: "7 min read",
    excerpt: "How digital platforms are reshaping political communication and civic engagement in Nepal's democracy.",
    featured: false,
  },
  {
    title: "Women's Political Representation: Progress and Challenges",
    category: "Governance",
    author: "Anita Shrestha",
    date: "November 20, 2024",
    readTime: "9 min read",
    excerpt: "Examining the state of women's political participation in Nepal and strategies for increasing meaningful representation.",
    featured: false,
  },
  {
    title: "Local Government Performance: Five Years After Federalism",
    category: "Governance",
    author: "Dr. Ram Sharma",
    date: "November 15, 2024",
    readTime: "12 min read",
    excerpt: "A comprehensive assessment of how local governments have performed since the implementation of federal structure.",
    featured: false,
  },
  {
    title: "Youth Engagement in Politics: Trends and Insights",
    category: "Politics",
    author: "Bikash Rai",
    date: "November 8, 2024",
    readTime: "6 min read",
    excerpt: "Research findings on how young Nepalis are engaging with political processes and what motivates their participation.",
    featured: false,
  },
  {
    title: "Election Campaign Finance: Need for Reform",
    category: "Policy Analysis",
    author: "Prakash Adhikari",
    date: "November 1, 2024",
    readTime: "8 min read",
    excerpt: "Analysis of campaign financing practices and recommendations for transparency and accountability reforms.",
    featured: false,
  },
];

export default function Blog() {
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

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
            <Card className="overflow-hidden md:flex">
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
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.title} className="group cursor-pointer transition-shadow hover:shadow-lg">
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
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
