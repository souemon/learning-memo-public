// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#tuple-to-object

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};
