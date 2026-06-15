import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  Container,
  GitBranch,
  Activity,
  DollarSign,
  GraduationCap,
  Check,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import heroImage from "@/assets/hero-cloud.jpg";
import ctaImage from "@/assets/cta-pipelines.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ship.ops — Freelance DevOps & Cloud Engineering" },
      {
        name: "description",
        content:
          "Senior DevOps engineer for hire. CI/CD, Kubernetes, Terraform, AWS/GCP/Azure migrations, FinOps and cohort training.",
      },
      { property: "og:title", content: "ship.ops — Freelance DevOps & Cloud Engineering" },
      {
        property: "og:description",
        content:
          "I help engineering teams ship faster, scale safely, and slash cloud bills. Freelance consulting and cohort training.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: GitBranch,
    title: "CI/CD & Platform Engineering",
    body: "Self-service pipelines, golden paths, and developer platforms that let your team ship 10x without paging anyone at 3am.",
  },
  {
    icon: Cloud,
    title: "Cloud Migrations",
    body: "AWS, GCP, Azure. Lift-and-shift, replatform, or full-blown re-architecture — with rollback plans, not prayers.",
  },
  {
    icon: DollarSign,
    title: "FinOps & Cost Optimization",
    body: "Find the 30–60% of your cloud bill that's pure waste. Rightsizing, savings plans, and architecture-level wins.",
  },
  {
    icon: Container,
    title: "Kubernetes & Containers",
    body: "Production-grade clusters, GitOps with ArgoCD/Flux, autoscaling, and security hardening done properly.",
  },
  {
    icon: Activity,
    title: "Observability & SRE",
    body: "SLOs, error budgets, and dashboards engineers actually use. Prometheus, Grafana, OpenTelemetry, Datadog.",
  },
  {
    icon: GraduationCap,
    title: "Team Training",
    body: "Cohort-based bootcamps in Kubernetes, Terraform, and platform engineering — taught by someone who ships in prod.",
  },
];

const stack = [
  "AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Pulumi", "ArgoCD",
  "GitHub Actions", "GitLab CI", "Docker", "Helm", "Prometheus", "Grafana",
  "Datadog", "OpenTelemetry", "Vault", "Istio", "Crossplane", "Ansible",
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-radial-glow)" }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 noise-grid opacity-60" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                Available for Q3 — booking 2 new clients
              </span>

              <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Ship faster.<br />
                <span className="text-gradient">Scale safer.</span><br />
                Pay less.
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl lg:mx-0">
                I'm a senior DevOps &amp; cloud engineer helping startups and scale-ups
                build platforms that don't wake them up at night — and don't bankrupt them either.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:scale-[1.03]"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface"
                >
                  See services
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-8 border-t border-border/60 pt-10 text-left md:gap-12">
                {[
                  { k: "8+", v: "Years in production" },
                  { k: "$3M+", v: "Cloud spend optimized" },
                  { k: "40+", v: "Teams trained" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-3xl font-bold md:text-4xl text-gradient">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-70 blur-3xl"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
                <img
                  src={heroImage}
                  alt="Isometric illustration of cloud infrastructure with networked glass cubes"
                  width={1536}
                  height={1280}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* MARQUEE STACK */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/30 py-8">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-sm text-muted-foreground">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <Section
        eyebrow="What I do"
        title={<>Engineering work that <span className="text-gradient">moves the needle</span></>}
        subtitle="From your first production Kubernetes cluster to seven-figure cloud bills, I plug in where it matters most."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group card-elevated rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand glow-ring transition-transform group-hover:rotate-3">
                <s.icon className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* COURSES TEASER */}
      <Section
        eyebrow="Cohort training"
        title={<>Level up your team in <span className="text-gradient">6 weeks</span></>}
        subtitle="Live cohort-based courses for engineering teams who want to go from 'we use AWS' to 'we run a real platform'."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Kubernetes in Production", weeks: "6 weeks", price: "$1,490", tag: "Most popular" },
            { name: "Terraform & IaC Mastery", weeks: "4 weeks", price: "$990" },
            { name: "Cloud FinOps Bootcamp", weeks: "3 weeks", price: "$790" },
          ].map((c) => (
            <div
              key={c.name}
              className="card-elevated relative flex flex-col rounded-2xl p-7"
            >
              {c.tag && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground glow-ring">
                  {c.tag}
                </span>
              )}
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Cohort
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{c.name}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{c.weeks} · live + recorded</div>

              <div className="mt-6 font-display text-4xl font-bold text-gradient">{c.price}</div>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-2 shrink-0" /> Weekly live sessions</li>
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-2 shrink-0" /> Hands-on labs &amp; capstone</li>
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-brand-2 shrink-0" /> Private cohort Slack</li>
              </ul>

              <Link
                to="/courses"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand hover:bg-surface-2"
              >
                See curriculum <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!py-32">
        <div className="card-elevated relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{ background: "var(--gradient-radial-glow)" }}
          />
          <h2 className="relative font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let's ship<br />
            <span className="text-gradient">something serious.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-muted-foreground">
            Tell me about your stack and what's slowing you down. I'll send back a concrete plan within 48 hours.
          </p>
          <Link
            to="/contact"
            className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:scale-[1.03]"
          >
            Book a discovery call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
