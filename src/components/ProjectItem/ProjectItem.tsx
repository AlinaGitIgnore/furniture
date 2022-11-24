import React from 'react';
import styled from './ProjectItem.module.scss';

interface IProps {
  project: {
    title: string;
    image: string;
    id: number | string;
  };
}

const ProjectItem: React.FC<IProps> = ({ project }) => {
  return (
    <>
      <div className={styled.projectWrap}>
        <img
          className={styled.projectImg}
          src={project.image}
          alt={`img ${project.id}`}
          key={project.id}
        />
        <h3 className={styled.projectTitle}>{project.title}</h3>
        <div className={styled.overlay}>
          <button className={styled.buttonMore}>View more</button>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
