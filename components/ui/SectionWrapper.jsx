import { cn } from "@/lib/utils";

export default function SectionWrapper({
  children,
  className,
  id,
  dark = false,
  gray = false,
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 section-padding",
        dark && "bg-brand-dark text-white",
        gray && "bg-gray-50",
        !dark && !gray && "bg-white",
        className,
      )}
    >
      <div className="container-main">{children}</div>
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
  centered = true,
  className,
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4">
        {title}{" "}
        {titleAccent && (
          <span className="text-[#A06BAF] font-script font-normal text-4xl md:text-5xl">
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
