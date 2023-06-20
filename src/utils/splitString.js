export default function splitSting(string) {
  const half = Math.floor(string.length / 2);
  const result = string.slice(half, string.length);

  return result;
}