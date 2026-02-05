"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const Body = () => {
  return (
    <>
      <div className="container p-5 flex flex-col lg:flex-row mx-auto">
        <div className="lg:w-3/4 w-full content-center mb-6 lg:mb-0 lg:mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <h1 className="text-3xl text-white">Check Out My </h1>
            <img
              className="w-24 lg:w-auto"
              src="https://creativemela.com/themeforest_html/pefo/Pefo_HTML_With%20Product/assets/images/hero/long-arrow.svg"
              alt="arrow"
            />
            <div className="flex gap-2 mt-4 lg:mt-0">
              <a
                href="https://www.linkedin.com/in/umair-khan-096776226/"
                className="border text-lg rounded-full px-4 py-2 flex items-center gap-2 hover:bg-yellow-200"
                style={{ background: "#233346", color: "#CCDBEB" }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/umair-khan767"
                className="border text-lg rounded-full px-4 py-2 flex items-center gap-2 hover:bg-yellow-200"
                style={{ background: "#3F3238", color: "#E2297B" }}
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/umair__khan767/"
                className="border text-lg rounded-full px-4 py-2 flex items-center gap-2 hover:bg-yellow-200"
                style={{ background: "#333431", color: "#F1FF9D" }}
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="mt-8 text-center lg:text-left">
            <h1 className="text-5xl font-mono lg:text-7xl text-white">
              <span style={{ color: "#F1FF9D" }}>Hey! I am Umair Khan</span>{" "}
              Building Modern Web Applications
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
            <button className="border text-white text-lg rounded-full px-7 py-2 flex items-center gap-2 hover:bg-yellow-200 hover:text-black">
              Hi! I'm Umair
              <MdArrowOutward />
            </button>
            <a
              href="cv/umairkhan.pdf"
              download
              className="border text-white text-lg rounded-full px-7 py-2 flex items-center gap-2 hover:bg-yellow-200 hover:text-black"
            >
              Download CV
              <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-6 relative flex justify-center items-center border rounded-full p-1">
          <img
            className="w-full max-w-xs lg:max-w-full hover:scale-105 rounded-full"
            src="images/umair khan web developer, umair khan web developer bright-ideas-communications.png"
            alt="Umair Khan"
          />
        </div>
      </div>
    </>
  );
};
