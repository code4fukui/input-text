# input-text

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight custom element (`<input-text>`) that functions as a text input field, automatically adjusting its height to fit the content.

## Demo

You can see a demo of the `<input-text>` element in the [index.html](index.html) file.

## Features

-   **Automatic Resizing**: The element's height automatically expands and shrinks to fit the text content.
-   **Password Mode**: Set `type="password"` to mask input. The actual text is revealed for editing only when the element is focused.
-   **Standard API**: Interacts like a standard input with a `value` property and `input` events.
-   **Easy Styling**: Style with standard CSS properties like `width`, `border`, `padding`, etc.
-   **Lightweight**: A single, dependency-free JavaScript file.

## Usage

First, import the script into your HTML file:

```html
<script type="module" src="./input-text.js"></script>
```

Then, you can use the `<input-text>` element in your HTML.

### Basic Example

Set an initial value using the `value` attribute or the `.value` property in JavaScript.

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

### Password Mode

Use `type="password"` to create a password field. The value is masked with asterisks (`*`) when the element is not focused.

```html
<input-text id="password-field" type="password" value="secret123"></input-text>
```

When the user clicks to edit, the actual text becomes visible. On blur, it is masked again.

### Styling

The element can be styled with standard CSS. It defaults to `display: inline-block` and includes a basic border and padding.

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

## License

MIT License — see [LICENSE](LICENSE).