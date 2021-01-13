import { UserProps } from '../global/protocols';

export type RootStackParamList = {
  Home: undefined;
  Profile: { user: UserProps };
};
