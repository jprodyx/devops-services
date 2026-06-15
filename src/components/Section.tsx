import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-24 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
