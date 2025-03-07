// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#chainable-options

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};

// 2回目：NG
