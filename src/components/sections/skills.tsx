import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>

      </div>
    </section>
  );
};

export default SkillsSection;
