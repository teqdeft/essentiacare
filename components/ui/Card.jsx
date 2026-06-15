import { cn } from "@/lib/utils";

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
        hover &&
          "hover:shadow-[0_12px_34px_rgba(96,67,119,0.16)] hover:-translate-y-1 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className }) {
  return (
    <div className={cn("w-full h-48 bg-gray-200 overflow-hidden", className)}>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
