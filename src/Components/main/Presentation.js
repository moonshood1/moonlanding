import { motion } from "framer-motion";
const Presentation = () => {
  return (
    <div className="text-gray-600 p-3 bg-chiffon h-full">
      <div>
        <img src="myImage" alt="my Image" />
        <h1 className="text-3xl text-gray-800 uppercase py-3">MY NAME</h1>
        <h4 className="my-2 flex">
          <svg
            className="w-5 mr-2"
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
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          Contact
        </h4>
        <h4 className="my-2 flex">
          <svg
            className="w-5 mr-2"
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Address
        </h4>
        <h4 className="my-2 flex">
          <svg
            className="w-5 mr-2"
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
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          Contact (email and stuff)
        </h4>
        <h4 className="my-2 flex">
          <svg
            className="w-5 mr-2"
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
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Pays
        </h4>
        <h4 className="my-2 flex">
          <svg
            className="w-5 mr-2"
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          Ville
        </h4>
      </div>
      <div className="my-4 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          exercitationem asperiores dicta similique unde? Necessitatibus
          distinctio at perspiciatis omnis, quibusdam reprehenderit libero
          tempore debitis quis numquam minus nulla harum provident.
        </p>
      </div>
      <div className="mt-20">
        <ul>
          <li>
            <a href="/linkedin">Linkedin</a>
          </li>
          <li>
            <a href="/youtube">Youtube</a>
          </li>
          <li className="mt-6 ">
            <a
              href="/contact"
              className="rounded-full py-2 text-xs px-2 text-cherry tracking-wider uppercase border-smoke border-2 hover:bg-cherry hover:text-white"
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Presentation;
