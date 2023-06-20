import crypto from 'crypto-js';

export default function encrypt(data) {
  return crypto.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET).toString();
}
