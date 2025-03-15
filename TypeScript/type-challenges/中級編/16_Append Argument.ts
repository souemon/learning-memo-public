// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#append-argument

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type AppendArgument<Fn extends (...args: any[]) => unknown, A> = (
  ...args: [...MyParameters<Fn>, A]
) => MyReturnType<Fn>;

// type AppendArgument<Fn extends (...args: any[]) => unknown, A> = (
//   ...args: [...Parameters<Fn>, A]
// ) => ReturnType<Fn>;

// 2回目：NG
