"use client";

import Button from "@/components/ui/Button";

const podcasts = [
  {
    image: "/images/about-us/ceo.jpeg",
    title: "Finding your jill",
    category: "Podcast",
    date: "27 August 2025",
  },
  // Add more podcasts here later
];

export default function PodcastContent() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {podcasts.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              {item.category} <span className="mx-1.5 text-gray-300">|</span>{" "}
              {item.date}
            </p>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" href="#">
                Read/Audio Read More
              </Button>
            </div>
          </div>
        </div>
      ))}

      {podcasts.length === 0 && (
        <div className="col-span-full text-center py-16 text-gray-500">
          <p className="text-xl font-medium">No podcasts available yet.</p>
          <p className="text-sm mt-1">Check back soon!</p>
        </div>
      )}
    </div>
  );
}
