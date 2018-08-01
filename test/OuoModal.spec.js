const { describe, it, before, after, done } = require("mocha");
const { expect } = require("chai");
const { JSDOM } = require("jsdom");
import OuoModal from "../src/OuoModal";

const dom = new JSDOM();
global.document = dom.document;

var chai = require("chai");
chai.use(require("chai-dom"));

const rootDom = new JSDOM(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge "/>
    <title>TEST</title>
  </head>
  <body>
  </body>
</html>`);

document = rootDom.window.document;

    let modal;

describe("modal", () => {
  before(() => {
    modal = new OuoModal({ context: document, initHtml: "<h1 class='greeting'>HELLO</h1>" });
  });

  it("create Modal", () => {
    expect(document.getElementsByClassName("ouoModal").length).greaterThan(0);
  });
  it("open", () => {
    modal.open();
    expect(document.getElementsByClassName("ouoModal")[0]).to.have.class('is-active');
  });
  it("close", () => {
     modal.close();
     expect(document.getElementsByClassName("is-active").length).to.eql(0);
  });
});
