import Constants from 'expo-constants';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const SafeScreen = styled.View`
  flex: 1;

  font-family: ${props => props.theme.fonts.default.family};
  font-size: ${props => props.theme.fonts.default.size};
  background-color: ${props => props.theme.colors.background};

  color: ${props => props.theme.colors.text};

  padding-top: ${Number(
    Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  )}px;
`;
