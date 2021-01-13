import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 90%;
`;

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
`;
