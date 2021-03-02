import React from 'react';
import {ProjectsTitleBox} from 'components/organisms/ProjectsTitleBox/ProjectsTitleBox';
import {ProjectsContainer} from 'components/organisms/ProjectsContainer/ProjectsContainer';
import {StyledProjects} from './Projects.styles';

export const Projects = () => (
  <StyledProjects>
    <ProjectsTitleBox />
    <ProjectsContainer />
  </StyledProjects>
);
