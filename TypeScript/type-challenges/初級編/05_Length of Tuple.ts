// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#length-of-tuple

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};
