import React from 'react';
import { projects } from '../../utils/projects';

import ProjectItem from '../ProjectItem/ProjectItem';
import styled from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styled.container}>
      <h2>Our Services</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        dolorum..
      </p>

      {/* <Carousel>
        {projects.map(pr => (
          <ProjectItem project={pr} />
        ))}
      </Carousel> */}
    </div>
  );
};

export default Projects;
