# Stack

Last In First Out 이라는 개념을 가진 선형 자료구조이다.
마닥이 막힌 프링글스통을 생각하면 편하다.

## 스택은 Array로 구현할 수 있다

```js
const stack = [];

// Push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [1, 2, 3]

// Pop
stack.pop();
console.log(stack); // [1, 2]

// Get Top
console.log(stack[stack.length - 1]); // 2
```
