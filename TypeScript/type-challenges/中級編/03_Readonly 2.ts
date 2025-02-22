// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#readonly-2

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
