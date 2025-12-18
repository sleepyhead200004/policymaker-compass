import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Political Consulting", href: "/services/political-consulting" },
  { name: "Leadership Training", href: "/services/leadership-training" },
  { name: "Market Research & Surveys", href: "/services/market-research" },
  { name: "Press Media & Management", href: "/services/press-media" },
  { name: "Voter Analysis", href: "/services/voter-analysis" },
  { name: "GIS Mapping", href: "/services/gis-mapping" },
  { name: "Social Strategy", href: "/services/social-strategy" },
  { name: "Policy Review", href: "/services/policy-review" },
  { name: "Election Campaign", href: "/services/election-campaign" },
  { name: "Political Branding", href: "/services/political-branding" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Leadership Academy", href: "/leadership-academy" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">CN</span>
          </div>
          <span className="hidden text-xl font-semibold text-foreground sm:inline-block">
            Concern Nepal
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            About Us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/services")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/services" className="w-full font-medium">
                  All Services
                </Link>
              </DropdownMenuItem>
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link to={service.href} className="w-full">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/projects"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/projects") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Projects
          </Link>
          <Link
            to="/research"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/research") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Research
          </Link>
          <Link
            to="/leadership-academy"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/leadership-academy") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Leadership Academy
          </Link>
          <Link
            to="/team"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/team") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Team
          </Link>
          <Link
            to="/careers"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/careers") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Careers
          </Link>
          <Link
            to="/blog"
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/blog") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/services")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
