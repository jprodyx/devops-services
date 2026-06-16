import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function AboutPage() {
  usePageMeta({
    title: "About — Senior DevOps & Cloud Engineer | ship.ops",
    description: "Senior DevOps engineer with 8+ years building production platforms on AWS, GCP, and Azure. Freelance, embedded, and cohort training.",
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <Section className="!pb-12">
        <div className="mx-auto max-w-3xl">
          <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">About</span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl">
            I build the platforms<br />
            <span className="text-gradient">teams wish they'd built two years ago.</span>
          </h1>

          <div className="prose prose-invert mt-10 max-w-none space-y-6 text-lg text-muted-foreground">
            <p>Hey — I'm a senior DevOps and cloud engineer. For the last eight years I've been the person teams call when their infra is on fire, their AWS bill just doubled, or they're trying to get from "we ssh into a box" to "we ship to production twenty times a day."</p>
            <p>I've worked across early-stage startups, Series B scale-ups, and a couple of enterprises that needed serious unsticking. Same playbook every time: ruthless simplicity, real automation, and platforms that engineers actually want to use.</p>
            <p>I freelance now because the highest-leverage work I do is short, intense, and embedded. Audit. Build. Train. Hand it back better than I found it.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Principles" title={<>How I work</>}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Boring tech wins", d: "I'll pick PostgreSQL, Terraform, and Kubernetes over the new shiny thing every time. Your platform should be predictable, not impressive on Hacker News." },
            { t: "Document or it didn't happen", d: "Every engagement ends with runbooks, architecture diagrams, and recorded walkthroughs. Your team owns it after I leave." },
            { t: "Bias to handover", d: "My job is to make myself unnecessary. I train your engineers as we go so you're not stuck with a black box." },
          ].map((p) => (
            <div key={p.t} className="card-elevated rounded-2xl p-7">
              <h3 className="font-display text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title={<>Some <span className="text-gradient">numbers</span></>}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "8+", v: "Years in production DevOps" },
            { k: "30+", v: "Cloud migrations led" },
            { k: "$3M+", v: "In cloud spend optimized" },
            { k: "40+", v: "Engineering teams trained" },
          ].map((s) => (
            <div key={s.v} className="card-elevated rounded-2xl p-6 text-center">
              <div className="font-display text-4xl font-bold text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:scale-[1.03]">
            Work with me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
