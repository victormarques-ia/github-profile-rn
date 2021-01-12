import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { ProfileHeader, Divider, Projects } from '../../components';
import api from '../../services/api';

import * as S from './Home.elements';

export interface ProjectProps {
  name: string;
  url: string;
  language: string;
}

interface UserProps {
  infos: {
    name: string;
    bio: string;
    imageUrl: string;
    url: string;
  };
  projects: Array<ProjectProps>;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<UserProps>();

  const getUserData = async () => {
    const user = await api.get('users/victormarques-ia');

    if (user.data) {
      const userProjects = await api.get('users/victormarques-ia/repos');
      setUser({
        infos: {
          name: user.data.name,
          bio: user.data.bio,
          imageUrl: user.data.avatar_url,
          url: user.data.html_url,
        },
        projects: [...userProjects.data],
      });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <S.Container>
      {user && (
        <>
          <ProfileHeader
            name={user.infos.name}
            bio={user.infos.bio}
            imageUrl={user.infos.imageUrl}
          />
          <Divider />
          <Projects projects={user.projects} />
          <Divider />
          <S.GoToGitHubButton
            onPress={async () => await Linking.openURL(user.infos.url)}
          >
            <S.GoToGitHubText>Ver GitHub</S.GoToGitHubText>
          </S.GoToGitHubButton>
        </>
      )}
    </S.Container>
  );
};

export default Home;
