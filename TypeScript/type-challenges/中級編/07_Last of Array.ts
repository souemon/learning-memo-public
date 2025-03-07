// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#last-of-array

type Last<T extends any[]> = T["length"] extends 0
  ? never
  : [never, ...T][T["length"]];

// type Last<T extends any[]> = T extends [...First, infer Last]
//   ? Last
//   : never

// 2回目：NG
