/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about-back.jpg";

const imageAltText = "";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a final-year IT Undergraduate at Rajarata University of Sri Lanka, focused on full-stack development and artificial intelligence. I enjoy building scalable applications and exploring modern machine learning techniques.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Full-stack Development",
  "JavaScript & React.js",
  "Python & Machine Learning",
  "Node.js & Backend APIs",
  "Database Design (SQL)",
  "Git & Version Control",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about developing practical software solutions that solve real-world problems. My interests lie in combining full-stack development with artificial intelligence to build intelligent and scalable systems. Alongside my technical work, I serve as the Publicity Team Lead of the IEEE Student Branch at RUSL, where I contribute to technical outreach and event coordination. I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
