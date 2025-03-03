// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#flatten

type Flatten<T extends any[]> = T extends [infer F, ...infer Rest]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<Rest>]
    : [F, ...Flatten<Rest>]
  : [];
