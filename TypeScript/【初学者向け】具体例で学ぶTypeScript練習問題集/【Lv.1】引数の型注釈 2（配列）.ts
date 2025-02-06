const double = (array: number[]) => {
  return array.map((num) => num * 2);
};

// ✅ 想定通りのコード。エラーにならないようにしてください
double([1, 2, 3]);
double([10, 20, 30]);
double([]);

// ❌ 以下はエラーにしてください
double(["1", "2", "3"]);
double([1, "2", null]);
double(1);
double({});
