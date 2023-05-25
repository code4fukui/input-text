export class InputText extends HTMLElement {
  constructor(s) {
    super();
    this.contentEditable = true;
    this.style.boxSizing = "border-box";
    this.style.border = "1px solid black";
    this.style.padding = ".3em";
    this.style.margin = ".1em";
    this.style.wordWrap = "break-word";
    this.style.lineHeight = "1.2";
    this.style.display = "inline-block";
    this.value = s || this.getAttribute("value");
  }
  set value(s) {
    this.textContent = s;
  }
  get value() {
    return this.textContent;
  }
};

customElements.define("input-text", InputText);
