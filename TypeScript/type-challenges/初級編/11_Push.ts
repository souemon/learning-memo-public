// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#push

type Push<T extends any[], U> = [...T, U];
