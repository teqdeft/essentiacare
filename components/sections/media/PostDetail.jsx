"use client";

import { Calendar, Folder } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function PostDetail({ post, loading }) {
  const getCategory = () => {
    if (!post?.class_list) return "Blogs";
    const cat = post.class_list.find((c) => c.startsWith("category-"));
    if (!cat) return "Blogs";
    const name = cat.replace("category-", "");
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const decodeHTML = (html) => {
    if (!html) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const processShortcodes = (html) => {
    if (!html) return "";
    return html.replace(
      /\[audio\s+mp3="([^"]+)"\s*\]\s*(?:\[\/audio\])?/gi,
      (_, url) =>
        `<audio controls preload="none" src="${url}" style="display:block;width:100%;margin:1.25rem 0;">Your browser does not support audio playback.</audio>`,
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm text-center py-32">
        <div className="inline-block w-8 h-8 border-[3px] border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-gray-500 text-sm mt-3">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white rounded-2xl shadow-sm text-center py-32">
        <p className="text-gray-500 font-medium">Post not found</p>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post?.acf?.blog_title || "";

  return (
    <article className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
        {post.acf?.blog_title || post.title?.rendered || ""}
      </h1>

      {/* Underline */}
      <div className="w-20 h-[3px] bg-primary mb-5" />

      {/* Meta */}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-8">
        <span className="flex items-center gap-1.5">
          <Folder className="w-4 h-4" />
          Category:{" "}
          <span className="text-primary font-medium">{getCategory()}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          {post.acf?.blog_date || ""}
        </span>
      </div>

      {/* Featured Image */}
      {post.blog_detail_image_url && (
        <div className="rounded-2xl overflow-hidden shadow-md mb-8 bg-gray-50">
          <img
            src={post.blog_detail_image_url}
            alt={post.acf?.blog_title || ""}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      )}

      {/* Full Description */}

      {/* Full Description */}
      {post.acf?.blog_full_description && (
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            prose-strong:text-gray-900
            prose-ul:text-gray-700 prose-ol:text-gray-700
            prose-blockquote:border-primary prose-blockquote:text-gray-600
            [&_iframe]:w-full [&_iframe]:rounded-xl [&_iframe]:my-6
            [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0"
          dangerouslySetInnerHTML={{
            __html: processShortcodes(
              decodeHTML(post.acf.blog_full_description),
            ),
          }}
        />
      )}

      {/* Fallback */}
      {!post.acf?.blog_full_description && post.acf?.blog_short_description && (
        <p className="text-gray-700 text-lg leading-relaxed">
          {post.acf.blog_short_description}
        </p>
      )}
    </article>
  );
}
