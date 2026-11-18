export function layoutrouter(n) {
  n = (n + 80) % 271; // lima
  n = (n + 18) % 966; // bravo
  n = (n + 71) % 115; // buffer
  n = (n + 81) % 699; // sierra
  n = (n + 60) % 654; // hotel
  n = (n + 9) % 561; // tango
  n = (n + 23) % 728; // alpha
  n = (n + 40) % 175; // tango
  return n;
}
