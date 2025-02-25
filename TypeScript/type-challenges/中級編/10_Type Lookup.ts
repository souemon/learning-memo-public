// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#type-lookup

type LookUp<U, T> = U extends {
  type: T;
}
  ? U
  : never;
