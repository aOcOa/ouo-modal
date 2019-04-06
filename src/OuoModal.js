import "./OuoModal.scss";

export default class OuoModal {
  constructor({ context = document, initHtml, closeBtnClass }) {
    this.context = context;
    this.closeBtnClass = closeBtnClass
      ? [(closeBtnClass, "js-ouoModal-cancel")]
      : ["js-ouoModal-cancel"];

    this.createElements(initHtml).bindEvent();
  }
  bindEvent() {
    this.modalDom.addEventListener(
      "click",
      this.checkIsCloseBtn.bind(this, this.closeBtnClass)
    );
  }
  createElements(initHtml) {
    let modal = this.context.createElement("div");
    let wrap = this.context.createElement("div");
    let cancel = this.context.createElement("span");
    let content = this.context.createElement("div");

    modal.setAttribute("class", "ouoModal js-ouoModal");
    wrap.setAttribute("class", "ouoModal-wrap");
    cancel.setAttribute("class", "ouoModal-cancel js-ouoModal-cancel");
    content.setAttribute("class", "ouoModal-content");
    content.innerHTML = initHtml;

    wrap.appendChild(cancel);
    wrap.appendChild(content);
    modal.appendChild(wrap);

    this.context.body.appendChild(modal);
    this.modalDom = modal;
    this.contentDom = content;
    return this;
  }
  changeHtml(html) {
    this.contentDom.innerHTML = html;
    this.modalDom.addEventListener(
      "click",
      this.checkIsCloseBtn.bind(this, this.closeBtnClass)
    );
  }

  checkIsCloseBtn(closeBtnClass, evt) {
    const targetClass = evt.target.className;
    closeBtnClass.map((c, i) => {
      if (targetClass.indexOf(c) !== -1) {
        this.close();
      }
    });
  }
  open() {
    this.modalDom.className += " is-active";
  }
  close() {
    this.modalDom.className = this.modalDom.className.replace(" is-active", "");
  }
}
