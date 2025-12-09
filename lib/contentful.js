import { createClient } from "contentful";

export const revalidate = 0; // ⬅️ Disable Next.js caching globally

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Get all resources (always fetch fresh data)
export async function getResources() {
  const res = await client.getEntries(
    { content_type: "resource" },
    { cache: "no-store" } // ⬅️ Prevent caching
  );
  return res.items;
}

// Get single resource by slug (always fresh)
export async function getResourceBySlug(slug) {
  const res = await client.getEntries(
    {
      content_type: "resource",
      "fields.slug": slug,
    },
    { cache: "no-store" } // ⬅️ Prevent caching
  );
  return res.items[0];
}
