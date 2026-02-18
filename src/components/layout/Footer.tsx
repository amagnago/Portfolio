import React from "react";
import SocialLinks from "../ui/SocialLinks";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container-custom">
        <div className={styles.content}>
          <div>
            <h3 className="text-lg font-bold mb-2 gradient-text">
              Game Developer Portfolio
            </h3>
            <p className="text-text-muted text-sm">
              Creando experiencias interactivas inmersivas con Unity y C#
            </p>
          </div>

          <div>
            <h4 className="text-text font-semibold mb-4">Enlaces</h4>
            <SocialLinks />
          </div>

          <div>
            <h4 className="text-text font-semibold mb-4">Contacto</h4>
            <a
              href="mailto:tu-email@example.com"
              className="text-text-muted hover:text-accent transition-colors"
            >
              tu-email@example.com
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className="text-text-muted text-sm">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </p>
          <p className="text-text-muted text-sm">
            Hecho con React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
