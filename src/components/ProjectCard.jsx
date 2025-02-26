import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <a href={link} target="_blank">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      </a>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};
export default ProjectCard;
