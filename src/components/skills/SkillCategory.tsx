import React from "react";
import { Card } from "../common";
import SkillCard from "./SkillCard";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Category {
  id: string;
  title: string;
  skills: Skill[];
}

interface SkillCategoryProps {
  category: Category;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-6 text-text">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Card>
  );
};

export default SkillCategory;
