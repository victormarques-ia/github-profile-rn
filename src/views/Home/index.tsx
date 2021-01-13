import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import * as S from './styles';
import api from '../../services/api';

import { RootStackParamList } from '../../routes/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
  const [userName, setUserName] = useState('');

  const handleUserName = (text: string) => {
    setUserName(text);
  };

  const getUserData = async () => {
    console.log(userName);
    if (userName !== '') {
      const user = await api.get(`users/${userName}`);

      if (user.data) {
        const userProjects = await api.get(`users/${userName}/repos`);
        if (userProjects.data) {
          const data = {
            infos: {
              name: user.data.name,
              bio: user.data.bio,
              imageUrl: user.data.avatar_url,
              url: user.data.html_url,
            },
            projects: [...userProjects.data],
          };

          navigation.navigate('Profile', { user: data });
        }
      }
    }
  };

  return (
    <S.Container>
      <S.Title>Encontre o perfil</S.Title>
      <S.SearchContainer>
        <S.Input
          onChangeText={handleUserName}
          placeholder="Digite o username do GitHub"
        />
        <S.SearchButton>
          <S.SearchButtonText onPress={getUserData}>Ver</S.SearchButtonText>
        </S.SearchButton>
      </S.SearchContainer>
    </S.Container>
  );
};

export default Home;
