import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import GamesGrid from "../components/games/GamesGrid";
import ModelsGallery from "../components/models/ModelsGallery";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <section id="hero">
        <Hero />
      </section>

      <section id="about" className={styles.section}>
        <About />
      </section>

      <section id="skills" className={styles.section}>
        <Skills />
      </section>

      <section id="games" className={styles.section}>
        <GamesGrid />
      </section>

      <section id="models" className={styles.section}>
        <ModelsGallery />
      </section>

      <section id="contact" className={styles.section}>
        <div className="container-custom text-center py-16">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Want to collaborate or talk about my projects?
          </p>
          <a href="mailto:tu-email@example.com" className="btn-primary inline-block">
            Send Email
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
