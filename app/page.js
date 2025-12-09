import { getResources } from "@/lib/contentful";
import ResourceTabs from "@/components/ResourceTabs";
import Home from "@/components/Home";

// 🔹 Force dynamic server-side rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ResourcesPage() {
  // Fetch fresh resources every request
  const resources = await getResources();

  return (
    <main>
      <Home />
      <ResourceTabs resources={resources} />
    </main>
  );
}
