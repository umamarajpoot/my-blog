import Image from "next/image";

const posts = [
  {
    title: "UX review presentations",
    date: "Sunday, 1 Jan 2023",
    description: "How do you create compelling presentations...",
    tags: ["Design", "Research"],
    image: "Image (12).png",
  },
  {
    title: "Breaking your API Stack",
    date: "Sunday, 1 Jan 2023",
    description: "The rise of RESTful APIs has been met...",
    tags: ["API", "Development"],
    image: "Image (13).png",
  },
  {
    title: "Exploring Web 3.0 Concepts",
    date: "Monday, 2 Jan 2023",
    description: "Discover the latest trends in decentralized web technologies...",
    tags: ["Web3", "Blockchain"],
    image: "Image (14).png",
  },
];   
  
export default function RecentPosts() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Recent blog posts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-800 text-white p-4 rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover rounded-lg mb-8"
            />
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p className="mt-2">{post.description}</p>
            <div className="mt-4 flex space-x-2">
              {post.tags.map((tag, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 text-sm rounded-full ${
                    tag === "Design" || tag === "API"
                      ? "bg-blue-200 hover:bg-blue-300"
                      : "bg-pink-200 hover:bg-pink-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

  