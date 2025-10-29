import { createClient } from "contentful";



const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  
});

// Get all resources
export async function getResources() {
  const res = await client.getEntries({ content_type: "resource" });
  return res.items;
}

// Get single resource by slug
export async function getResourceBySlug(slug) {
  const res = await client.getEntries({
    content_type: "resource",
    "fields.slug": slug,
  });
  return res.items[0];
}
