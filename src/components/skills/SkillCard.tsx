import React from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-text">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-accent">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden border border-white/5">
        <div
          className="h-full bg-gradient-to-r from-accent to-blue-400 transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
