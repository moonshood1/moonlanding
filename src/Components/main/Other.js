import { motion } from "framer-motion";

const Other = () => {
  return (
    <motion.div className="h-screen">
      <div className="pb-2 border-b border-gray-200">
        <h2 className="text-2xl mb-3 md:text-3xl">
          Other <strike>cool</strike> stuffs
        </h2>
        <p className="text-gray-500">
          This is the part where all the other things such as other skills or
          whatever are displayed
        </p>
      </div>
      <div>
        <p>All the cool stuffs</p>
      </div>
    </motion.div>
  );
};

export default Other;
