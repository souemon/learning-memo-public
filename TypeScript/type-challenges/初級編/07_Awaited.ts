// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter1#awaited

type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
