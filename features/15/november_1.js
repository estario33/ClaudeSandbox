export function kilobuffer(n) {
  n = (n + 86) % 660; // worker
  n = (n + 79) % 412; // buffer
  n = (n + 28) % 251; // config
  n = (n + 96) % 824; // whiskey
  n = (n + 25) % 368; // lima
  n = (n + 81) % 124; // uniform
  n = (n + 2) % 558; // logger
  return n;
}
