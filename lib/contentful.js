import { createClient } from "contentful";

// Disable caching for Next.js App Router
export const revalidate = 0;
export const dynamic = "force-dynamic";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Get all resources (always fresh)
export async function getResources() {
  const res = await client.getEntries({ content_type: "resource" });
  return res.items;
}

// Get single resource by slug (always fresh)
export async function getResourceBySlug(slug) {
  const res = await client.getEntries({
    content_type: "resource",
    "fields.slug": slug,
  });
  return res.items[0] || null;
}
