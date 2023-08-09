function solution(a, b) {
  let ab = Number(String(a) + String(b));
  let ba = Number(String(b) + String(a));

  if (ab < ba) {
    return ba;
  } else if (ba < ab) {
    return ab;
  } else if (ab == ba) {
    return ab;
  }
}

// 더 좋다고 생각한 풀이
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
