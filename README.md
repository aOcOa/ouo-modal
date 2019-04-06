## Intro

This is a basic js modal written in vanilla js

## Usage
- Initialize a modal:
    
  `initHtml`: the HTML inside modal

  `closeBtnClass`: close button class for custom button

  ```
  const modal = new OuoModal({
    initHtml: `<h1 class='modal'>HELLO</h1>
                <button class="btn js-modal-close">
                  close
                </button>`,
    closeBtnClass: "js-modal-close"
  });
  ```
## Methods
- changeHtml: change the html inside modal anytime.
- open: open the modal.
- close: close the modal.
