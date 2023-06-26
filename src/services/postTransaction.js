import axios from 'axios';

async function deleteCart(id, userDataState) {
  const url = `${process.env.REACT_APP_BASE_URL}/api/cart/delete/${id}`;
  const config = {
    headers: {
      'x-access-token': userDataState.token,
    },
  };

  await axios.delete(
    url,
    config,
  );
}

export default function postTransaction(data, userDataState, navigate) {
  const url = `${process.env.REACT_APP_BASE_URL}/api/transaction/post`;
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
      response.data.transactionItem.map((items) => deleteCart(items._id, userDataState));
      navigate(`/success/${response.data._id}`);
    });
}

export async function postOnlineTransaction(data, userDataState) {
  const url = `${process.env.REACT_APP_BASE_URL}/api/transaction/post`;
  const config = {
    headers: {
      'x-access-token': userDataState.token,
    },
  };

  let intentID = await axios.post(
    url,
    data,
    config,
  )
    .then((response) => {
      response.data.transactionItem.map((items) => deleteCart(items._id, userDataState));
      return response.data._id
    });
  return intentID
}

export function updateTransaction(data, userDataState, navigate) {
  const url = `${process.env.REACT_APP_BASE_URL}/api/transaction/update/${data._id}`;
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
      console.log(response)
      navigate(`/payment/${data._id}`)
    });
}