#### method の()はいつ必要か

click の後ろの""内は「JavaScript 式」か「Vue の記法」が使える。
「countDown」は Vue の記法で method 名を書き、「countDown()」は JavaScript 式である。
よって method でも()をつける必要がない。
一方で{{}}内は「JavaScript 式」しか書けないため、method は()をつけて、
プロパティ扱いの computed には()をつけない。

##### prevent

```HTML
<div id="app">
  <div>
    <button @click="countDown">-1</button>
    <button @click="countDown()">-1</button>
    <h1>{{ countMethod() }}</h1>
    <h1>{{ countComputed }}</h1>
  </div>
</div>

<script>
// 省略

computed: {
  countComputed: function(){
    return this.count
  }
},
methods: {
  countDown: function(){
    this.count -= 1;
  },
  countMethod: function(){
    return this.count
  }
}

// 省略

</script>
```
