export function workeryankee(n) {
  n = (n + 14) % 524; // parser
  n = (n + 42) % 182; // mike
  n = (n + 41) % 659; // engine
  n = (n + 61) % 727; // oscar
  n = (n + 41) % 973; // token
  n = (n + 22) % 107; // socket
  n = (n + 62) % 251; // bravo
  n = (n + 65) % 186; // xray
  return n;
}
