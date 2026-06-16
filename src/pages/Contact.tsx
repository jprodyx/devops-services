import { useState } from "react";
import { Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function ContactPage() {
  usePageMeta({
    title: "Contact — Book a Discovery Call | ship.ops",
    description: "Tell me about your project. Freelance DevOps consulting, cloud migrations, and cohort training enrollment. Reply within 48 hours.",
  });

  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden pt-20 pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-glow)" }} />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl">
            Let's talk about <span className="text-gradient">your stack.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            The more context you give me, the better the first reply. I respond personally within 48 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-6">
            {[
              { i: Mail, t: "Email", v: "hello@ship.ops" },
              { i: Clock, t: "Response time", v: "Within 48 hours" },
              { i: MapPin, t: "Working hours", v: "Remote · CET / overlaps PT–ET" },
            ].map((c) => (
              <div key={c.t} className="card-elevated flex items-start gap-4 rounded-2xl p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand glow-ring">
                  <c.i className="h-4 w-4 text-primary-foreground" strokeWidth={2.25} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="mt-1 text-sm font-medium">{c.v}</div>
                </div>
              </div>
            ))}

            <div className="card-elevated rounded-2xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What happens next</div>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>1. I read your message personally.</li>
                <li>2. I reply with a few sharper questions, or schedule a call.</li>
                <li>3. You get a concrete proposal within a week.</li>
              </ol>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-elevated rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand glow-ring">
                  <Check className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Message received.</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">Thanks — I'll get back to you within 48 hours from hello@ship.ops.</p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Ada Lovelace" required />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <Field label="Company" name="company" placeholder="Acme Inc" />

                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What do you need help with?</label>
                  <select name="topic" className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand">
                    <option>DevOps consulting / platform build</option>
                    <option>Cloud migration</option>
                    <option>FinOps / cost optimization</option>
                    <option>Cohort training enrollment</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tell me about your project</label>
                  <textarea name="message" required rows={6} placeholder="Stack, team size, what's broken or what you're trying to ship..."
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-brand" />
                </div>

                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:scale-[1.02]">
                  Send message <Send className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} placeholder={placeholder} required={required}
        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-brand" />
    </div>
  );
}
