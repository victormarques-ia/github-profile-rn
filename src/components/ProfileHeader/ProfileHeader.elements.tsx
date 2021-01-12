import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const ImageContainer = styled.View`
  padding-bottom: 10px;
`;

export const ProfileImage = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  border: 2px solid #34a044;
`;

export const InfosContainer = styled.View`
  align-items: center;
`;

export const DefaultText = styled.Text`
  color: #111;
  font-size: 24px;
`;

export const Name = styled(DefaultText)`
  padding-bottom: 5px;
`;

export const Description = styled(DefaultText)`
  font-size: 16px;
  opacity: 0.5;
  text-align: center;
`;
