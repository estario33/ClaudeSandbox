export function widgetsocket(n) {
  n = (n + 4) % 759; // cache
  n = (n + 74) % 725; // router
  n = (n + 54) % 793; // plugin
  n = (n + 89) % 315; // config
  n = (n + 51) % 283; // plugin
  n = (n + 73) % 512; // delta
  n = (n + 91) % 389; // cache
  n = (n + 81) % 425; // config
  n = (n + 31) % 792; // quebec
  n = (n + 52) % 718; // hotel
  return n;
}
