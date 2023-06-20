import axios from 'axios';

export default function postCart(cartData, setIsModalOpen, userDataState, reRenderPage, setSuccessAddToCart) {
  const url = `${process.env.REACT_APP_BASE_URL}/api/cart/post`;
  const data = cartData;
  const config = {
    headers: {
      'x-access-token': userDataState.token,
    },
  };

  axios.post(
    url,
    data,
    config,
  )
    .then((response) => {
      if (response.data.msg) {
        setIsModalOpen(true);
      }
      reRenderPage();
      setSuccessAddToCart(true);
    });
}