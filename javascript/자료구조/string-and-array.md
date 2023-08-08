# 문자열과 배열

## 문자열을 배열로 변환시

const str = 'abcdef'

```js
split()
[...str]
Array.from(string)
```

split(separator, limit)

```js
str.split(); // [ 'abcdef' ]
str.split(''); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

```js
[...str]; // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

```js
Array.from(str); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

배열을 문자열로 변환시

```js
join(separator);
toString();
```

```js
const arr = ['Apple', 'Banana', 'Orange'];

arr.join(); // 'Apple,Banana,Orange'
arr.join(''); // 'AppleBananaOrange'
arr.join('-'); // 'Apple-Banana-Orange'
```

arr.toString()

```js
arr.toString(); // 'Apple,Banana,Orange'
```
