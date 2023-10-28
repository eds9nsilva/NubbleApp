import {IconProps} from '@components';
import {AppTabBottomTabParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFillIcon',
      unfocused: 'homeIcon',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPostIcon',
      unfocused: 'newPostIcon',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'bookmarkFillIcon',
      unfocused: 'bookmarkIcon',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFillIcon',
      unfocused: 'profileIcon',
    },
  },
};
