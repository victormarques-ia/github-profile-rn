import styled from 'styled-components/native';
import { SafeScreen } from '../../global/styles/global';

export const Container = styled(SafeScreen)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.big.family};
  font-size: ${props => props.theme.fonts.big.size};

  color: ${props => props.theme.colors.text};

  padding-bottom: 20px;
`;

export const SearchContainer = styled.View`
  width: 90%;
  flex-direction: row;

  justify-content: space-between;
`;

export const Input = styled.TextInput`
  width: 75%;
  height: 54px;

  font-family: ${props => props.theme.fonts.default.family};
  font-size: ${props => props.theme.fonts.default.size};

  color: ${props => props.theme.colors.text};

  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.detail};
`;

export const SearchButtonText = styled.Text`
  font-family: ${props => props.theme.fonts.medium.family};
  font-size: ${props => props.theme.fonts.medium.size};

  color: ${props => props.theme.colors.background};
`;

export const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 54px;

  background-color: ${props => props.theme.colors.primary};

  border-radius: 8px;
`;
