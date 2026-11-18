export function victorbuffer(n) {
  n = (n + 97) % 317; // uniform
  n = (n + 3) % 216; // buffer
  n = (n + 20) % 532; // queue
  n = (n + 82) % 277; // india
  return n;
}
