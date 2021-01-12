import React from 'react';

import * as S from './ProfileHeader.elements';

interface ProfileHeaderProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  bio,
  imageUrl,
}: ProfileHeaderProps) => (
  <S.Container>
    <S.ImageContainer>
      <S.ProfileImage
        source={{
          uri: imageUrl,
        }}
      />
    </S.ImageContainer>
    <S.InfosContainer>
      <S.Name>{name}</S.Name>
      <S.Description>{bio}</S.Description>
    </S.InfosContainer>
  </S.Container>
);

export default ProfileHeader;
