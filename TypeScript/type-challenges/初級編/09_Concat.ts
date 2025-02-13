// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#concat

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];
