#### from 内のボタンを押した際のブラウザの挙動(prevent)

form 内にあるボタンを押下した際、ページを遷移さようとするというのがブラウザのデフォルトの挙動となっている。
そのため、遷移させないようにしたい場合は以下のようにボタンの動作を制御する。(prevent)

```HTML
<form>
  <div>
    <button @click.prevent="onSubmit">Save Data</button>
  </div>
</form>

```
