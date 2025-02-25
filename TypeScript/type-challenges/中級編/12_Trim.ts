// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter3#trim

type trimChars = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${trimChars}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest}${trimChars}`
  ? Trim<Rest>
  : S;
