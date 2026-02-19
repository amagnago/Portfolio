import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Card } from "../common";
import { resolveAssetPath } from "../../utils/helpers";
import styles from "./ModelViewer.module.css";

interface Model {
  id: string;
  name: string;
  file: string;
  description: string;
  animations: Array<{ name: string; preview: string }>;
}

interface ModelViewerProps {
  model: Model;
}

// Componente que carga el modelo 3D
function Model3D({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.3} position={[0, -0.5, 0]} />;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ model }) => {
  const [selectedAnimation, setSelectedAnimation] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className={styles.container}>
      <div className="grid md:grid-cols-2 gap-8">
        {/* 3D Viewer */}
        <Card className={styles.viewerCard}>
          <div className={styles.viewer}>
            <Canvas
              camera={{ position: [0, 2, 10], fov: 45 }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Model3D url={resolveAssetPath(model.file)} />
                <Environment preset="city" />
                <ContactShadows
                  position={[0, -1.5, 0]}
                  opacity={0.4}
                  scale={10}
                  blur={2}
                />
              </Suspense>
              <OrbitControls
                autoRotate={isRotating}
                autoRotateSpeed={2}
                enablePan={false}
                minDistance={5}
                maxDistance={15}
              />
            </Canvas>

            {/* Controls */}
            <div className={styles.controls}>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={isRotating}
                  onChange={(e) => setIsRotating(e.target.checked)}
                  className="cursor-pointer"
                />
                <span className="text-text-muted">Rotación automática</span>
              </label>
            </div>
          </div>
        </Card>

        {/* Details */}
        <div className={styles.details}>
          <h2 className="text-3xl font-bold text-text mb-2">{model.name}</h2>
          <p className="text-text-muted mb-6">{model.description}</p>

          {/* Animaciones */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-text mb-4">
              Animaciones ({model.animations.length})
            </h3>
            <div className="space-y-3">
              {model.animations.map((anim, index) => (
                <div
                  key={anim.name}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedAnimation === index
                      ? "bg-accent/20 border border-accent"
                      : "bg-secondary/50 border border-white/5 hover:border-accent/30"
                  }`}
                  onClick={() => setSelectedAnimation(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text">{anim.name}</span>
                    <span className="text-xs text-text-muted">
                      {anim.preview ? "Con preview" : "Sin preview"}
                    </span>
                  </div>
                  {anim.preview && (
                    <img
                      src={resolveAssetPath(anim.preview)}
                      alt={anim.name}
                      className="w-full h-32 object-cover rounded mt-2"
                      style={{ opacity: 0.7 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Info */}
          <div className="bg-secondary/50 rounded-lg p-4 border border-white/5">
            <h4 className="text-sm font-semibold text-accent mb-3">
              Información técnica
            </h4>
            <div className="space-y-2 text-sm text-text-muted">
              <p>• Formato: glTF (.gltf)</p>
              <p>• Rigged: Sí</p>
              <p>• Texturizado: Sí</p>
              <p>• Optimizado: Sí</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
