import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import GamesGrid from "../components/games/GamesGrid";
import ModelsGallery from "../components/models/ModelsGallery";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <section id="hero">
        <Hero />
      </section>

      <section id="games" className={styles.section}>
        <GamesGrid />
      </section>

      <section id="models" className={styles.section}>
        <ModelsGallery />
      </section>

      <section id="about" className={styles.section}>
        <About />
      </section>


      <section id="contact" className={styles.section}>
        <div className="container-custom text-center py-16 flex flex-col items-center gap-4">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Want to collaborate or talk about my projects?
          </p>
          <a href="mailto:amagnago18@gmail.com" className="btn-primary inline-block">
            E-Mail me!
          </a>
          <a href="https://discord.com/360468274376605696" className="btn-secondary inline-block">
            Discord
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
