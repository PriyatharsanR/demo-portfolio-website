/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/*Desk image*/

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";


/* Project list */

const projectList = [
  {
    title: "SMARTAR Trainer - AI Fitness Coach",
    description:
      "An AI-powered fitness application using BlazePose and AR overlays to analyze workout posture and provide real-time corrective feedback.",
    url: "https://github.com/PriyatharsanR",
  },
  {
    title: "Student Performance Prediction Model",
    description:
      "A machine learning project that predicts academic performance of computing students using a neural network model and real academic data.",
    url: "https://github.com/PriyatharsanR/student-performance-prediction-model",
  },
  {
    title: "AgriThumb Store - Online Agriculture Marketplace",
    description:
      "A full-stack web application for purchasing plants, seeds, tools, fertilizers, and other farming essentials through an online platform.",
    url: "https://github.com/PriyatharsanR/agrithumb-store",
  },
  {
    title: "SmartFit Trainer",
    description:
      "An AI-powered fitness assistant that provides personalized home workout guidance using Retrieval-Augmented Generation (RAG) and OpenAI LLMs.",
    url: "https://github.com/PriyatharsanR/smartfit-trainer",
  },
  {
    title: "BookMyFlick - Android Movie Booking App",
    description:
      "An Android application that allows users to browse movies, view details, and book tickets with a clean and modern user interface.",
    url: "https://github.com/PriyatharsanR/bookmyflick-android",
  },
  {
    title: "NP Fitness Training Website",
    description:
      "A responsive fitness website designed to promote workout programs and support users on their fitness journey.",
    url: "https://github.com/PriyatharsanR/website-for-NP-Fitness-training",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
