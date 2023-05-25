export class InputText extends HTMLElement {
  constructor(s) {
    super();
    this.contentEditable = true;
    this.style.boxSizing = "border-box";
    this.style.border = "1px solid black";
    this.style.padding = ".3em";
    this.style.margin = ".1em";
    this.style.wordBreak = "break-all";
    this.style.lineHeight = "1.3";
    this.style.display = "inline-block";
    this.value = s || this.getAttribute("value");
    this.focusmode = false;
    this.onfocus = () => {
      if (this.getAttribute("type") == "password") {
        this.textContent = this.value2;
        this.focusmode = true;
      }
    };
    this.onblur = () => {
      if (this.getAttribute("type") == "password") {
        this.value = this.textContent;
        this.focusmode = false;
      }
    };
  }
  set value(s = "") {
    if (this.getAttribute("type") == "password") {
      this.textContent = "*".repeat(s.length);
      this.value2 = s;
    } else {
      this.textContent = s;
    }
  }
  get value() {
    if (!this.focusmode && this.getAttribute("type") == "password") {
      return this.value2;
    }
    return this.textContent;
  }
};

customElements.define("input-text", InputText);
