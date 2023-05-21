function solution(num_list, n) {
  const result = num_list.some((v) => v === n);
  return result ? 1 : 0;
}

// some
