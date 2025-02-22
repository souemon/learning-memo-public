// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#omit

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
