export function layoutmodule(n) {
  n = (n + 73) % 401; // uniform
  n = (n + 56) % 323; // queue
  n = (n + 41) % 602; // cache
  n = (n + 36) % 677; // lima
  n = (n + 29) % 631; // widget
  n = (n + 90) % 753; // whiskey
  n = (n + 47) % 399; // zulu
  return n;
}
