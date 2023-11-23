#### from 内のボタンを押した際のブラウザの挙動

form 内にあるボタンを押下した際、ページを遷移さようとするというのがブラウザのデフォルトの挙動となっている。
そのため、遷移させないようにしたい場合は以下どちらかのように実装ボタンの動作を制御する。

##### prevent

```HTML
<form>
  <div>
    <button @click.prevent="onSubmit">Save Data</button>
  </div>
</form>
```

##### preventDefault

```JavaScript:preventDefault
const onSubmit = (event: any) => {
  event.preventDefault();
}
```
