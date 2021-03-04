import React from 'react';
import {ProjectsTitleBox} from 'components/Projects/ProjectsTitleBox/ProjectsTitleBox';
import {ProjectsContainer} from 'components/Projects/ProjectsContainer/ProjectsContainer';
import {StyledProjects} from './Projects.styles';

export const Projects = () => (
  <StyledProjects>
    <ProjectsTitleBox />
    <ProjectsContainer />
  </StyledProjects>
);
