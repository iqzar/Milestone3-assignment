'use client'
import Header from "../../header";
import { usePathname } from 'next/navigation'; // Using usePathname instead of useRouter
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Sanity client
import { PortableText } from '@portabletext/react'; // Sanity PortableText component
import { PortableTextBlock } from '@portabletext/types'; // PortableTextBlock type
import Image from "next/image";

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  imageUrl: string;
  content: PortableTextBlock[]; // Use PortableTextBlock[] for Sanity Portable Text content
}

export default function Content() {
  const pathname = usePathname(); // Using usePathname to get the current URL
  const slug = pathname?.split("/").pop(); // Extract slug from pathname
  
  const [post, setPost] = useState<BlogPost | null>(null); // State for storing the blog post data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    if (slug) {
      // Fetch the blog post data based on the slug from the URL
      const fetchPost = async () => {
        setLoading(true); // Set loading state
        setError(null); // Reset error state

        try {
          const postData = await client.fetch(
            `*[_type == "blog" && slug.current == $slug][0] {
              title,
              slug,
              description,
              publishedAt,
              "imageUrl": image.asset->url,
              content
            }`,
            { slug }
          );

          if (!postData) {
            throw new Error("Post not found. Please check the URL or try again later.");
          }

          setPost(postData); // Set the fetched post data
        } catch (err) {
          console.error("Error fetching post:", err);
          setError(err instanceof Error ? err.message : "An unexpected error occurred.");
        } finally {
          setLoading(false); // Set loading state to false after fetching
        }
      };

      fetchPost(); // Call the fetch function when slug is available
    }
  }, [slug]); // Run the effect when the slug changes

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>; // Show error message
  }

  if (!post) {
    return <div>Post not found.</div>; // Show error if post is not found
  }

  return (
    <main>
      <Header />
      <div className="flex justify-between mt-14 md:ml-20 md:mr-20">
        <div id="left" className="w-[60%]">
          <p className="text-xs text-white bg-green-600 border rounded-full px-1 py-1 w-16">Continent</p>
          <h1 className="text-3xl mt-4 font-bold mb-2">{post.title}</h1>
          <div className="flex space-x-2 text-[10px]">
            <p>Written by</p>
            <p>|</p>
            <p>Add a comment</p>
          </div>
           <Image
                         src={post.imageUrl}
                         alt={post.title}
                         width={150}
                         height={150}
                         className="md:w-full w-screen h-[150px] sm:h-[180px] lg:h-[200px] object-cover"
                       />
          <div className="content mt-8">
            {post.content && Array.isArray(post.content) ? (
              <PortableText value={post.content} />
            ) : (
              <p>No content available for this post.</p>
            )}
          </div>
        </div>

        <div id="right" className="w-[30%]">
          <div className="w-72 h-auto px-5 py-4">
            <h2 className="mb-2 text-lg font-semibold">DESTINATIONS</h2>
            <div className="flex justify-between text-sm mb-1">
              <p>Africa</p>
              <p className="border rounded-full px-3 bg-red-500">3</p>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <p>Europe</p>
              <p className="border rounded-full px-3 bg-green-500">6</p>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <p>Asia</p>
              <p className="border rounded-full px-3 bg-yellow-300">8</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>North America</p>
              <p className="border rounded-full px-3 bg-blue-500">6</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
