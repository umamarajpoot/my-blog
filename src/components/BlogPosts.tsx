import Image from 'next/image';
import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      title: "Bill Walsh leadership lessons",
      description: "Like to know the secrets of transforming a 2-14 team into a 3× Super Bowl winning Dynasty?",
      tags: ["Leadership", "Management", "Presentation"],
      image: "Image (16).png",
    },
    {
      title: "PM mental models",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Product", "Research", "Frameworks"],
      image: "Image (17).png",
    },
    {
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Design", "Research", "Presentation"],
      image: "Image (18).png",
    },
    {
      title: "How collaboration makes us better designers",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Design", "Research", "Presentation"],
      image: "Image (19).png",
    },
    {
      title: "Our top 10 Javascript frameworks to use",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Software Development", "Tools", "SaaS"],
      image: "Image (20).png",
    },
    {
      title: "Podcast: Creating a better CX Community",
      description: "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: ["Podcasts", "Customer Success", "Presentation"],
      image: "Image (21).png",
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-5">
      <h1 className="text-center text-3xl font-bold mb-10">All blog posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg">
            <Image src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-lg mb-8" />
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
  <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all">
    Previous
  </button>
  <span className="text-white mx-5 font-bold">1</span>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all">
    Next
  </button>
</div>

    </div>
  );
};

export default BlogPosts;
