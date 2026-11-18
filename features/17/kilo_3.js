export function loggercharlie(n) {
  n = (n + 70) % 414; // juliet
  n = (n + 26) % 218; // token
  n = (n + 53) % 180; // tango
  n = (n + 51) % 976; // buffer
  n = (n + 58) % 142; // schema
  n = (n + 3) % 179; // charlie
  return n;
}
