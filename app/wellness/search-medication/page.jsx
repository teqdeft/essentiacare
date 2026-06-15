import { getPageSEO } from "@/lib/wordpress";
import SearchMedicationClient from "./SearchMedicationClient";

export async function generateMetadata() {
  return getPageSEO("search-medication");
}

export default function Page() {
  return <SearchMedicationClient />;
}