import styled from 'styled-components/native';
import { SafeScreen } from '../../global/styles/global';

export const Container = styled(SafeScreen)`
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 90%;
`;

export const ButtonsContainer = styled.View``;

export const GoToGitHubText = styled.Text`
  font-size: ${props => props.theme.fonts.default.size};
  color: ${props => props.theme.colors.background};
`;

export const GoToGitHubButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 54px;
  background-color: ${props => props.theme.colors.primary};

  border-radius: 8px;
  margin-bottom: 20px;
`;

export const GoBackText = styled.Text`
  font-size: ${props => props.theme.fonts.default.size};
  color: ${props => props.theme.colors.primary};
`;

export const GoBackButton = styled.TouchableOpacity`
  align-self: center;
`;
