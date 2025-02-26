import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Ashwini Guli</h1>
        <p className="text-gray-600">Frontend Developer | React Enthusiast</p>
        <p className="text-gray-600">
          Bengaluru | ashwini.vn766@gmail.com | 799-530-6927
        </p>
      </header>

      <section className="bg-zinc-600 text-white p-8 rounded-lg shadow-lg mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-white text-zinc-600 px-4 py-2 rounded-lg shadow-md font-semibold">
            React.js
          </span>
          <span className="bg-white text-zinc-600 px-4 py-2 rounded-lg shadow-md font-semibold">
            Redux
          </span>
          <span className="bg-white text-zinc-600 px-4 py-2 rounded-lg shadow-md font-semibold">
            Tailwind CSS
          </span>
          <span className="bg-white text-zinc-600 px-4 py-2 rounded-lg shadow-md font-semibold">
            JavaScript
          </span>
          <span className="bg-white text-zinc-600 px-4 py-2 rounded-lg shadow-md font-semibold">
            Node.js
          </span>
        </div>
      </section>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProjectCard
          title="Tic Tac Toe"
          description="The classic game."
          imageUrl="./assets/tic-tac-toe.jpg"
          link="https://aguli-me.github.io/TicTacToe/"
        />
        <ProjectCard
          title="Project Two"
          description="A portfolio project showcasing modern UI/UX design."
          imageUrl="./assets/project2.jpg"
          link="https://aguli-me.github.io/TicTacToe/"
        />
        <ProjectCard
          title="Task List"
          description="An interactive application built for making TO-DO lists."
          imageUrl="./assets/task-list.jpg"
          link="https://task-manager-373d5.web.app/"
        />
      </motion.section>

      <footer className="text-center mt-12">
        <p className="text-gray-700">Contact: ashwini.vn766@gmail.com</p>
        <p className="text-gray-500">&copy; AG. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
