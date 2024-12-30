'use client';

import React, { useEffect, useState } from 'react';
import fetchBlogs from '../sanity/utils/fetchBlogs'; // Import the fetch function
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation


interface Blog {
  title: string;
  slug: { current: string };
  description: string;
  imageUrl: string;
  publishedAt: string;
}

const Section: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs(); // Fetch the blog data
      setBlogs(data); // Update the state with the fetched data
    };

    getBlogs(); // Call the function to fetch the blogs
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <main className="md:ml-10 md:mr-20 md:mt-20 md:mb-10 ml-5 mr-5">
    
      {/* Blog Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        {blogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug.current}`} passHref>
            <div
              className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={150}
                height={150}
                className="md:w-full w-200 h-[150px] sm:h-[180px] lg:h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">{blog.description}</p>
                <p className="text-xs text-gray-400 mt-4">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Section;
