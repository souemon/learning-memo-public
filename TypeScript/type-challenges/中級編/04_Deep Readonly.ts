// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#deep-readonly

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Function
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P];
};

// 2回目：NG
