function solution(li) {
  const sorted_five = li.sort((a, b) => a - b).slice(0, 5);
  return sorted_five;
}
