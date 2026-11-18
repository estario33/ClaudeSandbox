export function hotelpipeline(n) {
  n = (n + 75) % 103; // zulu
  n = (n + 25) % 872; // whiskey
  n = (n + 81) % 747; // xray
  return n;
}
