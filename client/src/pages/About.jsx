import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-screen-xl p-6 text-center bg-white dark:bg-gray-900 shadow-md rounded-lg">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-gray-100 my-7">
            About Modi's Blog
          </h1>
          <div className="text-lg text-gray-600 dark:text-gray-400 flex flex-col gap-8">
            <p className="text-blue-600 dark:text-blue-300">
              Welcome to <span className="underline">Modi's Blog</span> - a digital sanctuary where
              <span className="underline"> curiosity meets creativity</span>, and where the realms of
              <span className="underline"> technology</span>, <span className="underline">philosophy</span>,
              <span className="underline"> mathematics</span>, and beyond intertwine in a symphony
              of exploration.
            </p>
            <p className="text-green-600 dark:text-green-300">
              Embark on a journey with me, your humble curator, as we delve into the ever-expanding
              universe of <span className="underline">knowledge</span> and <span className="underline">ideas</span>.
              From unraveling the mysteries of <span className="underline">JavaScript libraries</span> to
              pondering the profound depths of <span className="underline">philosophical inquiry</span>,
              there's something here for every seeker of <span className="underline">enlightenment</span>.
            </p>
            <p className="text-purple-600 dark:text-purple-300">
              At <span className="underline">Modi's Blog</span>, we believe in the power of
              <span className="underline"> intellect</span> and <span className="underline">imagination</span>
              to shape our understanding of the world. Whether you're a seasoned <span className="underline">programmer</span> seeking
              the latest insights into <span className="underline">web development trends</span> or a philosophical ponderer
              contemplating the nature of existence, you'll find a rich tapestry of content to ignite your
              mind and spark your <span className="underline">curiosity</span>.
            </p>
            <p className="text-red-600 dark:text-red-300">
              But wait, there's more! Dive into the world of <span className="underline">mathematical marvels</span>,
              where <span className="underline">equations dance like poetry</span> and <span className="underline">numbers</span>
              tell stories of their own. Explore the beauty of <span className="underline">algorithms</span>, the
              elegance of <span className="underline">code</span>, and the infinite possibilities that lie at
              the intersection of <span className="underline">logic</span> and <span className="underline">creativity</span>.
            </p>
            <p className="text-yellow-600 dark:text-yellow-300">
              But amidst the cerebral adventures, let's not forget to have some fun! Expect the unexpected,
              as we sprinkle a dash of <span className="underline">humor</span>, a pinch of <span className="underline">wit</span>,
              and a generous serving of <span className="underline">entertainment</span> into every post. After all,
              <span className="underline"> learning</span> should never be a dull affair, but rather a thrilling
              expedition into the unknown.
            </p>
            <p className="text-indigo-600 dark:text-indigo-300">
              So, whether you're here to expand your knowledge, stimulate your intellect, or simply indulge
              in a bit of <span className="underline">mental gymnastics</span>, <span className="underline">Modi's Blog</span>
              invites you to join the journey. Let's embark on an odyssey of discovery together, where every
              click brings us closer to unlocking the <span className="underline">secrets of the universe</span>.
            </p>
            <p className="text-pink-600 dark:text-pink-300">
              Thank you for being a part of this exciting voyage. Let's explore, learn, and grow together,
              one <span className="underline">blog post</span> at a time.
            </p>
            <p className="text-cyan-600 dark:text-cyan-300">
              Feel free to customize and tweak this text to fit the tone and style of your personal
              blog. Enjoy sharing your insights and passions with your readers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
