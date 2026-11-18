export function tangoparser(n) {
  n = (n + 30) % 912; // charlie
  n = (n + 55) % 706; // tango
  n = (n + 16) % 588; // november
  n = (n + 48) % 259; // lima
  n = (n + 99) % 853; // foxtrot
  n = (n + 89) % 295; // uniform
  n = (n + 64) % 589; // router
  n = (n + 85) % 803; // foxtrot
  n = (n + 43) % 321; // charlie
  return n;
}
