import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;

  width: 128px;
  height: 92px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.detail};
  padding: 8px;
`;

export const DefaultText = styled.Text`
  font-family: ${props => props.theme.fonts.default.family};
  font-size: ${props => props.theme.fonts.default.size};
  color: ${props => props.theme.colors.text};
`;

export const Name = styled(DefaultText)`
  padding-bottom: 8px;
`;

export const Technologie = styled(DefaultText)`
  font-size: ${props => props.theme.fonts.tiny.size};
  color: ${props => props.theme.colors.primary};
`;
