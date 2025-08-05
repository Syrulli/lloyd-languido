"use client";
import { useState } from 'react';
import { ProjectCard } from '../components/card/ProjectCard';
import { mockProjects } from '@/constant/app';
import ProjectModal from '../components/modal/ProjectModal'; 
import type { Project } from '@/types/project';

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="container mx-auto px-5 py-20 lg:px-0 lg:py-25 xl:px-25">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
          {mockProjects.map((project, index) => (
            <div
              key={index}
              className={
                index === 0 || index === 1 || index === 6 || index === 7
                  ? 'col-span-2 row-span-2'
                  : 'col-span-1'
              }
            >
              <ProjectCard {...project} onClick={() => handleProjectClick(project)} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal selectedProject={selectedProject} onClose={handleCloseModal} />
    </>
  );
}
