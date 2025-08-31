import { Button, ButtonProps } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import React from "react";

interface CTAButtonProps extends ButtonProps {
  gaLabel?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  gaLabel = "cta",
  className,
  onClick,
  children,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "bg-primary text-primary-foreground hover:bg-primary/85 shadow-lg shadow-emerald-500/10 transition-transform hover:scale-[1.02]",
        "px-6 py-3 rounded-lg text-base font-semibold",
        className,
      )}
      onClick={(e) => {
        trackEvent("cta_click", { label: gaLabel });
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
