"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PostDetail from "@/components/sections/media/PostDetail";

export default function PostDetailPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://iwilltilimwell.com/backend/wp-json/wp/v2/posts/${params.id}`,
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    if (params?.id) fetchPost();
  }, [params?.id]);

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-[80vh]">
        <div className="container-main section-padding max-w-4xl py-8 md:py-12">
          <Link
            href="/media-hub"
            className="inline-flex items-center gap-1.5 px-4 py-2 mb-6 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Media Hub
          </Link>
          <PostDetail post={post} loading={loading} />
        </div>
      </main>
      <Footer />
    </>
  );
}