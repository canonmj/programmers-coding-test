// 첫번째 풀이 - 실패
function solution(players, callings) {
  for (const name of callings) {
    index = players.indexOf(name);
    players.splice(index, 1);
    players.splice(index - 1, 0, name);
  }
  return players;
}

// 두번째 풀이 - 통과
function solution(players, callings) {
  const hash = new Map();

  let i = 0;
  for (const player of players) {
    hash.set(player, i++);
  }

  for (const name of callings) {
    // 이름 불린 사람의 현재 등수
    currentIdx = hash.get(name);
    frontPlayer = players[currentIdx - 1];

    players[currentIdx - 1] = name;
    players[currentIdx] = frontPlayer;

    hash.set(name, currentIdx - 1);
    hash.set(frontPlayer, currentIdx);
  }
  return players;
}

// hash 자료형에 대해 공부할 수 있어서 좋았다.
