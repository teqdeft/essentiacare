import { getPageSEO } from "@/lib/wordpress";
import MediaHubClient from "./MediaHubClient";

export async function generateMetadata() {
  return getPageSEO("media-hub");
}

export default function Page() {
  return <MediaHubClient />;
}