"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import MediaTabs from "@/components/sections/media/MediaTabs";
import MediaGrid from "@/components/sections/media/MediaGrid";
import { ArrowLeft, ArrowRight } from "lucide-react";
import axios from "axios";
import Link from "next/link";

export default function MediaHubPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("blogs");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://iwilltilimwell.com/backend/wp-json/wp/v2/posts?per_page=100",
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.class_list?.includes(`category-${activeTab}`),
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden py-14 md:py-20"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-10 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <div className="relative container-main section-padding text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Media Hub
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Stay informed with the latest health and wellness insights,
              updates, and stories from EssentiaCare.
            </p>
          </div>
        </section>

        {/* Tabs + Content */}
        <section className="section-padding py-12 md:py-16 bg-gray-50 min-h-[60vh]">
          <div className="container-main max-w-6xl">
            <MediaTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <MediaGrid posts={filteredPosts} loading={loading} />
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="relative overflow-hidden section-padding py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative container-main text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Start Your Wellness Journey
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Access doctors, therapists, and veterinarians 24/7 at an
              affordable value.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="lg" href="/get-started">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="white" size="lg" href="/pricing">
                View Pricing <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
