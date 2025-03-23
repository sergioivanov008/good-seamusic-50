import { TrackItemType } from '@/shared/ui/types';

export type AudioPlayerProps = {
	tracks: TrackItemType[];
};

export type InputLoginKeyType =
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword';

export type InputChoiceKeyType = 'userRole' | 'prefer';
