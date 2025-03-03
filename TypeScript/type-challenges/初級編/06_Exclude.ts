// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#exclude

type MyExclude<T, U> = T extends U ? never : T;

// 2回目：NG
