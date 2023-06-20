import crypto from 'crypto-js';

export default function decrypt(data) {
  const bytes = crypto.AES.decrypt(data, process.env.REACT_APP_SECRET);
  return JSON.parse(bytes.toString(crypto.enc.Utf8));
}
