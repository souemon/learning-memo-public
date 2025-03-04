// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#parameters

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

// 2回目：NG
