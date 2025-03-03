// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#first-of-array

type First<T extends any[]> = T extends [] ? never : T[0];

// 2回目：NG
