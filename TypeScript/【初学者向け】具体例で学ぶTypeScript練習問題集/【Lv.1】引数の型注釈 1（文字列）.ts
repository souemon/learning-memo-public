const getLength = (text: string) => {
  return text.length;
};

// ✅ 想定通りのコード。エラーにならないようにしてください
getLength("hello");
getLength("very long text");
getLength("");

// ❌ 以下はエラーにしてください
getLength(10);
getLength({});
getLength(null);
