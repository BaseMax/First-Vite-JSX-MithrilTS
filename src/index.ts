import "./App.css";
import m from "mithril";
// import { App } from "./HomePage";
import { HomePage } from "./HomePage";
import { SearchPage } from "./SearchPage";
import { AdsPage } from "./AdsPage";

const globalState = {

};
const globalAction = {

};

m.route.prefix = ''
const mountNode = document.querySelector("#app");
if (mountNode) {
  // m.mount(mountNode, App);
  m.route(mountNode, "/", {
    // defines `https://localhost/#!/home`
    "/": HomePage,
    "/search/": SearchPage,
    "/:id/": AdsPage,
  })
}
