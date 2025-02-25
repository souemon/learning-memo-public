// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#replaceall

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}`
  : S;
