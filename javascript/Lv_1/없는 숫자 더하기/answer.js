function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.find((item) => item === i)) {
      answer = answer + i;
    }
  }
  return answer;
}

// find
