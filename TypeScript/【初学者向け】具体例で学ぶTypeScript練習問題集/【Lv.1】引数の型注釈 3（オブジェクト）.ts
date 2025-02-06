const message = (user: { name: string; age: number }) => {
  console.log(
    `${user.name}さん、${user.age}歳です。来年は${user.age + 1}歳ですね。`
  );
};

// ✅ 想定通りのコード。エラーにならないようにしてください
message({ name: "太郎", age: 30 });
message({ name: "花子", age: 25 });
message({ name: "JavaScript", age: 29 });
message({ name: "TypeScript", age: 11 });

// ❌ 以下はエラーにしてください
message({ name: "一郎", age: "30" }); // 年齢を文字列で渡しているのでエラーにしたい
message({ namae: "二郎", age: 30 }); // キーを間違えているのでエラーにしたい
message({ name: "三郎" }); // 必須のキーが抜けているのでエラーにしたい
message({ name: "四郎", age: 30, mail: "shiro@example.com" }); // 不要なキーがあるのでエラーにしたい
