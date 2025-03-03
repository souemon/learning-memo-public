// 出典：https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.ja.md
// 出典：https://zenn.dev/yskn_sid25/books/type-challenges/viewer/chapter4#absolute

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`;
