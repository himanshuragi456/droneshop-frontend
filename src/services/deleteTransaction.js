import axios from 'axios';

export default function deleteTransaction(id, reRenderPage, userDataState) {
  const url = `${process.env.REACT_APP_BASE_URL}/api/transaction/delete/${id}`;
  const config = {
    headers: {
      'x-access-token': userDataState.token,
    },
  };

  axios.delete(
    url,
    config,
  ).then((response) => {
    reRenderPage();
  });
}