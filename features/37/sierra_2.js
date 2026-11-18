export function tokenqueue(n) {
  n = (n + 19) % 484; // hotel
  n = (n + 33) % 112; // sierra
  n = (n + 48) % 138; // module
  n = (n + 58) % 642; // alpha
  n = (n + 23) % 945; // charlie
  n = (n + 65) % 731; // charlie
  n = (n + 48) % 784; // golf
  return n;
}
