import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useCustom";
import ModelCard from "./ModelCard";
import ModelViewer from "./ModelViewer";
import modelsData from "../../data/models.json";
import styles from "./ModelsGallery.module.css";

const ModelsGallery: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const selectedModel = selectedModelId
    ? modelsData.models.find((m) => m.id === selectedModelId)
    : null;

  return (
    <section ref={ref} className="container-custom">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">3D Models</h2>
        <p className="section-subtitle">
          Characters and 3D assets with interactive visualization
        </p>
      </motion.div>

      {!selectedModel ? (
        <div className={styles.gallery}>
          {modelsData.models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ModelCard
                model={model}
                onSelect={() => setSelectedModelId(model.id)}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className={styles.viewerContainer}>
          <button
            className={styles.backButton}
            onClick={() => setSelectedModelId(null)}
            aria-label="Back"
          >
            ← Back to gallery
          </button>
          <ModelViewer model={selectedModel} />
        </div>
      )}
    </section>
  );
};

export default ModelsGallery;
