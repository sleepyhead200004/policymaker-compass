import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
  User,
} from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // Convert markdown-like content to HTML paragraphs
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType === "ul" ? "ul" : "ol";
        elements.push(
          <ListTag
            key={elements.length}
            className={`mb-6 space-y-2 ${listType === "ul" ? "list-disc" : "list-decimal"} pl-6 text-muted-foreground`}
          >
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine === "") {
        flushList();
        return;
      }

      // H2 headings
      if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="mb-4 mt-10 text-2xl font-bold">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
        return;
      }

      // H3 headings
      if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="mb-3 mt-8 text-xl font-semibold">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
        return;
      }

      // Bold text lines (like **Key Challenges:**)
      if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        flushList();
        elements.push(
          <p key={index} className="mb-2 mt-6 font-semibold">
            {trimmedLine.replace(/\*\*/g, "")}
          </p>
        );
        return;
      }

      // Unordered list items
      if (trimmedLine.startsWith("- ")) {
        listType = "ul";
        currentList.push(trimmedLine.replace("- ", ""));
        return;
      }

      // Ordered list items
      if (/^\d+\.\s/.test(trimmedLine)) {
        listType = "ol";
        currentList.push(trimmedLine.replace(/^\d+\.\s/, ""));
        return;
      }

      // Horizontal rule
      if (trimmedLine === "---") {
        flushList();
        elements.push(<Separator key={index} className="my-8" />);
        return;
      }

      // Italic text (like *This analysis...*)
      if (trimmedLine.startsWith("*") && trimmedLine.endsWith("*") && !trimmedLine.startsWith("**")) {
        flushList();
        elements.push(
          <p key={index} className="mb-6 italic text-muted-foreground">
            {trimmedLine.replace(/^\*|\*$/g, "")}
          </p>
        );
        return;
      }

      // Regular paragraphs
      flushList();
      // Handle inline bold
      const processedLine = trimmedLine.replace(
        /\*\*(.+?)\*\*/g,
        "<strong>$1</strong>"
      );
      elements.push(
        <p
          key={index}
          className="mb-6 leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    });

    flushList();
    return elements;
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="mb-6 inline-flex items-center text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Lead paragraph */}
            <p className="mb-8 text-xl leading-relaxed text-foreground">
              {post.excerpt}
            </p>

            <Separator className="mb-8" />

            {/* Main content */}
            <div className="prose-custom">{renderContent(post.content)}</div>

            {/* Tags */}
            <div className="mt-12">
              <h4 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">
                Share this article
              </h4>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        url: shareUrl,
                      });
                    }
                  }}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Author Section */}
      <section className="border-t border-border bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <CardTitle>{post.author.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.slug}
                    className="group transition-shadow hover:shadow-lg"
                  >
                    <CardHeader>
                      <Badge variant="outline" className="mb-2 w-fit">
                        {relatedPost.category}
                      </Badge>
                      <CardTitle className="line-clamp-2 text-lg transition-colors group-hover:text-primary">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{relatedPost.author.name}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
              Stay Informed
            </h2>
            <p className="mb-6 text-primary-foreground/80">
              Subscribe to receive our latest research, analysis, and insights
              directly in your inbox.
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
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
