// lib/wordpress.js

const WP_API = "https://iwilltilimwell.com/backend";

// The WordPress/Yoast backend still serves the old brand in SEO fields
// (e.g. "Home iwilltilimwell", canonical URLs on iwilltilimwell.com).
// Rebrand that text on the fly so the live <title>/meta read "EssentiaCare".
// NOTE: we deliberately do NOT touch hosted asset URLs (og_image), which
// remain on the iwilltilimwell.com backend that actually serves them.
function rebrandText(str) {
  if (typeof str !== "string") return str;
  return str
    // spaced brand variants: iWILL 'til i'mWELL / iWill 'til i'mWell (straight or curly apostrophes)
    .replace(
      /iW(?:ILL|ill)\s*['’’]?\s*til\s*[iI]\s*['’’]?\s*mW(?:ELL|ell)/g,
      "EssentiaCare",
    )
    // standalone lowercase brand word (e.g. Yoast "Home iwilltilimwell")
    .replace(/iwilltilimwell/gi, "EssentiaCare");
}

function rebrandUrl(url) {
  if (typeof url !== "string") return url;
  // page URLs (canonical / og:url) point to the public site -> new domain
  return url.replace(/iwilltilimwell\.com/gi, "essentiacare.ai");
}

export async function getPageSEO(slug) {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/pages?slug=${slug}&_fields=yoast_head_json`,
      {
        next: { revalidate: 60 },
      },
    );
    const data = await res.json();
    const seo = data[0]?.yoast_head_json;

    if (!seo) return {};

    return {
      title: rebrandText(seo.title),
      description: rebrandText(seo.description),
      alternates: { canonical: rebrandUrl(seo.canonical) },
      openGraph: {
        title: rebrandText(seo.og_title),
        description: rebrandText(seo.og_description),
        url: rebrandUrl(seo.og_url),
        images: seo.og_image?.map((img) => ({ url: img.url })) ?? [],
      },
      twitter: {
        card: seo.twitter_card,
        title: rebrandText(seo.og_title),
        description: rebrandText(seo.og_description),
      },
    };
  } catch (error) {
    console.error(`Error fetching SEO for page: ${slug}`, error);
    return {};
  }
}
