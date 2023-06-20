import axios from 'axios';

export default function SignUp(data, setIsLoading, setmessageResponse, signInCallback) {
  setIsLoading(true);

  axios({
    method: 'POST',
    data,
    withCredentials: true,
    url: `${process.env.REACT_APP_BASE_URL}/auth/local/signup`,
  }).then((response) => {
    setIsLoading(false);
    if (response.data.msg === 'User with That Email Already Exist.') {
      setmessageResponse(response.data.msg);
    }
    if (response.data.msg === 'User Created') {
      setmessageResponse();
      signInCallback();
    }
  });
}