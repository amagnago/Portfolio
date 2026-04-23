import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SocialLinks from "../ui/SocialLinks";
import styles from "./Hero.module.css";
import profileData from "../../data/social.json";


 

const Hero: React.FC = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {
  const canvas = canvasRef.current!;
  if(!canvas) return;
  const ctx = canvas.getContext('2d')!;
  
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
  }));

  let animId: number;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(168, 85, 247, 0.7)';
      ctx.fill();
    });

    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    animId = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
  };
}, []);



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
      <canvas
      ref = {canvasRef}
      style={{position: 'fixed', top: 0, left: 0, zIndex:0, pointerEvents: 'none'}}
      />
      <div className="container-customB h-full flex flex-col justify-center">
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

          <motion.div className={styles.cta} variants={itemVariants}>
            <button className="btn-primary">
              View My Projects
            </button>
            <a href={profile.cvUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Download CV
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
          <span>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 18l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
