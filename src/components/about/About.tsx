import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useCustom";
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
          <h2 className="section-title">Sobre mí</h2>
          <p className={styles.subtitle}>
            Game Developer especializado en sistemas de gameplay y programación en C#
          </p>

          <div className={styles.description}>
            <p>
              Con más de 5 años de experiencia en desarrollo de videojuegos, me apasiona
              crear sistemas técnicos elegantes y experiencias interactivas inmersivas.
              Mi especialidad está en arquitectura de código, sistemas de gameplay complejos
              y optimización de performance.
            </p>

            <p>
              He trabajado en múltiples proyectos utilizando Unity y C#, desde pequeños
              juegos indie hasta proyectos más complejos. Tengo un profundo conocimiento en
              patrones de diseño, estructuras de datos y buenas prácticas de programación.
            </p>

            <p>
              Fuera del desarrollo, me interesa la creación de 3D assets, la IA en juegos y
              el análisis de game design. Creo en escribir código limpio, documentado y
              escalable que sea mantenible en el tiempo.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.number}>5+</div>
              <p>Años de experiencia</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>15+</div>
              <p>Proyectos completados</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>∞</div>
              <p>Apasión por el código</p>
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
            <div className={styles.imagePlaceholder}>
              <div>Tu Foto Profesional</div>
              <p>Reemplazar con imagen real</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
