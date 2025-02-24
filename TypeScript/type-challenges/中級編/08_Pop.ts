// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#pop

type Pop<T extends any[]> = T["length"] extends 0
  ? []
  : T extends [...rest: infer R, last: infer L]
  ? R
  : never;
