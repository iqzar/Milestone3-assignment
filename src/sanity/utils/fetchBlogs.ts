import { client } from "@/sanity/lib/client"; // Import the Sanity client

export default async function fetchBlogs() {
  // Fetch the latest blogs from Sanity, including content
  const data = await client.fetch(
    `*[_type == "blog"] | order(publishedAt desc)[0...4] {
      title,
      slug,
      description,
      publishedAt,
      "imageUrl": image.asset->url,
      content
    }`
  );

  return data; // Return the fetched blogs including content
}
