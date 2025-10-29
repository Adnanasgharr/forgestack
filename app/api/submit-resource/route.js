import { createClient } from 'contentful-management';

export async function POST(req) {
  try {
    const { title, description, url, category, tags } = await req.json();

    const client = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master');

    const entry = await environment.createEntry('resource', {
      fields: {
        title: { 'en-US': title },
        description: { 'en-US': description },
        url: { 'en-US': url }, // ✅ fixed lowercase field ID
        category: { 'en-US': category },
        tags: { 'en-US': tags ? tags.split(',').map(t => t.trim()) : [] },
        slug: { 'en-US': title.toLowerCase().replace(/\s+/g, '-') },
      },
    });

    return new Response(
      JSON.stringify({ success: true, entryId: entry.sys.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('❌ Contentful API error:', error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
