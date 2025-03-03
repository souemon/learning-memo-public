// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#append-to-object

type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [P in keyof T]: T[P];
};
