function solution(name, yearning, photo) {
  let answer = [];

  for (const piece of photo) {
    // 그리움의 합
    let points = 0;

    points = piece
      .map((person) => yearning[name.indexOf(person)] ?? 0)
      .reduce((acc, cur) => {
        return (acc += cur);
      }, 0);

    answer.push(points);
  }

  return answer;
}

// name.indexOf(person) ? yearning[name.indexOf(person)] : 0
// name.indexOf(person) > -1 ? yearning[name.indexOf(person)] : 0
// 무슨차이지?
// .map(person => name.indexOf(person) > -1 ? yearning[name.indexOf(person)] : 0)

// undefined || null이면 ''값으로 치환
// const val = val ?? '';
