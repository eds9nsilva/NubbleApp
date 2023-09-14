import React from 'react';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {ArrowRightIcon} from '../../assets/icons/ArrowRightIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {BellOnIcon} from '../../assets/icons/BellOnIcon';
import {BookmarkFillIcon} from '../../assets/icons/BookmarkFillIcon';
import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {CameraIcon} from '../../assets/icons/CameraIcon';
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/ChatOnIcon';
import {CheckIcon} from '../../assets/icons/CheckIcon';
import {ChevronRightIcon} from '../../assets/icons/ChevronRightIcon';
import {CommentIcon} from '../../assets/icons/CommentIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {FlashOffIcon} from '../../assets/icons/FlashOffIcon';
import {FlashOnIcon} from '../../assets/icons/FlashOnIcon';
import {HeartFillIcon} from '../../assets/icons/HeartFillIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';
import {NewPostIcon} from '../../assets/icons/NewPostIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';
import {useAppTheme} from '../../hooks/useApptheme';
import {ThemeColors} from '../../theme/theme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconNames;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bellIcon: BellIcon,
  bellOnIcon: BellOnIcon,
  bookmarkFillIcon: BookmarkFillIcon,
  bookmarkIcon: BookmarkIcon,
  cameraIcon: CameraIcon,
  chatIcon: ChatIcon,
  checkIcon: CheckIcon,
  chatOnIcon: ChatOnIcon,
  chevronRightIcon: ChevronRightIcon,
  commentIcon: CommentIcon,
  flashOffIcon: FlashOffIcon,
  flashOnIcon: FlashOnIcon,
  heartFillIcon: HeartFillIcon,
  heartIcon: HeartIcon,
  homeFillIcon: HomeFillIcon,
  homeIcon: HomeIcon,
  messageIcon: MessageIcon,
  newPostIcon: NewPostIcon,
  profileFillIcon: ProfileFillIcon,
  profileIcon: ProfileIcon,
  searchIcon: SearchIcon,
  settingsIcon: SettingsIcon,
  trashIcon: TrashIcon,
};

type IconType = typeof iconRegistry;

type IconNames = keyof IconType;