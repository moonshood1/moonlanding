import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen pb-4">
      <div className="pb-2 border-berry border-b-2">
        <h2 className="text-2xl mb-5 md:text-3xl ">
          Welcome to my personnal and private website
        </h2>
        <p className="text-gray-500 text-lg mb-5 italic">
          Here i introduce myself to you throughout my projects , my hobbies and
          other stuffs , i hope you'll enjoy the visit.
        </p>
      </div>
      <div className="mt-4 grid">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="h-60 sm:h-auto sm:w-full mt-3 grid sm:grid-cols-2 border-gray-700 border-b-3 rounded-md shadow-lg hover:shadow-xl cursor-pointer">
            <div className="overflow-hidden sm:overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="section_image"
                className="w-full sm:w-full sm:h-auto"
              />
            </div>
            <div className="p-1 sm:p-4">
              <h3 className="text-lg sm:text-xl mb-2 text-cherry">
                Explore all the projects i've made , officials and not online
              </h3>
              <p className="hidden 2xl:block">
                You will join the projects part. It is also available on the
                right menu. In my projects, some are online as you will see and
                others are not
              </p>
              <p className="mt-4 sm:text-right hover:text-smoke ">
                <Link to="/projects" className="border-black border-b-2">
                  Click to join
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse mt-3 h-60 sm:h-auto sm:grid sm:grid-cols-2 border-gray-700 border-b-3 rounded-md shadow-lg hover:shadow-xl cursor-pointer">
            <div className="p-1 sm:p-4">
              <h3 className="text-lg sm:text-xl mb-2 text-cherry sm:text-right">
                "The Pro part" , my presentation , my Resume etc
              </h3>
              <p className="hidden 2xl:block sm:text-right">
                In this Part, all the professional things like my Resume and my
                Presentation
              </p>
              <p className="sm:mt-4 sm:text-right hover:text-smoke ">
                <Link to="/presentation" className="border-black border-b-2">
                  Click to join
                </Link>
              </p>
            </div>
            <div className="overflow-hidden sm:overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="section_image"
                className="w-full sm:w-full sm:h-auto"
              />
            </div>
          </div>
        </div>
        <div className="mt-2 grid lg:grid-cols-2 gap-5">
          <div className="mt-6 h-60 sm:h-auto grid sm:grid-cols-2 border-gray-700 border-b-3 rounded-md shadow-lg hover:shadow-xl cursor-pointer">
            <div className="overflow-hidden sm:overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="section_image"
                className="w-full sm:w-full sm:h-auto"
              />
            </div>
            <div className="p-1 sm:p-4">
              <h3 className="text-lg sm:text-xl mb-2 text-cherry">
                My hobbies, the things i do when i'am not working
              </h3>
              <p className="hidden 2xl:block">
                All of my hobbies are listed there, i hope you'll enjoy
              </p>
              <p className="2xl:mt-4 sm:text-right hover:text-smoke ">
                <Link to="/others" className="border-black border-b-2">
                  Click to join
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse mt-6 h-60 sm:h-auto sm:grid sm:grid-cols-2 border-gray-700 border-b-3 rounded-md shadow-lg hover:shadow-xl cursor-pointer">
            <div className="p-1 sm:p-4">
              <h3 className="text-lg sm:text-xl mb-2 text-cherry sm:text-right">
                The part where you reach me out
              </h3>
              <p className="hidden 2xl:block sm:text-right">
                This is the contact Page , where you can find a form ton send me
                an email or find all my socials account .
              </p>
              <p className="mt-4 sm:text-right hover:text-smoke ">
                <Link to="/contact" className="border-black border-b-2">
                  Click to join
                </Link>
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="section_image"
                className="w-full sm:w-full sm:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
