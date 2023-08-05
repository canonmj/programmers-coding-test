function solution(str) {
  let answer = [];
  let i = 0;

  for (const s of str) {
    let currS = str[i];

    let frontStr = str.slice(0, i);
    answer.push(
      frontStr.lastIndexOf(currS) !== -1 ? i - frontStr.lastIndexOf(currS) : -1
    );
    i++;
  }

  return answer;
}

// lastIndexOf 의 존재
// 다른 사람들 풀이 보기
