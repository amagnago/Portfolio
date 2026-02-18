import React from "react";
import { SOCIAL_LINKS } from "../../utils/constants";

const SocialLinks: React.FC = () => {
  const icons = {
    github: "🔗",
    linkedin: "💼",
    twitter: "𝕏",
    email: "✉️",
  };

  return (
    <div className="flex gap-4">
      <a
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-accent transition-all duration-300 hover:scale-110 text-lg"
        title="GitHub"
        aria-label="GitHub"
      >
        {icons.github}
      </a>
      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-accent transition-all duration-300 hover:scale-110 text-lg"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        {icons.linkedin}
      </a>
      <a
        href={SOCIAL_LINKS.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-accent transition-all duration-300 hover:scale-110 text-lg"
        title="Twitter"
        aria-label="Twitter"
      >
        {icons.twitter}
      </a>
      <a
        href={SOCIAL_LINKS.email}
        className="text-text-muted hover:text-accent transition-all duration-300 hover:scale-110 text-lg"
        title="Email"
        aria-label="Email"
      >
        {icons.email}
      </a>
    </div>
  );
};

export default SocialLinks;
