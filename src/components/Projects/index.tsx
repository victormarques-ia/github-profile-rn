import React from 'react';
import Project from './Project';

import * as S from './styles';

export interface ProjectProps {
  name: string;
  html_url: string;
  language: string;
}

interface ProjectsProps {
  projects: Array<ProjectProps>;
}

const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps) => {
  const renderProject = ({ index, item }) => (
    <Project
      index={index}
      key={index}
      name={item.name}
      html_url={item.html_url}
      language={item.language}
    />
  );

  return (
    <S.Container>
      <S.List
        data={projects}
        renderItem={renderProject}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default Projects;
