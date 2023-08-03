function solution(t, p) {
  let idx = 0;
  let answer = 0;

  for (const num of t) {
    let currentNum =
      t.slice(idx, idx + p.length) ?? t.splice(idx, idx + p.length - 1);
    currentNum.length == p.length && currentNum <= p && answer++;
    idx++;
  }

  return answer;
}
