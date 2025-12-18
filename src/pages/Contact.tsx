import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Kathmandu, Nepal"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+977 980-1834583"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@concernnepal.org"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Sunday - Friday", "9:00 AM - 5:00 PM"],
  },
];

const inquiryTypes = [
  "Political Consulting",
  "Leadership Training",
  "Research Services",
  "Campaign Management",
  "Media & Communications",
  "Partnership Inquiry",
  "General Inquiry",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Get in touch with our team to discuss how we can help you achieve
              your political and governance objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-b border-border py-12">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-2 text-3xl font-bold">Send Us a Message</h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and our team will get back to you within
                24-48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Enter your organization name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                  <Select name="inquiryType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="mb-2 text-3xl font-bold">Our Location</h2>
              <p className="mb-8 text-muted-foreground">
                Visit us at our office in Kathmandu, Nepal.
              </p>
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <p className="font-medium text-foreground">Kathmandu, Nepal</p>
                    <p className="text-sm text-muted-foreground">Bagmati Province</p>
                  </div>
                </div>
              </div>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Schedule a Meeting</CardTitle>
                  <CardDescription>
                    Prefer a face-to-face discussion? Schedule a meeting with our
                    team at our Kathmandu office.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Request Meeting
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
