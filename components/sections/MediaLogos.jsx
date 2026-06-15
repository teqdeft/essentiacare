export default function MediaLogos() {
  const logos = [
    { name: "FOX", src: "/images/svg/fox.svg" },
    { name: "NBC", src: "/images/svg/nbc-news.png" },
    { name: "USA Today", src: "/images/svg/usa-today.svg" },
    { name: "CBS", src: "/images/svg/ncn.svg" },
    { name: "Daily Herald", src: "/images/svg/daily-heart.svg" },
    { name: "InkeyNews", src: "/images/svg/daily-news.svg" },

  ];

  return (
    <section className="bg-white section-padding py-12 border-y border-gray-100">
      <div className="container-main">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          As Seen On <span className="text-primary">and over 550 news sites</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div key={logo.name} className="cursor-default">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Verified by BrandPush.co
        </p>
      </div>
    </section>
  );
}