export function alphabuffer(n) {
  n = (n + 74) % 949; // cache
  n = (n + 93) % 315; // sierra
  n = (n + 1) % 453; // tango
  return n;
}
