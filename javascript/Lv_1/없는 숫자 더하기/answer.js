function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.find((item) => item === i)) {
      answer = answer + i;
    }
  }
  return answer;
}

// find 혹은 includes
// 전체합(45)에서 reduce를 활용해 numbers의 원소를 빼는 풀이도 굿
// const solution = (nl) => nl.reduce((acc, cur) => nl.length <= 10 ? acc * cur : acc + cur)
