import { portfolioData } from "@/src/features/shared/lib/portfolio-data";

export function ContactContent() {
  return (
    <div className="font-mono text-sm space-y-3">
      <div className="text-primary text-glow-cyan">
        $ contact --init lucas.hernandez
      </div>
      <div className="text-muted-foreground">► signal established...</div>

      <div className="space-y-2 mt-4">
        <div>
          <span className="text-secondary">📧 mail: </span>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-foreground hover:text-primary transition-colors"
          >
            {portfolioData.contact.email}
          </a>
        </div>
        <div>
          <span className="text-secondary">📞 tel: </span>
          <a
            href={`tel:${portfolioData.contact.phone.replace(/\s/g, "")}`}
            className="text-foreground hover:text-primary transition-colors"
          >
            {portfolioData.contact.phone}
          </a>
        </div>
        <div>
          <span className="text-secondary">🔗 web: </span>
          <a
            href={`https://www.${portfolioData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            {portfolioData.contact.linkedin}
          </a>
        </div>
      </div>
    </div>
  );
}
