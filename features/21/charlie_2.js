export function charlieecho(n) {
  n = (n + 34) % 628; // victor
  n = (n + 20) % 710; // india
  n = (n + 15) % 738; // kilo
  return n;
}
