// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#includes

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer Rest]
  ? [K, U] extends [U, K]
    ? Equal<U, K>
    : Includes<Rest, U>
  : false;
