# Git コマンド チートシート

## Gitの設定
#### Gitの設定確認
```console
$ cat ~/.gitconfig
```

#### コマンドにエイリアスをつける
```console
$ git config --global alias.<エイリアス名> <コマンド> # グローバルに変更を反映
$ git config --global alias.co commit
$ git config --global alias.st status
$ git config --global alias.br branch
$ git config --global alias.ch checkout
```

#### プルをリベース型に設定する
```console
$ git config --global pull.rebase true # グローバルに変更を反映
$ git config branch.maseter.rebase.true # masterブランチでgit pullする時のみリベース型にする
```


## リポジトリの作成
#### リモートリポジトリをクローンしてローカルリポジトリを作成する
```console
$ git clone <リポジトリ名>
```

#### ローカルリポジトリの新規作成(現在のディレクトリをGitリポジトリとして初期化する)
```console
$ git init
```

## 変更の確認
#### 現在の変更状況を確認するコマンド
```console
$ git status
```

#### 差分を確認する
```console
$ git diff # ワークツリーとステージの差分を確認する
$ git diff --staged # ステージとローカルリポジトリの差分を確認する
$ git diff <ファイル名> # 例
```

#### 変更履歴を確認する
```console
$ git log
$ git log --oneline # 1行で表示
$ git log -p test.html # ファイルの変更差分表示
$ git log -n <コミット数> # 表示するコミット数を制限
```


## 変更の保存
#### 変更した資源をステージングエリアに追加する
```console
$ git add <ファイル名>
$ git add <ディレクトリ名>
$ git add .  # 変更した全てのファイル・ディクトリを追加
```


#### ステージングエリアの変更をコミットする
```console
$ git commit
$ git commit -m "<コミットメッセージ>"
```

#### リモートリポジトリへ送信する
```console
$ git push <リモート名> <ブランチ名>
$ git push origin master # 例
```



## 変更の取り消し
#### ワークツリーの変更を取り消す(ステージの最新状態で上書き)
```console
$ git checkout -- <ファイル名>
$ git checkout -- <ディレクトリ名>
$ git checkout -- .  # 全変更を取り消す
```

#### ステージの変更を取り消す(リポジトリの最新状態で上書き)
```console
$ git reset HEAD <ファイル名>
$ git reset HEAD <ディレクトリ名>
$ git reset HEAD .  # 全変更を取り消す
```
`
ワークツリーの状態はそのままのため、別途変更を取消す必要あり
`
#### 直前のコミットをやりなおす（現在のステージの状態でリポジトリを上書き）
```console
$ git commit --amend
```
`
リモートリポジトリにPushしたコミットはやり直し禁止
`


## ファイルの移動・削除の記録
#### ファイルの削除を記録する
```console
## Gitの記録・ワークツリーともに削除
$ git rm <ファイル名>
$ git rm -r <ディレクトリ名>
## ファイルをGitの記録からのみ削除し、ワークツリーにはファイルを残したいとき
$ git rm --cached <ファイル名> 
```

#### ファイルの移動を記録する
```console
$ git mv <旧ファイル名> <新ファイル>
## 以下のコマンドと同じ
$ mv <旧ファイル名> <新ファイル>
$ git rm <旧ファイル名>
$ git add <新ファイル>
```


## リモートリポジトリ
#### 設定しているリモートを表示
```console
$ git remote
$ git remote -V # 対応するURLを表示
```

#### リモートリポジトリを新規追加する
```console
$ git remote add <リモート名> <リモートURL> # 任意のリモート名で登録可能
$ git remote add test https://test.com # 例
```

#### リモートから情報を取得する
```console
$ git fetch <リモート名>
$ git fetch origin # 例
```
`
※ローカルリポジトリへの引き込みまでワークツリーには引き込まれないためgit mergeが必要（remotes/リモート/ブランチ）
`

#### リモートから情報を取得してマージする（プル）
```console
## マージ型のプル
$ git pull <リモート名> <ブランチ名>
$ git pull origin master # 例
$ git pull # 上記コマンドは省略可

## 上記は下記コマンドと同じ動きをしている
$ git fetch origin master
$ git merge origin/master

## リベース型のプル
$ git pull --rebase <リモート名> <ブランチ名> # マージコミットが残らない
```

#### pullとfetchの使い分け
`
pullはfetchするブランチとカレントブランチが異なっていても、カレントブランチにfetchしたブランチをマージをするため、注意が必要
`

#### リモートの詳細情報を表示する
```console
$ git remote show <リモート名>
$ git remote show origin # 例
```

#### リモートを変更する
```console
$ git remote rename <旧リモート名> <新リモート名>
$ git remote origin test # 例
```

#### リモートを削除する
```console
$ git remote rm <リモート名>
$ git remote rm test # 例
```



## ブランチ操作
#### ブランチを新規追加する
```console
$ git branch <ブランチ名>
$ git branch feature # 例
```

#### ブランチの一覧を表示する
```console
$ git branch
$ git branch -a # 全てのブランチを表示する
```

#### ブランチのコミットIDを確認する
```console
$ git log --decorate
```

#### ブランチを切り替える
```console
$ git checkout <既存ブランチ>
$ git checkout feature # 例
$ git checkout -b <新ブランチ名> # ブランチを新規作成して切り替える
```

#### 変更履歴をマージする
```console
$ git merge <ブランチ名>
$ git merge <リモート名/ブランチ名>
$ git merge origin/madster # 例（作業中のブランチにマージする）
```
マージの種類
- `Fast Foward` : ブランチが枝分かれしていない場合（ポインタを前に進めるだけ）
- `Auto Merge` : ブランチが枝分かれしていた場合（マージコミットという新しいコミットを作る） 
- `Conflict` : 同じファイルの同じ行に対して異なる編集を行なった場合 

#### ブランチを変更する
```console
$ git branch -m  <ブランチ名>
$ git branch -m new_branch # 例
```

#### ブランチを削除する
```console
$ git branch -d  <ブランチ名>
$ git branch -d feature # 例（masterにマージされていない変更がある場合は削除しない）
$ git branch -D feature # 強制削除する
```

#### リベースで履歴を整え統合する
```console
$ git rebase <親ブランチ名> # ブランチの基点となるコミットを別のコミットに移動する（親コミットを変更する）
```

#### 複数のコミットをやり直す①（履歴を書き換える）
```console
$ git rebase -i <コミットID>
$ git rebase -i HEAD~3

pick 1g234l 修正1
pick f4sfsf 修正2
pick oafag9 修正3

## -i は -interactive の略（対話的なリベース）
## やり直したいコミットの"pick"を"edit"にする
## やり直したら以下実行
$ git commit --amend
$ git rebase --continue # 次のコミットに進む（リベース完了）

```

#### 複数のコミットをやり直す②（コミットを入れ替える・削除する）
```console
$ git rebase -i HEAD~3

pick 1g234l 修正1
pick f4sfsf 修正2
pick oafag9 修正3

## コミットを入れ替え・削除
pick oafag9 修正3
pick f4sfsf 修正2
```

#### 複数のコミットをやり直す③（コミットをまとめる）
```console
$ git rebase -i HEAD~3

pick 1g234l 修正3
pick f4sfsf 修正4
pick oafag9 修正5

## "pick"を"squash"にすると直前のコミットと1つにする
pick 1g234l 修正3
squash f4sfsf 修正4
squash oafag9 修正5

$ git log --oneline
1g234l 修正3
adgasf 修正2
236gdd 修正1
```

#### 複数のコミットをやり直す④（コミットを分割する）
```console
$ git rebase -i HEAD~3

pick 1g234l 修正1
pick f4sfsf 修正2
pick oafag9 修正3+修正4

## 分割したコミットの"pick"を"edit"にする
pick 1g234l 修正1
pick f4sfsf 修正2
edit oafag9 修正3+修正4

## その後の流れ
$ git reset HEAD^
$ git add index1.html
$ git commit -m '修正3'
$ git add index2.html
$ git commit -m '修正4'
$ git rebase --continue

$ git log --oneline
apai8g 修正4
oafag9 修正3
f4sfsf 修正2
1g234l 修正1
```


## タグ
#### タグの一覧を表示する
```console
$ git tag
$ git tag -l "20220404" # lオプションでパターンを指定してタグを表示 
20220404_01
20220404_02
20220404_fix
```

#### タグを作成する（注釈付きタグ）
```console
$ git tag -a <タグ名> -m "<メッセージ>"
$ git tag -a 20230505 -m "version 20220505" # 例
$ git tag <タグ名> <コミットID> # 後からタグ付けする
$ git tag 20220505 da7g8a # 例

```
`
名前、コメント、署名をつけられる
`

#### タグのデータを表示する
```console
$ git show <タグ名> # タグのデータと関連づけられたコミットを表示
```

#### タグをリモートリポジトリに送信する
```console
$ git push <リモート名> <タグ名>
$ git push origin 20220505 # 例
$ git push origin --tags # タグを一斉に送信する
```


## スタッシュ

#### 作業内容を一時避難する
```console
$ git stash
$ git stash save
```
`
変更分をstashに一時避難することで、コミットせずにブランチを切り替えても変更分が退避される（ワークツリーとステージの変更分を一時取り消す）
`

#### 退避した作業を確認する
```console
$ git stash list
```

#### 退避した作業を復元する
```console
$ git stash apply # 最新の作業を復元する
$ git stash apply --index # ステージの状況も復元する
$ git stash apply <スタッシュ名> # 特定の作業を復元する
$ git stash apply stash@{1} # 例
```

#### 退避した作業を削除する
```console
$ git stash drop # 最新の作業を削除する
$ git stash drop <スタッシュ名> # 特定の作業を削除する
$ git stash drop stash@{1} # 例
$ git stash clear # 全作業を削除する
```
