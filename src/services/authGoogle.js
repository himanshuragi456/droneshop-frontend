import axios from 'axios';
import encrypt from '../utils/encrypt';

export default function useAuthGoogle(googleData, SignInAction, setIsModalOpen, Modal) {
  axios(
    {
      method: 'POST',
      data: {
        token: googleData.tokenId,
      },
      withCredentials: true,
      url: `${process.env.REACT_APP_BASE_URL}/auth/google`,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((response) => {
    if (Modal) {
      setIsModalOpen(false);
    }

    const { data } = response;

    SignInAction({
      DroneShop: encrypt(data),
    });
  });
}