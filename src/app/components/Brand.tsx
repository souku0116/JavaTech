import { cn } from "@/app/components/ui/utils";
import { BRAND_NAME, BRAND_TAGLINE } from "@/app/config/site";
import devoraMarkUrl from "@/assets/devora-mark.svg";

type BrandProps = {
  className?: string;
  logoClassName?: string;
  nameClassName?: string;
  taglineClassName?: string;
};

export function Brand({ className, logoClassName, nameClassName, taglineClassName }: BrandProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src={devoraMarkUrl}
        alt={`${BRAND_NAME} logo`}
        className={cn("h-11 w-11 rounded-lg", logoClassName)}
      />
      <div className="flex flex-col">
        <span className={cn("text-xl font-bold leading-none tracking-tight", nameClassName)}>
          {BRAND_NAME}
        </span>
        <span className={cn("text-xs font-medium tracking-wide", taglineClassName)}>
          {BRAND_TAGLINE}
        </span>
      </div>
    </div>
  );
}
