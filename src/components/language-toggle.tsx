import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  label: string;
  language: string;
  onClick: () => void;
}

export function LanguageToggle({ className, label, language, onClick }: LanguageToggleProps) {
  const nextLang = language === "pt" ? "EN" : "PT";

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn("font-bold text-xs", className)}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <span className="h-full w-full flex items-center justify-center">{nextLang}</span>
    </Button>
  );
}
