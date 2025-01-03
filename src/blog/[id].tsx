import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const BlogPost = ({ post }: { post: Post | null }) => {
  const router = useRouter();

  if (!post) {
    return (
      <div className="text-white text-center py-10">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg"
          onClick={() => router.push("/blog")}
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-10 px-5">
      <h1 className="text-center text-3xl font-bold mb-10">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-10"
      />
      <p className="text-lg mb-4">{post.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, idx: React.Key | null | undefined) => (
          <span
            key={idx}
            className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg"
        onClick={() => router.push("/blog")}
      >
        Back to Blog
      </button>
    </div>
  );
};

// Correctly placed getInitialProps outside the component
BlogPost.getInitialProps = async ({ query }: { query: { id: string } }) => {
  const posts = [
    {
      id: 1,
      title: "Bill Walsh leadership lessons",
      description: "Like to know the secrets of transforming a 2-14 team into a 3× Super Bowl winning Dynasty?",
      tags: ["Leadership", "Management", "Presentation"],
      image: "/images/image-16.png",
    },
    {
      id: 2,
      title: "PM mental models",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Product", "Research", "Frameworks"],
      image: "/images/image-17.png",
    },
    {
      id: 3,
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Design", "Research", "Presentation"],
      image: "/images/image-18.png",
    },
  ];

  const post = posts.find((p) => p.id.toString() === query.id);

  return { post };
};

export default BlogPost;
