import React from "react";

const GridComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Climate Endgame: Exploring catastrophic climate change scenarios
        </h1>
      </header>

      <main className="grid gap-8 bg-gray-800 p-6 rounded-lg">
        <article className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="Image (15).png" // Yahan apni image URL daalein
              alt="Grid system"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">
              Grid system for better Design User Interface
            </h2>
            <p className="text-gray-300 mb-4">
              A grid system is a design tool used to arrange content on a webpage.
              It is a series of vertical and horizontal lines that create a matrix
              of intersecting points, which can be used to align and organize
              page elements.
            </p>
            <p className="text-gray-300 mb-6">
              Grid systems are used to create a consistent look and feel across a
              website, and can help to make the layout more visually appealing and
              easier to navigate.
            </p>
            <div className="flex justify-center gap-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                Design
              </span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                Interface
              </span>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default GridComponent;
