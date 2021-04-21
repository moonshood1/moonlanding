import { motion } from "framer-motion";
import Card from "../data/Card";

const Project = () => {
  return (
    <div className="text-gray-700 m-3 h-full">
      <div className="pb-2 border-b border-gray-200">
        <h2 className="text-3xl mb-3 md:text-4xl">All my projects</h2>
        <p className="text-gray-500">
          This is all the projects i've made, you are free to click and explore
          all of that
        </p>
      </div>
      {/* owl-carousel part */}
      <div className="border-b border-gray-200">
        <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <nav>
            <ul>
              <li>dot 1</li>
              <li>dot 2</li>
              <li>dot 3</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Project;
