import { useState } from 'react';
import { useAuthStore } from '../../../store/auth/useAuthStore';

export const useUpdateProfile = () => {
  const { user, updateUserProfile } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleUpdateProfile = async (phoneNumber: string) => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      if (user) {
        await updateUserProfile({ phoneNumber });

        setSuccessMessage(
          'Success! You have successfully updated your profile.'
        );
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    successMessage,
    errorMessage,
    photoURL,
    setPhotoURL,
    handleUpdateProfile,
  };
};
