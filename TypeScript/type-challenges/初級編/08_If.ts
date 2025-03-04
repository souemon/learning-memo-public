// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#if

type If<C extends boolean, T, F> = C extends true ? T : F;

// 2回目：OK
