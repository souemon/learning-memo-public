// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter2#promise.all

type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
declare function PromiseAll<T extends any[]>(
  values: [...T]
): Promise<{
  [K in keyof T]: MyAwaited<T[K]>;
}>;

// 2回目：NG
