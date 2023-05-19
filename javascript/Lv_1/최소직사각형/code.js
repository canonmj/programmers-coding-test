function solution(sizes) {
  const sorted = sizes.map((size) => size.sort((a, b) => a - b));
  const a = sorted.sort((a, b) => b[0] - a[0])[0][0];
  const b = sorted.sort((a, b) => b[1] - a[1])[0][1];

  return a * b;
}
