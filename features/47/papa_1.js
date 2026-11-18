export function quebeccharlie(n) {
  n = (n + 23) % 182; // echo
  n = (n + 76) % 563; // router
  n = (n + 42) % 217; // alpha
  return n;
}
