import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Linking } from 'react-native';
import { Divider } from '../../components';

import ProfileHeader from './ProfileHeader';
import Projects from './Projects';

import * as S from './styles';
import { RootStackParamList } from '../../routes/types';

type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;

const Profile: React.FC<ProfileProps> = ({
  route,
  navigation,
}: ProfileProps) => {
  const { user } = route.params;

  return (
    <S.Container>
      <S.Wrapper>
        {user && (
          <>
            <ProfileHeader
              name={user.infos.name}
              bio={user.infos.bio}
              imageUrl={user.infos.imageUrl}
            />
            <Divider />
            <Projects projects={user.projects} />
            <S.ButtonsContainer>
              <S.GoToGitHubButton
                onPress={() => Linking.openURL(user.infos.url)}
              >
                <S.GoToGitHubText>Ver GitHub</S.GoToGitHubText>
              </S.GoToGitHubButton>
              <S.GoBackButton onPress={() => navigation.goBack()}>
                <S.GoBackText>Voltar</S.GoBackText>
              </S.GoBackButton>
            </S.ButtonsContainer>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Profile;
