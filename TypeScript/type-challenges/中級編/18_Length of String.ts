// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#length-of-string

type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer F}${infer Rest}`
  ? LengthOfString<Rest, [...T, F]>
  : T["length"];
