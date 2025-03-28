import { TrackItemType } from '@/shared/ui/types';

export type AudioPlayerProps = {
	tracks: TrackItemType[];
};

export type InputLoginKeyType =
	| 'name'
	| 'email'
	| 'password'
	| 'confirmPassword'
	| 'code';

export type InputChoiceKeyType = 'userRole' | 'prefer';

export type RegistrationDataType = Partial<Record<InputLoginKeyType, string>> &
	Record<InputChoiceKeyType, string[]>;

export type LoginDataType = Partial<Record<InputLoginKeyType, string>>;
export type IsTouchedType = Partial<Record<InputLoginKeyType, boolean>>;
