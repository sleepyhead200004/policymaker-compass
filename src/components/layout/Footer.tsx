import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Leadership Academy", href: "/leadership-academy" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Political Consulting", href: "/services/political-consulting" },
  { name: "Leadership Training", href: "/services/leadership-training" },
  { name: "Market Research", href: "/services/market-research" },
  { name: "Election Campaign", href: "/services/election-campaign" },
  { name: "GIS Mapping", href: "/services/gis-mapping" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <span className="text-lg font-bold text-secondary-foreground">CN</span>
              </div>
              <span className="text-xl font-semibold">Concern Nepal</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Research-driven political and policy consulting firm dedicated to
              strengthening democratic governance in Nepal.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <a
                  href="tel:+9771234567890"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                >
                  +977 1234567890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <a
                  href="mailto:info@concernnepal.org"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                >
                  info@concernnepal.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Concern Nepal. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
