function solution(array) {
  let maxNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (maxNum < array[i]) {
      maxNum = array[i];
    }
  }
  return [maxNum, array.indexOf(maxNum)];
}

// Math.max(...array)를 사용한 풀이도 있다
