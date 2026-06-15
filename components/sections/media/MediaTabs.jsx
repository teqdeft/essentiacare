"use client";

const tabs = [
  { key: "blogs", label: "Blogs" },
  { key: "articles", label: "Articles" },
  { key: "brochures", label: "Brochures" },
  { key: "inspirational", label: "Inspirational Quotes" },
  { key: "podcast", label: "Podcast" },
  { key: "knowledge-library", label: "Knowledge Library" },
];

export default function MediaTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            activeTab === tab.key
              ? "bg-primary text-white shadow-md"
              : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}