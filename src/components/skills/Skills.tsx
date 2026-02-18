import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useCustom";
import SkillCategory from "./SkillCategory";
import skillsData from "../../data/skills.json";
import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} className="container-custom">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">
          Stack de tecnologías y competencias profesionales
        </p>
      </motion.div>

      <div className={styles.grid}>
        {skillsData.categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <SkillCategory category={category} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
