import Image from 'next/image';
import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-dark text-white font-sans">
      <header className="p-4 bg-black shadow-md">
        <h1 className="text-3xl font-bold text-center">Creative Blog Space</h1>
      </header>

      <main className="container mx-auto p-4">
        <section className="space-y-6">
          {/* Example blog post section */}
          <article className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Blog Thumbnail"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4 md:w-2/3">
              <h2 className="text-xl font-bold">Blog Post Title</h2>
              <p className="text-gray-400 mt-2">
                A detailed description or introduction to the blog post goes here. It provides context and encourages the reader to click and read more.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">Category</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-sm">Tag</span>
              </div>
              <a
                href="/post/some-id"
                className="block mt-4 text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </article>

          {/* Repeat the article for more posts */}
          <article className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Blog Thumbnail"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4 md:w-2/3">
              <h2 className="text-xl font-bold">Another Blog Post</h2>
              <p className="text-gray-400 mt-2">
                This is another blog post description. You can dynamically load these sections from your data source.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">Tech</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">News</span>
              </div>
              <a
                href="/post/another-id"
                className="block mt-4 text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="p-4 bg-black text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Creative Blog Space. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
