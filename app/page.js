import { getResources } from "@/lib/contentful";
import ResourceTabs from "@/components/ResourceTabs";
import Home from "@/components/Home";

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <main>
      <Home/>
      <ResourceTabs resources={resources} />
    </main>
  );
}
