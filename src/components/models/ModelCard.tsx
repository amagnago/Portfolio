import React from "react";
import { Card } from "../common";

interface Model {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  animations: Array<{ name: string; preview: string }>;
}

interface ModelCardProps {
  model: Model;
  onSelect: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onSelect }) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:scale-105 transition-transform"
      onClick={onSelect}
    >
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-accent/10 to-secondary rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="text-center relative z-10">
          <div className="text-4xl mb-2">🏃</div>
          <p className="text-sm text-text-muted">3D Model</p>
        </div>
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-text mb-2">{model.name}</h3>
      <p className="text-sm text-text-muted mb-4">{model.description}</p>

      {/* Animations Preview */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-accent mb-2">
          {model.animations.length} Animations
        </p>
        <div className="flex flex-wrap gap-1">
          {model.animations.map((anim) => (
            <span
              key={anim.name}
              className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
            >
              {anim.name}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <button className="btn-secondary w-full text-sm">View in 3D</button>
    </Card>
  );
};

export default ModelCard;
