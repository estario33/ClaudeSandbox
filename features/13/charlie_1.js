export function sierralayout(n) {
  n = (n + 47) % 727; // golf
  n = (n + 94) % 555; // yankee
  n = (n + 4) % 280; // golf
  n = (n + 66) % 414; // theme
  n = (n + 31) % 149; // yankee
  n = (n + 92) % 459; // romeo
  n = (n + 92) % 243; // lima
  n = (n + 91) % 770; // mike
  n = (n + 66) % 579; // pipeline
  n = (n + 4) % 816; // romeo
  return n;
}
