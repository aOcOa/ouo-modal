import OuoModal from "./OuoModal";
import "./style.scss";
window.addEventListener("load", () => {
  const modal = new OuoModal({
    initHtml: "<h1>HELLO</h1>",
    closeBtnClass: "aaa"
  });
  modal.changeHtml('<h2>yee</h2><button class="aaa">關掉</button>');

  document.getElementById("btn").addEventListener("click", () => {
    modal.open();
  });
});
