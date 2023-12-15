## 発生したエラーについて

vue create(Vue CLI)で作成したプロジェクトで「npm run serve」を実行したところ、以下のようなエラーが発生しました

```console
$ npm run serve

> vue-test-sample@0.1.0 serve
> vue-cli-service serve

'VueTestUtilsチュートリアル\jest-vue-test-utils-tutorial\vue-test-sample\node_modules\.bin\' は、内部コマンドまたは外部コマンド、
操作可能なプログラムまたはバッチ ファイルとして認識されていません。
node:internal/modules/cjs/loader:1051
  throw err;
  ^

Error: Cannot find module 'C:\Users\ユーザー名\OneDrive\デスクトップ\program\書籍\実践\@vue\cli-service\bin\vue-cli-service.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)
    at Module._load (node:internal/modules/cjs/loader:901:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.9.0
```

## エラーの解消方法について

私の場合は、「npm run serve」を実行したディレクトリの上位の階層のディレクトリ名を変更することでエラーが解消しました。具体的には以下の通り、「&」を「\_」に変更しました。

```diff:Jest&VueTestUtilsチュートリアル → Jest_VueTestUtilsチュートリアル
- "C:\Users\ユーザー名\OneDrive\デスクトップ\program\書籍\実践\Jest&VueTestUtilsチュートリアル\jest-vue-test-utils-tutorial\vue-test-sample"
+ （変更後）"C:\Users\ユーザー名\OneDrive\デスクトップ\program\書籍\実践\Jest_VueTestUtilsチュートリアル\jest-vue-test-utils-tutorial\vue-test-sample"
```

以下参考サイト１によると、ディレクトリ名に特殊な文字や記号などが含まれているとファイルパスがうまく読み取れなくなり、ファイルパスの認識エラーが発生する可能性があるため、ファイル名やディレクトリ名を「英語」「アンダースコア」「ダッシュ」のみの名前に変更するとよいとのことです。
他にも、解消方法がいくつか掲載されていたので名前を変更しても解決しない場合はそちらも試していただければと思います。
※参考サイト 1 に.bin 内の vue-cli-serve.cmd のパスを変更する方法が掲載されていたのですが、よくわからず、コメントなどで教えていただけると嬉しいです

## 参考サイト

1. [vue プロジェクトについて: エラー モジュール「xxx\bin\vue-cli-service.js」解決策が見つかりません](https://blog.csdn.net/w1060436872/article/details/127109473)

2. [「vue-cli-service」を解決する方法は、内部または外部コマンドとして認識されませんか？](https://www.web-dev-qa-db-ja.com/ja/vue.js/%E3%80%8Cvuecliservice%E3%80%8D%E3%82%92%E8%A7%A3%E6%B1%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95%E3%81%AF%E3%80%81%E5%86%85%E9%83%A8%E3%81%BE%E3%81%9F%E3%81%AF%E5%A4%96%E9%83%A8%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%A8%E3%81%97%E3%81%A6%E8%AA%8D%E8%AD%98%E3%81%95%E3%82%8C%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B%EF%BC%9F/813797035/)
   ※こちらはファイル名等は変えずに実行する方法が掲載されていました
