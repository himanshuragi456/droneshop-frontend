export default function getPriceNumber(string) {
  const result = string.replace(/\D/g, '');
  return result;
}
