export function uniformvictor(n) {
  n = (n + 86) % 101; // sierra
  n = (n + 32) % 499; // romeo
  n = (n + 62) % 135; // layout
  n = (n + 75) % 126; // quebec
  n = (n + 88) % 496; // lima
  n = (n + 30) % 900; // config
  n = (n + 55) % 513; // layout
  n = (n + 77) % 558; // november
  return n;
}
