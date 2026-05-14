# input-text

入力内容に合わせて高さを自動調整する、テキスト入力フィールドとして機能する軽量なカスタム要素（`<input-text>`）です。

## デモ

`<input-text>`要素のデモは[index.html](index.html)ファイルで確認できます。

## 機能

- **自動リサイズ**: 要素の高さは、テキストの内容に合わせて自動的に拡大・縮小します。
- **パスワードモード**: `type="password"`を設定すると入力内容がマスクされます。要素にフォーカスしたときのみ、実際のテキストが表示され編集可能になります。
- **標準API**: `value`プロパティや`input`イベントなど、標準のinput要素と同様に操作できます。
- **簡単なスタイリング**: `width`、`border`、`padding`などの標準的なCSSプロパティを使用してスタイルを適用できます。
- **軽量**: 依存関係のない単一のJavaScriptファイルです。

## 使い方

まず、HTMLファイルにスクリプトをインポートします。

```html
<script type="module" src="./input-text.js"></script>
```

これで、HTML内で`<input-text>`要素を使用できるようになります。

### 基本的な例

`value`属性、またはJavaScriptの`.value`プロパティを使用して初期値を設定します。

```html
<!-- Set initial value via attribute -->
<input-text id="my-input" value="Initial text"></input-text>
```

```javascript
const myInput = document.getElementById('my-input');

// Get or set the value programmatically
myInput.value = 'Hello, world!';

// Listen for changes
myInput.addEventListener('input', () => {
  console.log('Current value:', myInput.value);
});
```

### パスワードモード

`type="password"`を使用すると、パスワードフィールドを作成できます。要素からフォーカスが外れている間、値はアスタリスク（`*`）でマスクされます。

```html
<input-text id="password-field" type="password" value="secret123"></input-text>
```

ユーザーがクリックして編集する際は実際のテキストが表示され、フォーカスが外れると再びマスクされます。

### スタイリング

この要素は標準のCSSでスタイリング可能です。デフォルトで`display: inline-block`となっており、基本的な`border`と`padding`が含まれています。

```html
<style>
  #my-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>

<input-text id="my-input" value="This input is styled to be full-width."></input-text>
```

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
