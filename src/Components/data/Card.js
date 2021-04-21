import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="mt-4 pb-2 w-96 bg-chiffon rounded overflow-hidden shadow-md sm:mt-0 sm:w-full relative hover:shadow-lg cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="card image"
        width="100%"
      />
      <div className="mt-3 ml-4">
        <h4 className="text-xl font-bold text-berry"> Project Title </h4>
        <p className="text-gray-500 text-md">Project small description</p>
      </div>
      <div className="absolute top-0 ml-2 mt-2 p-1 rounded-full bg-chiffon right-0 mr-1">
        <span className="block text-cherry font-bold text-sm text-right mr-1 italic">
          Symfony
        </span>
      </div>
      <div className="absolute bottom-20 sm:bottom-22 ml-2 mt-2 p-1 rounded-full bg-chiffon left-0 mr-1 text-gray-400 font-bold flex">
        <svg
          className="w-2 sm:w-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="mx-1 italic text-sm text-right">2 months</span>
      </div>
    </div>
  );
};

export default Card;
