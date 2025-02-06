// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#pick

type MyPick<T, K extends keyof T> = {
  [k in K]: T[k];
};
