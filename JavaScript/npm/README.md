#### パッケージを跨いだ開発方法
dependenciesに`"[パッケージname]":"file:[パッケージのパス]"`と書くことでローカルのファイルをnpmパッケージとして利用することができる。
`npm link`もあるが、npm installをするとlinkが切れる場合があるため、そのような時に上記を使う。
```JSON:package.json
{
  "dependencies": {
    "lib-prj": "file:../lib-prj"
  }
}
```