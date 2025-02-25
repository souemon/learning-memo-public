// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#capitalize

type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S;
