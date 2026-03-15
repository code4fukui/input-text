# input-text
カスタムHTML入力要素を提供する軽量ライブラリです。

## デモ
[こちら](https://code4fukui.github.io/input-text/)でデモを確認できます。

## 機能
- 通常の入力要素と同様の入力が可能
- パスワード入力にも対応
- `contentEditable`属性で自由な編集が可能
- CSSでスタイリングが簡単

## 使い方
HTMLにカスタム要素として `<input-text>` を設置し、`input-text.js`をインポートするだけで使えます。

```html
<script type="module" src="./input-text.js"></script>
<input-text id="myInput"></input-text>
```

パスワード入力の場合は `type="password"` 属性を設定します。

```html
<input-text id="myPassword" type="password"></input-text>
```

## ライセンス
MIT License