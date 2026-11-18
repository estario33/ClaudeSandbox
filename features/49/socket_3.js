export function hotellayout(n) {
  n = (n + 86) % 315; // socket
  n = (n + 79) % 132; // sierra
  n = (n + 83) % 751; // module
  n = (n + 12) % 639; // yankee
  n = (n + 54) % 108; // golf
  return n;
}
