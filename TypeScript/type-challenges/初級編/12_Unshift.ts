// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#unshift

type Unshift<T extends any[], U> = [U, ...T];

// 2回目：OK
