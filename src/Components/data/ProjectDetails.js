import { motion } from "framer-motion";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch(
    "http://localhost:8000/projects/" + id
  );
  return (
    <motion.div className="h-screen">
      {error && <div className="text-red-900">{error}</div>}
      {loading && <div className="text-gray-500">Loading ... </div>}
      {blog && (
        <div key={blog.id}>
          <div className="border-cherry border-b-2 pb-2 bg-gradient-to-r from-white to-berry">
            <p className="text-gray-600 text-sm">
              <Link to="/" className="hover:text-cherry">
                Home
              </Link>
              <span className="mx-1">{">"}</span>
              <Link to="/projects" className="hover:text-cherry">
                Projects
              </Link>
              <span className="mx-1">{">"}</span> {blog.title}
            </p>
          </div>
          <div>
            <div className="mt-6">
              <h1 className="text-6xl">{blog.title} </h1>
              <p>{blog.introduction} ...</p>
            </div>
            <div className="w-full grid pt-12 ">
              <div className="w-full rounded shadow-lg p-2 bg-white ">
                <h2 className="text-2xl">Project Details</h2>
                <hr />
                <h4 className="text-lg font-bold mt-4">Description</h4>
                <p className="mt-1">{blog.description}</p>
                <h4 className="text-lg font-bold mt-4">Link</h4>
                <p>
                  <a href={blog.link}>{blog.link} </a>
                </p>
                <h4 className="text-lg font-bold mt-4">Technologies Used</h4>
                <ul className="mt-1">
                  <motion.li
                    className="mt-2 cursor-pointer"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    Main Tech :
                    <span className="text-berry ml-2">{blog.main_tech}</span>
                  </motion.li>
                  <motion.li
                    className="mt-2 cursor-pointer"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    Second Tech :
                    <span className="text-berry ml-2">{blog.second_tech}</span>
                  </motion.li>
                  <motion.li
                    className="mt-2 cursor-pointer"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    Backend :
                    <span className="text-berry ml-2">{blog.backend}</span>
                  </motion.li>
                  <motion.li
                    className="mt-2 cursor-pointer"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    FrameWork CSS :
                    <span className="text-berry ml-2">
                      {blog.css_framework}
                    </span>
                  </motion.li>
                </ul>
              </div>
              <div className="w-full h-80 rounded shadow-md p-2 mt-8 bg-chiffon">
                <h2 className="text-2xl">Project ShowCase</h2>
                <div className="h-3/4">
                  <motion.img
                    src={blog.image_url}
                    alt=""
                    style={{ maxHeight: "100%" }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 2 }}
                    drag
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Detail;
