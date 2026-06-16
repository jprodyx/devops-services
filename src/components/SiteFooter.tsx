import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">
            ship<span className="text-gradient">.ops</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Freelance DevOps &amp; cloud engineering. I help teams ship faster, scale safely,
            and cut cloud bills without breaking production.
          </p>
          <div className="mt-6 flex gap-3">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">DevOps consulting</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Cloud migration</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Cost optimization</Link></li>
            <li><Link to="/courses" className="text-muted-foreground hover:text-foreground">Cohort training</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            <li><Link to="/courses" className="text-muted-foreground hover:text-foreground">Courses</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ship.ops — All rights reserved.</p>
          <p className="font-mono">Built for engineers who ship.</p>
        </div>
      </div>
    </footer>
  );
}
