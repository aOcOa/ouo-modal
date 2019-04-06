import OuoModal from "./OuoModal";
import "./style.scss";

window.addEventListener("load", () => {
  const modal = new OuoModal({
    initHtml: "<h1 class='modal'>HELLO</h1>",
    closeBtnClass: "js-modal-close"
  });
  modal.changeHtml(
    '<h2 class="modal-title">測試用 Modal 字</h2><button class="btn js-modal-close">關閉</button>'
  );

  document.getElementById("btn").addEventListener("click", () => {
    modal.open();
  });
});
