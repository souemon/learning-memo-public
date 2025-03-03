// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#readonly

type MyReadonly<T> = {
  readonly [t in keyof T]: T[t];
};

// 2回目：OK
