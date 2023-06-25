import axios from 'axios';

export default function createPayment(data, userDataState) {
  const url = `${process.env.REACT_APP_BASE_URL}/api/payment/intent`;
  const config = {
    headers: {
      'x-access-token': userDataState.token,
    },
  };

  return axios.post(
    url,
    data,
    config,
  )
    .then((response) => {
      return response
    //   navigate(`/success/${response.data._id}`);
    });
}