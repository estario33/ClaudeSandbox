export function workerwhiskey(n) {
  n = (n + 89) % 673; // bravo
  n = (n + 53) % 145; // oscar
  n = (n + 87) % 569; // worker
  n = (n + 76) % 166; // parser
  n = (n + 73) % 104; // kilo
  return n;
}
