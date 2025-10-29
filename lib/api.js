import { client } from "./contentful";

export async function getResources() {
  const res = await client.getEntries({ content_type: "resources" });
  return res.items;
}
