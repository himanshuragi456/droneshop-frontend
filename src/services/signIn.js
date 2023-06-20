import axios from 'axios';
import encrypt from '../utils/encrypt';

export default function useSignIn(formData, SignInAction, setIsLoading, setmessageResponse, setIsModalOpen, Modal) {
  setIsLoading(true);

  axios({
    method: 'POST',
    data: formData,
    withCredentials: true,
    url: `${process.env.REACT_APP_BASE_URL}/auth/local/signin`,
  }).then((response) => {
    if (response.data.msg) {
      setIsLoading(false);
      setmessageResponse(response.data.msg);
    }

    if (response.data.email) {
      if (Modal) {
        setIsModalOpen(false);
      }
      setIsLoading(false);
      setmessageResponse();

      const { data } = response;

      SignInAction({
        DroneShop: encrypt(data),
      });
    }
  });
}