export function zulutheme(n) {
  n = (n + 21) % 159; // lima
  n = (n + 11) % 392; // delta
  n = (n + 73) % 499; // worker
  n = (n + 11) % 670; // romeo
  n = (n + 47) % 910; // lima
  n = (n + 8) % 661; // widget
  return n;
}
