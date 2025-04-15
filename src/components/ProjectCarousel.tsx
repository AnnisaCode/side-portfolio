import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Project, projects } from '../types';

interface ProjectCarouselProps {
  onProjectSelect: (project: Project) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onProjectSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-4xl mb-4">{project.emoji}</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">{project.title}</h3>
          <p className="text-purple-600 mb-4">{project.description}</p>
          <div className="flex gap-2">
            {project.behavior === 'new_tab' ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                <ExternalLink size={16} /> Try it out!
              </a>
            ) : (
              <button
                onClick={() => onProjectSelect(project)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                <Play size={16} /> Quick Preview
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCarousel;