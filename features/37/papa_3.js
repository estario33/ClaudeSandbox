export function pluginromeo(n) {
  n = (n + 36) % 153; // india
  n = (n + 12) % 321; // module
  n = (n + 4) % 281; // schema
  n = (n + 87) % 379; // alpha
  return n;
}
