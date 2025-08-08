import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import heroImg from "@/assets/hero-gradient.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Fintech Analytics Dashboard",
    subtitle: "Web app • Data visualization",
    image: p1,
    tags: ["UX", "UI", "Design System"],
  },
  {
    title: "E‑commerce Product Experience",
    subtitle: "Responsive • Conversion-focused",
    image: p2,
    tags: ["UX Research", "Prototyping", "A/B"],
  },
  {
    title: "Mobile Banking Flows",
    subtitle: "iOS/Android • Motion",
    image: p3,
    tags: ["Mobile", "Interaction", "Accessibility"],
  },
];

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Design Portfolio – UI/UX Designer",
    url: "/",
    description:
      "Explore UI/UX case studies, brand design, and web prototypes crafted with clarity and purpose.",
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Design Portfolio – UI/UX Designer</title>
        <meta
          name="description"
          content="Explore UI/UX case studies, brand design, and web prototypes crafted with clarity and purpose."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <nav className="container mx-auto flex h-14 items-center justify-between px-4">
          <a href="#top" className="story-link text-sm font-semibold">
            Design Portfolio
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground">
              Work
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
            <img
              src={heroImg}
              alt="Abstract violet gradient background for design portfolio"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="container mx-auto grid min-h-[68vh] place-items-center px-4 py-16 md:py-24">
            <div className="max-w-3xl text-center animate-enter">
              <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Crafting thoughtful interfaces and delightful interactions
              </h1>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                I design systems, flows, and visuals that feel effortless. From early discovery to polished details.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <a href="#work">
                  <Button variant="hero" size="lg">
                    View work
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg">
                    Get in touch
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="container mx-auto px-4 py-16 md:py-24">
          <header className="mb-8 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">Selected work</h2>
            <p className="mt-2 text-muted-foreground">
              A few recent projects across web, mobile, and commerce.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">About</h2>
            <p className="mt-3 text-muted-foreground">
              I’m a product designer focused on clarity, craft, and outcomes. I collaborate closely with product and engineering,
              shaping journeys, systems, and the micro-interactions that make them feel alive.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto px-4 pb-20">
          <div className="mx-auto max-w-xl rounded-xl border bg-card p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Have a project in mind?</h3>
            <p className="mt-2 text-muted-foreground">
              I’m available for select collaborations. Let’s build something great.
            </p>
            <div className="mt-6">
              <a href="mailto:hello@example.com">
                <Button size="lg">Email me</Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Design Portfolio
      </footer>
    </div>
  );
};

export default Index;
