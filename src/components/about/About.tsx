import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useCustom";
import { resolveAssetPath } from "../../utils/helpers";
import styles from "./About.module.css";

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} className="container-custom">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className={styles.subtitle}>
            Game Developer specializing in gameplay systems and C# programming
          </p>

          <div className={styles.description}>
            <p>
              With more than 5 years of experience in game development, I'm passionate about
              creating elegant technical systems and immersive interactive experiences.
              My specialty is in code architecture, complex gameplay systems
              and performance optimization.
            </p>

            <p>
              I have worked on multiple projects using Unity and C#, from small
              indie games to more complex projects. I have deep knowledge of
              design patterns, data structures and best programming practices.
            </p>

            <p>
              Outside of development, I'm interested in 3D asset creation, AI in games and
              game design analysis. I believe in writing clean, documented and
              scalable code that is maintainable over time.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.number}>5+</div>
              <p>Years of experience</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>15+</div>
              <p>Projects Completed</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>∞</div>
              <p>Passion for Code</p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageBox}>
            <img 
              src={resolveAssetPath("/assets/profile.jpg")} 
              alt="Professional photo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
