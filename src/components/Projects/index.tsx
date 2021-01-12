import React from 'react';

import * as S from './styles';

export interface ProjectProps {
  name: string;
  url: string;
  language: string;
}

interface ProjectsProps {
  projects: Array<ProjectProps>;
}

const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps) => (
  <S.Container />
);

export default Projects;
