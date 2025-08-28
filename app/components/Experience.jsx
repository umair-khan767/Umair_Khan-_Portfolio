import React from "react";

export const Experience = () => {
  return (
    <div className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1
          style={{ color: "#F1FF9D" }}
          className="text-4xl text-center font-bold mb-4"
        >
          Educations & Experience
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="lg:w-1/2 w-full mt-6 mx-auto relative flex justify-center items-center border rounded-full p-1">
              <img
                className="w-full max-w-xs lg:max-w-full hover:scale-105 rounded-full"
                src="images/Umair Dev Hd.png"
                alt="Umair Khan"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <ul className="space-y-4">
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2024 - Present</h3>
                  <p className="text-3xl font-semibold">Wordpress Developer</p>
                  <h3 className=" text-gray-400">Bright Ideas Communication</h3>
                </div>
              </li>
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2023 - 2024</h3>
                  <p className="text-3xl font-semibold">Front End Developer</p>
                  <h3 className=" text-gray-400">Software Flare </h3>
                </div>
              </li>
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2023 - 2024</h3>
                  <p className="text-3xl font-semibold">React Developer</p>
                  <h3 className=" text-gray-400">Software Flare </h3>
                </div>
              </li>
              {/* <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2018 - 2020</h3>
                  <p className="text-3xl font-semibold">Back-End Developer</p>
                  <h3 className=" text-gray-400">XYZ Company </h3>
                </div>
              </li> */}
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2022 - 2023</h3>
                  <p className="text-3xl font-semibold">SEO Specialist</p>
                  <h3 className=" text-gray-400">XYZ Company</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
