// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#permutation

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];
