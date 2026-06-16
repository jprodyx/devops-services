import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { usePageMeta } from "@/hooks/usePageMeta";

const courses = [
  {
    name: "Kubernetes in Production",
    weeks: "6 weeks", next: "Starts Sep 9", price: "$1,490", seats: "20 seats", tag: "Most popular",
    body: "Go from kubectl-curious to running production clusters with confidence. GitOps, autoscaling, security, observability, the whole story.",
    modules: ["Cluster anatomy & networking deep-dive","GitOps with ArgoCD","Helm, Kustomize, and progressive delivery","Autoscaling, capacity, and node tuning","RBAC, secrets, and supply chain security","Capstone: ship a real app, end-to-end"],
  },
  {
    name: "Terraform & IaC Mastery",
    weeks: "4 weeks", next: "Starts Aug 5", price: "$990", seats: "25 seats",
    body: "Write Terraform you'd actually want to maintain. Module design, state management at scale, and CI patterns that survive a real team.",
    modules: ["Module design & versioning","State at scale: workspaces, remote backends","Testing with Terratest & checkov","Pipelines, plan reviews, drift detection","Capstone: multi-env infra repo"],
  },
  {
    name: "Cloud FinOps Bootcamp",
    weeks: "3 weeks", next: "Starts Aug 26", price: "$790", seats: "30 seats",
    body: "Stop hemorrhaging money to AWS. Learn the FinOps playbook to cut 30–60% off your cloud bill without sacrificing reliability.",
    modules: ["Cost visibility & tagging strategy","Rightsizing, savings plans, spot","Architecture-level cost wins","Cost guardrails in CI/CD","Capstone: optimization plan for your account"],
  },
];

export default function CoursesPage() {
  usePageMeta({
    title: "Cohort Courses — Kubernetes, Terraform, FinOps | ship.ops",
    description: "Live cohort-based DevOps and cloud engineering courses. Kubernetes in Production, Terraform & IaC Mastery, and Cloud FinOps Bootcamp.",
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10 noise-grid opacity-30" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-brand" />
            Next cohorts opening for enrollment
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Train your team on what <span className="text-gradient">actually ships</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Live, cohort-based courses taught by an engineer who runs this stuff in production every week. Small groups. Real labs. No fluff.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-brand-2" /> Small cohorts</div>
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-2" /> Live + recorded</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-brand-2" /> Completion certificate</div>
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="space-y-6">
          {courses.map((c) => (
            <div key={c.name} className="card-elevated grid gap-8 rounded-3xl p-8 lg:grid-cols-[1.4fr_1fr] lg:p-12">
              <div>
                {c.tag && (
                  <span className="inline-block rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground glow-ring">
                    {c.tag}
                  </span>
                )}
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{c.name}</h2>
                <p className="mt-3 text-muted-foreground">{c.body}</p>
                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What you'll learn</div>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {c.modules.map((m) => (
                      <li key={m} className="flex gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-6">
                <div className="font-display text-4xl font-bold text-gradient">{c.price}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.weeks} · cohort-based</div>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <dt className="text-muted-foreground">Next cohort</dt>
                    <dd className="font-medium">{c.next}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <dt className="text-muted-foreground">Availability</dt>
                    <dd className="font-medium">{c.seats}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd className="font-medium">Live + recorded</dd>
                  </div>
                </dl>
                <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:scale-[1.02]">
                  Enroll team <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-center text-xs text-muted-foreground">Team discounts for 3+ seats</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
