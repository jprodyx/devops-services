import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { usePageMeta } from "@/hooks/usePageMeta";

const packages = [
  {
    name: "Audit Sprint",
    price: "$4,500",
    duration: "2 weeks · fixed scope",
    desc: "A deep diagnostic on your infra, pipelines, and cloud spend. You get a written report, prioritized backlog, and 60-minute walkthrough.",
    bullets: ["Architecture & infra review","CI/CD pipeline audit","Cloud spend breakdown with quick wins","Security & reliability red flags","Prioritized 90-day roadmap"],
    cta: "Book an audit",
    featured: false,
  },
  {
    name: "Platform Build",
    price: "From $12k/mo",
    duration: "8–16 weeks · embedded",
    desc: "I embed with your team and ship the platform: Kubernetes, GitOps, observability, secure pipelines. You end with a self-serve developer experience.",
    bullets: ["Production K8s on AWS/GCP/Azure","GitOps with ArgoCD or Flux","Terraform / Pulumi modules","Observability stack (Prom + Grafana / Datadog)","Runbooks, SLOs, on-call setup","Engineer enablement & handover"],
    cta: "Start a build",
    featured: true,
  },
  {
    name: "Fractional DevOps",
    price: "From $6k/mo",
    duration: "Monthly retainer · 2 days/week",
    desc: "Ongoing senior DevOps capacity without the full-time hire. Architecture decisions, reviews, on-call escalation, and continuous improvement.",
    bullets: ["Async reviews & architecture calls","Hands-on infra work","Incident response support","Cost reviews each month","Roadmap ownership"],
    cta: "Start retainer",
    featured: false,
  },
];

export default function ServicesPage() {
  usePageMeta({
    title: "Services — DevOps Consulting, Cloud Migration & FinOps | ship.ops",
    description: "Freelance DevOps consulting, AWS/GCP/Azure cloud migration, Kubernetes platform engineering, and FinOps cost optimization for high-growth teams.",
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <Section
        eyebrow="Services"
        title={<>Engagements built around <span className="text-gradient">outcomes</span></>}
        subtitle="Three ways to work with me — pick the shape that matches where your team is right now."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className={`card-elevated relative flex flex-col rounded-2xl p-8 ${p.featured ? "border-brand/50 glow-ring" : ""}`}>
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most requested
                </span>
              )}
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Package</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{p.duration}</div>
              <div className="mt-6 font-display text-4xl font-bold text-gradient">{p.price}</div>
              <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured ? "bg-gradient-brand text-primary-foreground glow-ring" : "border border-border bg-surface text-foreground hover:bg-surface-2"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it works" title={<>From hello to <span className="text-gradient">shipped</span></>}>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Discovery call", d: "30 minutes. Tell me what's broken and what you need." },
            { n: "02", t: "Proposal", d: "Within 48 hours. Concrete scope, timeline, price." },
            { n: "03", t: "Kickoff", d: "Slack channel, shared backlog, weekly demos." },
            { n: "04", t: "Handover", d: "Docs, runbooks, training. Your team owns it." },
          ].map((s) => (
            <div key={s.n} className="card-elevated rounded-2xl p-6">
              <div className="font-mono text-sm text-brand-2">{s.n}</div>
              <div className="mt-3 font-display text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
