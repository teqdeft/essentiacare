"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-800 shadow-lg shadow-primary/25 hover:shadow-primary/40",
  accent:
    "bg-accent text-white hover:bg-accent-600 shadow-lg shadow-accent/25 hover:shadow-accent/40",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  "outline-white":
    "border-2 border-white text-white hover:bg-white hover:text-primary",
  ghost:
    "bg-accent text-white hover:bg-accent-600 shadow-lg shadow-accent/25 hover:shadow-accent/40",
  white: "bg-white text-primary hover:bg-gray-100 shadow-lg",
 
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 gap-2",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
