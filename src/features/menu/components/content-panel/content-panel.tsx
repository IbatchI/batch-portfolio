"use client";

import { useDictionary } from "@/src/features/shared/components/dictionary-provider";
import type { MenuSection } from "../main-menu/main-menu";
import { AboutContent } from "./components/about-content";
import { ExperienceContent } from "./components/experience-content";
import { SkillsContent } from "./components/skills-content";
import { EducationContent } from "./components/education-content";
import { ContactContent } from "./components/contact-content";

export function ContentPanel({ activeSection }: { activeSection: MenuSection }) {
  const dictionary = useDictionary();

  return (
    <div className="pixel-border border-border bg-card p-4 md:p-6 h-full overflow-auto">
      <div className="text-xs text-muted-foreground mb-4 tracking-wider">
        {dictionary.content.description}
      </div>

      {activeSection === "about" && <AboutContent />}
      {activeSection === "experience" && <ExperienceContent />}
      {activeSection === "skills" && <SkillsContent />}
      {activeSection === "education" && <EducationContent />}
      {activeSection === "contact" && <ContactContent />}
    </div>
  );
}
