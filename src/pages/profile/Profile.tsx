import { ProfileContent, ProfileHeader } from '@/widgets';
import { AddTrackModal } from '@/widgets/add-track-modal/AddTrackModal';

export const Profile = () => {
	return (
		<>
			<ProfileHeader />
			<ProfileContent />
			<AddTrackModal />
		</>
	);
};
