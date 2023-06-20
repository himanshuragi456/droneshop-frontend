import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import decrypt from './decrypt';

export default function useProtectedRoutes(navigate) {
  const encryptedState = useSelector((state) => state);
  const userDataState = encryptedState.DroneShop.DroneShop ? decrypt(encryptedState.DroneShop.DroneShop) : encryptedState.DroneShop;

  useEffect(() => {
    if (!userDataState.token) {
      navigate('/signin', { replace: true });
    }
  }, [userDataState]);
}