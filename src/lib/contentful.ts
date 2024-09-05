import { createClient } from 'contentful';

const client = createClient({
  space: 'x0m1lhebwpct',
  accessToken: '_VqGhx7GJ1n79-11uiGx9e1ldYU9g2z1F_UUEVZy0gA',
  environment: 'master', // defaults to 'master' if not set
});

export async function getPost(id: string) {
  try {
    const entry = await client.getEntry(id);
    
    return {
      id: entry.sys.id,
      title: entry.fields.title as string,
      content: entry.fields.content as string,
      publishedAt: entry.fields.publishedAt as string,
      slug: entry.fields.slug as string,
    };
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
}
