import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useCustom";
import GameCard from "./GameCard";
import gamesData from "../../data/games.json";
import styles from "./GamesGrid.module.css";

const GamesGrid: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <section ref={ref} className="container-custom">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Juegos y Proyectos</h2>
        <p className="section-subtitle">
          Proyectos destacados en los que he trabajado
        </p>
      </motion.div>

      <div className={styles.grid}>
        {gamesData.games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <GameCard 
              game={game} 
              onSelect={() => setSelectedGame(game.id)}
            />
          </motion.div>
        ))}
      </div>

      {/* Game Detail Modal */}
      {selectedGame && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={() => setSelectedGame(null)} />
          <div className={styles.content}>
            <button 
              className={styles.close} 
              onClick={() => setSelectedGame(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>
            
            {/* Game Detail Content */}
            {(() => {
              const game = gamesData.games.find(g => g.id === selectedGame);
              if (!game) return null;
              
              return (
                <div className="p-6 overflow-y-auto max-h-[80vh]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* Cover Image */}
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img 
                        src={game.cover} 
                        alt={game.title}
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-text mb-2">{game.title}</h2>
                      <p className="text-accent font-medium mb-4">{game.role}</p>
                      <p className="text-text-muted mb-4">{game.shortDescription}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {game.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Links */}
                      <div className="flex gap-4">
                        {(game.links as any)?.github && (
                          <a 
                            href={(game.links as any).github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-primary px-4 py-2 text-sm"
                          >
                            GitHub
                          </a>
                        )}
                        {(game.links as any)?.itch && (
                          <a 
                            href={(game.links as any).itch} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-secondary px-4 py-2 text-sm"
                          >
                            Itch.io
                          </a>
                        )}
                        {(game.links as any)?.video && (
                          <a 
                            href={(game.links as any).video} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-secondary px-4 py-2 text-sm"
                          >
                            Video
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Technical Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-text mb-3">Descripción Técnica</h3>
                    <p className="text-text-muted leading-relaxed">{game.technicalDescription}</p>
                  </div>
                  
                  {/* Gameplay GIFs */}
                  {game.gameplay && game.gameplay.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-3">Gameplay</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {game.gameplay.map((gif, idx) => (
                          <img 
                            key={idx}
                            src={gif} 
                            alt={`${game.title} gameplay ${idx + 1}`}
                            className="w-full rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default GamesGrid;
