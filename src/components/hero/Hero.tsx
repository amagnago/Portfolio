import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "../ui/SocialLinks";
import styles from "./Hero.module.css";
import profileData from "../../data/social.json";

const Hero: React.FC = () => {
  const { profile } = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className={styles.hero}>
      <div className="container-custom h-full flex flex-col justify-center">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.name} variants={itemVariants}>
            {profile.fullName}
          </motion.h1>

          <motion.p className={styles.title} variants={itemVariants}>
            {profile.title}
          </motion.p>

          <motion.p className={styles.tagline} variants={itemVariants}>
            {profile.tagline}
          </motion.p>

          <motion.p className={styles.bio} variants={itemVariants}>
            {profile.bio}
          </motion.p>

          <motion.div className={styles.cta} variants={itemVariants}>
            <button className="btn-primary">
              Ver mis proyectos
            </button>
            <a href={profile.cvUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Descargar CV
            </a>
          </motion.div>

          <motion.div className={styles.social} variants={itemVariants}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Decorative scrolling indicator */}
        <motion.div
          className={styles.scroll}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll para explorar</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 18l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
