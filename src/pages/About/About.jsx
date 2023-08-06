import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Erfahrung } from "./Erfahrung";
import projects from "./Projects";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import "./About.scss";

export const About = () => {
  const isDarkMode = useContext(ThemeContext);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    setWidth(projectsRef.current.scrollWidth - projectsRef.current.offsetWidth);
  }, []);

  return (
    <div className={`About ${isDarkMode ? "About" : "light"}`}>
      <h1>About Me</h1>
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          ref={carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -1200 }}
          className="inner-carousel"
        >
          <Erfahrung />
        </motion.div>

        <h1>Projects</h1>
        <motion.div
          ref={projectsRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="projects"
        >
          {projects.map((project, i) => {
            return (
              <div key={i} className="item">
                <p>{project.title}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
