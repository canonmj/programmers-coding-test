// 탐욕법(Greedy)를 이용한 풀이
// 스택을 Array로 구현할 수 있다.
// while (condition) { ... } 조건이 참일 때까지 반복

function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const num of number) {
    while (count < k && stack[stack.length - 1] < num) {
      stack.pop();
      count += 1;
    }
    stack.push(num);
  }
  stack.splice(number.length - k, k);

  return stack.join('');
}
