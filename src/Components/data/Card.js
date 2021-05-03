import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ projects }) => {
  const wrapperVariant = {
    hidden: {
      opacity: 0,
      x: "250vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        type: "tween",
      },
    },
  };
  return (
    <>
      {projects.map((project) => (
        <Link to={`/project/${project.id}`}>
          <motion.div
            variants={wrapperVariant}
            initial="hidden"
            animate="visible"
            className="mt-4 pb-2 w-96 bg-chiffon rounded overflow-hidden shadow-md sm:mt-0 sm:w-full relative hover:shadow-lg"
            key={project.id}
          >
            <div className="overflow-hidden">
              <motion.img
                src={project.image_url}
                alt="card"
                width="100%"
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              />
            </div>
            <div className="mt-3 ml-4">
              <h4 className="text-xl font-bold text-berry"> {project.title}</h4>
              <p className="text-gray-500 text-md">{project.introduction}</p>
            </div>
            <div className="absolute top-0 ml-2 mt-2 p-1 rounded-full bg-chiffon right-0 mr-1">
              <span className="block text-symfony font-bold text-sm text-right mr-1 italic">
                {project.main_tech}
              </span>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default Card;
