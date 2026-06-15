"use client";

import Link from "next/link";

function parseMediaContent(content) {
  if (!content) return { text: "", audioUrls: [] };

  const audioRegex = /\[audio\s+mp3="([^"]+)"\s*\]\s*(?:\[\/audio\])?/gi;
  const audioUrls = [];
  let match;

  while ((match = audioRegex.exec(content)) !== null) {
    audioUrls.push(match[1]);
  }

  const text = content
    .replace(/\[audio[^\]]*\]\s*(?:\[\/audio\])?/gi, "")
    .trim();

  return { text, audioUrls };
}

export default function MediaGrid({ posts, loading }) {
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block w-8 h-8 border-[3px] border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-gray-500 text-sm mt-3">Loading...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
        <p className="text-xl font-medium text-gray-500">
          No posts found in this category.
        </p>
        <p className="text-sm mt-1 text-gray-400">
          Check back soon for new content!
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
        >
          {/* Thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {post.blog_overview_image_url ? (
              <img
                src={post.blog_overview_image_url}
                alt={post.acf?.blog_title || ""}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
                }}
              >
                <img
                  src="/images/logo-favi.svg"
                  alt=""
                  className="w-16 h-16 opacity-30"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-primary mb-2 leading-snug line-clamp-2">
              {post.acf?.blog_title || post.title?.rendered || ""}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              {(() => {
                const cat = post.class_list?.find((c) =>
                  c.startsWith("category-"),
                );
                const name = cat ? cat.replace("category-", "") : "";
                return name.charAt(0).toUpperCase() + name.slice(1);
              })()}
              <span className="mx-1.5 text-gray-300">|</span>
              {post.acf?.blog_date || ""}
            </p>

            {post.acf?.blog_short_description &&
              (() => {
                const { text, audioUrls } = parseMediaContent(
                  post.acf.blog_short_description,
                );
                return (
                  <>
                    {text && (
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {text}
                      </p>
                    )}
                    {audioUrls.map((url, idx) => (
                      <audio
                        key={idx}
                        controls
                        preload="none"
                        src={url}
                        className="w-full mb-4 h-10"
                      >
                        Your browser does not support audio playback.
                      </audio>
                    ))}
                  </>
                );
              })()}

            <div className="flex justify-end mt-auto">
              <Link
                href={`/media-hub/${post.id}`}
                className="px-5 py-2 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}