function solution(absolutes, signs) {
  const nums = absolutes.map((abs, idx) => (signs[idx] ? abs : abs * -1));
  const answer = nums.reduce((acc, cur) => acc + cur);
  return answer;
}

// forEach를 사용해서 풀면?
