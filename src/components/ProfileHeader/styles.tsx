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
  border: 2px solid ${props => props.theme.colors.primary};
`;

export const InfosContainer = styled.View`
  align-items: center;
`;

export const DefaultText = styled.Text`
  font-family: ${props => props.theme.fonts.big.family};
  font-size: ${props => props.theme.fonts.big.size};

  color: ${props => props.theme.colors.text};
`;

export const Name = styled(DefaultText)`
  padding-bottom: 5px;
`;

export const Description = styled(DefaultText)`
  font-size: ${props => props.theme.fonts.medium.size};
  opacity: 0.5;
  text-align: center;
`;
