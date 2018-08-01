import './OuoModal.scss';

export default class OuoModal {
  constructor({context = document, initHtml, closeBtnClass}) {
    this.context = context;
    this.closeBtnClass = [closeBtnClass, "js-ouoModal-cancel"];
    
    this.createElements(initHtml).then(()=>{
    this.modalDom.addEventListener("click", this.checkIsCloseBtn.bind(this, this.closeBtnClass));

    });

  }
  createElements(initHtml) {
    return new Promise((resolve, reject) =>{

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
      resolve();
    })
  }
  changeHtml(html) {
    this.contentDom.innerHTML = html;
    // if (errText) {
    //   this.cardMaskDom.innerHTML = `<div class='cardMask-wrap'><span class="card-cancel js-card-cancel"></span>${errText}<p class="cardMask-text ">你可以繼續逛逛更多好設計，<br/>或<a class="cardMask-link" href="https://m.me/daman.tw">聯繫客服<a>詢問商品資訊。</p><button class="btn btn-theme cardMask-btn js-card-warn">好喔</button></div>`;
    //   this.cardMaskDom.addEventListener(
    //     "click",
    //     this.checkIsCloseBtn.bind(this, closeBtnClass)
    //   );
    //   return;
    // }
    // this.cardMaskDom.innerHTML = `<div class='cardMask-wrap'>${html}</div>`;
    this.modalDom.addEventListener("click", this.checkIsCloseBtn.bind(this, this.closeBtnClass));
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
    // this.cardMaskDom.className = this.cardMaskDom.className.replace(
    //   " mobileCard--bubble-down",
    //   ""
    // );
  }
}

