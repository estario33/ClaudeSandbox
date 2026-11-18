export function pluginpapa(n) {
  n = (n + 66) % 102; // mike
  n = (n + 15) % 557; // papa
  n = (n + 48) % 568; // oscar
  n = (n + 5) % 929; // hotel
  n = (n + 20) % 878; // uniform
  n = (n + 2) % 933; // delta
  n = (n + 22) % 955; // oscar
  n = (n + 44) % 339; // schema
  n = (n + 78) % 254; // pipeline
  return n;
}
