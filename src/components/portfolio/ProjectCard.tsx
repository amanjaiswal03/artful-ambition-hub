import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export type Project = {
  title: string;
  subtitle?: string;
  image: string;
  tags?: string[];
  href?: string;
};

export function ProjectCard({ title, subtitle, image, tags = [], href }: Project) {
  const content = (
    <Card className={cn(
      "group overflow-hidden border-0 bg-card shadow-sm hover:shadow-md transition-shadow animate-enter",
      "rounded-lg"
    )}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${title} – UI/UX case study preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {href && (
          <div className="absolute right-3 top-3 rounded-full bg-background/70 px-2 py-1 text-xs text-foreground backdrop-blur">
            View <ArrowUpRight className="ml-1 inline h-3 w-3" />
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a href={href} aria-label={`${title} case study`} className="block hover-scale">
        {content}
      </a>
    );
  }

  return content;
}
