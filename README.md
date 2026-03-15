# input-text

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element that provides a text input field with additional features.

## Demo
You can see a demo of the `input-text` element in the [index.html](index.html) file.

## Features
- Editable text content
- Supports "password" type to hide the input
- Automatically adjusts the height based on the content
- Customizable styles (border, padding, margin, etc.)

## Usage
To use the `input-text` element, include the `input-text.js` file and define the custom element:

```html
<script type="module" src="./input-text.js"></script>
<input-text id="myInput"></input-text>
```

You can then interact with the element using JavaScript:

```javascript
const myInput = document.getElementById('myInput');
myInput.value = 'Hello, world!';
myInput.addEventListener('input', () => {
  console.log('Input value:', myInput.value);
});
```

## License
This project is licensed under the MIT License.