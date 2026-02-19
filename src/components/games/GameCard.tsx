import React from "react";
import { Card, Badge, Button } from "../common";
import { resolveAssetPath } from "../../utils/helpers";

interface GameType {
  id: string;
  title: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  cover: string;
}

interface GameCardProps {
  game: GameType;
  onSelect: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onSelect }) => {
  return (
    <Card className="overflow-hidden cursor-pointer hover:scale-105 transition-transform" onClick={onSelect}>
      {/* Game Cover Image */}
      <div className="w-full h-48 bg-secondary rounded-lg mb-4 overflow-hidden">
        <img 
          src={resolveAssetPath(game.cover)} 
          alt={game.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="w-full h-full flex items-center justify-center">
                <div class="text-center">
                  <div class="text-3xl">🎮</div>
                  <p class="text-sm text-text-muted mt-2">Imagen del juego</p>
                </div>
              </div>
            `;
          }}
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-text mb-2">{game.title}</h3>
      <p className="text-sm text-accent mb-3 font-medium">{game.role}</p>
      <p className="text-sm text-text-muted mb-4 line-clamp-2">
        {game.shortDescription}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {game.technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} size="sm" variant="accent">
            {tech}
          </Badge>
        ))}
        {game.technologies.length > 3 && (
          <Badge size="sm">+{game.technologies.length - 3}</Badge>
        )}
      </div>

      {/* Button */}
      <Button variant="secondary" size="sm" className="w-full">
        Ver detalles
      </Button>
    </Card>
  );
};

export default GameCard;
