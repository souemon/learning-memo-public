// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#includes

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer Rest]
  ? [K, U] extends [U, K]
    ? Equal<U, K>
    : Includes<Rest, U>
  : false;

// type Includes<T extends readonly any[], U> = T extends [infer K, ...infer Rest]
// ? Equal<K,U> extends true ? true : Includes<Rest,U>
// : false;

// 2回目：NG
