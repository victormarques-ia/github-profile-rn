import React from 'react';
import { Linking } from 'react-native';

import * as S from './styles';

interface ProjectProps {
  index: number;
  name: string;
  html_url: string;
  language: string;
}

const Project: React.FC<ProjectProps> = ({
  index,
  name,
  html_url,
  language,
}: ProjectProps) => (
  <S.Container
    style={index !== 0 && { marginLeft: 12 }}
    onPress={() => Linking.openURL(html_url)}
  >
    <S.Name>{name}</S.Name>
    <S.Technologie>{language}</S.Technologie>
  </S.Container>
);

export default Project;
