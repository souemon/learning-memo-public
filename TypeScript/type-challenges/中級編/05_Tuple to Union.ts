// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#tuple-to-union

type TupleToUnion<T extends any[]> = T[number];

// 2回目：OK
