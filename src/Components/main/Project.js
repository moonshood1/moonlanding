import useFetch from "../../Hooks/useFetch";
import Card from "../data/Card";

const Project = () => {
  const { data: projects, loading, error } = useFetch(
    "http://localhost:8000/projects"
  );
  return (
    <div className="h-full">
      <div className="pb-2 border-b border-gray-200">
        <h2 className="text-2xl mb-3 md:text-3xl">All my projects</h2>
        <p className="text-gray-500">
          This is all the projects i've made, you are free to click and explore
          all of that
        </p>
      </div>
      <div className="border-b border-gray-200">
        <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          {error && <div className="text-red-900">{error}</div>}
          {loading && <div className="text-gray-500">Loading ... </div>}
          {projects && <Card projects={projects} />}
        </div>
      </div>
    </div>
  );
};

export default Project;
