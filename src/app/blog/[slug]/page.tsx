'use client'

import Header from "../../header";
import { usePathname } from 'next/navigation'; // Using usePathname instead of useRouter
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Sanity client
import { PortableText } from '@portabletext/react'; // Sanity PortableText component
import { PortableTextBlock } from '@portabletext/types'; // PortableTextBlock type
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/app/comment";
import Footer from "@/app/footer";

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  imageUrl: string;
  secondaryImage: string,
  writer: string,
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
              writer, // Fetch writer name
              "image2Url": secondaryImage.asset->url,
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
    <main className="bg-slate-100">
      <Header />
      <div className="flex md:flex-row flex-col md:flex-wrap md:justify-between">
        <div id="left" className="w-full md:w-[70%] pt-14 md:pl-20 md:pr-20 bg-white">
          <p className="text-xs text-white bg-green-600 border rounded-full px-1 py-1 w-16">Continent</p>
          <h1 className="text-3xl mt-4 font-bold mb-2 text-sec">{post.title}</h1>
          <div className="flex space-x-2 text-[10px] text-sec">
            <p>{post.writer}</p>
            <p>|</p>
            <Link href='#comment' className="text-sec">Add a comment</Link>
          </div>
           <Image
             src={post.secondaryImage}
             alt={post.title}
             width={150}
             height={150}
             className="md:w-full w-screen h-[150px] sm:h-[180px] lg:h-[200px] object-cover mt-5 mb-5"
           />
          <div className="content mt-8 text-sm leading-loose text-sec md:ml-0 md:mr-0 ml-5 mr-5">
            {post.content && Array.isArray(post.content) ? (
              <PortableText value={post.content} />
            ) : (
              <p>No content available for this post.</p>
            )}
          </div>
          <h2 id="comment" className="text-sm text-sec font-bold mt-5 mb-5 border-t-2 border-med pt-5">RELATED POSTS</h2>

          <div className="flex flex-wrap justify-between space-x-6 mb-8 md:ml-0 md:mr-0 ml-5 mr-5">
              <Image src={'/'} alt="image1" width={80} height={30}/>
              <div>
                <h3 className="text-sm mb-2 font-semibold text-sec">Top 10 places to visit in Istanbul</h3>
                <p className="text-sm text-sec">1 week ago</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between space-x-6 mb-8">
              <Image src={'/'} alt="image1" width={80} height={30}/>
              <div>
                <h3 className="text-sm mb-2 font-semibold text-sec">Top 10 places to visit in Istanbul</h3>
                <p className="text-sm text-sec">1 week ago</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between space-x-6 mb-8">
              <Image src={'/'} alt="image1" width={80} height={30}/>
              <div>
                <h3 className="text-sm mb-2 font-semibold text-sec">Top 10 places to visit in Istanbul</h3>
                <p className="text-sm text-sec">1 week ago</p>
              </div>
            </div>

             <h2 id="comment" className="text-sm text-sec font-bold mt-5 border-t-2 border-sec pt-5">LEAVE A REPLY</h2> 
             <p className="text-xs text-sec">Your email will not be published. Required fields are marked.</p>
             <CommentSection />
        </div>

        <div id="right" className="w-full md:w-[30%]">
          <div className="w-full md:w-60 h-auto md:pt-10 md:ml-10 ml-5 md:mr-0 mr-5 pl-5 pr-5 pb-5 mt-10 bg-white">
            <h2 className="mb-2 text-lg font-semibold text-sec">DESTINATIONS</h2>
            <div className="flex justify-between text-sm mb-1 text-sec">
              <p>Africa</p>
              <p className="border rounded-full px-3 bg-red-500">3</p>
            </div>
            <div className="flex justify-between text-sm mb-1 text-sec">
              <p>Europe</p>
              <p className="border rounded-full px-3 bg-green-500">6</p>
            </div>
            <div className="flex justify-between text-sm mb-1 text-sec">
              <p>Asia</p>
              <p className="border rounded-full px-3 bg-yellow-300">8</p>
            </div>
            <div className="flex justify-between text-sm text-sec">
              <p>North America</p>
              <p className="border rounded-full px-3 bg-blue-500">6</p>
            </div>
          </div>

          <div className="w-full md:w-60 h-auto md:pt-5 md:ml-10 ml-5 md:mr-0 mr-5 pl-5 pr-5 pb-2 mt-10 bg-white">
            <h2 className="mb-6 text-lg font-semibold text-sec">RECENT STORIES</h2>
            <div className="flex space-x-6 mb-5">
              <Image src={'/'} alt="image1" width={30} height={30}/>
              <div>
                <h3 className="text-xs mb-2 font-semibold text-sec">Best places in Karachi</h3>
                <p className="text-xs text-sec">1 week ago</p>
              </div>
            </div>

            <div className="flex space-x-6 mb-5">
              <Image src={'/'} alt="image1" width={30} height={30}/>
              <div>
                <h3 className="text-xs mb-2 font-semibold text-sec">Top 10 places to visit in Istanbul</h3>
                <p className="text-xs text-sec">1 week ago</p>
              </div>
            </div>

            <div className="flex space-x-6 mb-5">
              <Image src={'/'} alt="image1" width={30} height={30}/>
              <div>
                <h3 className="text-xs mb-2 font-semibold text-sec">The Ultimate Dubai Bucket List</h3>
                <p className="text-xs text-sec">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <Footer />
    </main>
  );
}
