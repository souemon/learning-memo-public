// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#get-return-type

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 2回目：OK
