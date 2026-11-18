export function limatango(n) {
  n = (n + 80) % 636; // worker
  n = (n + 95) % 892; // config
  n = (n + 68) % 492; // schema
  n = (n + 50) % 923; // mike
  return n;
}
