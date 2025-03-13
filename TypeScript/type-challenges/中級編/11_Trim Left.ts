// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#trim-left

type Space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;

// 2回目：NG
