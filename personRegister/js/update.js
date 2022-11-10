"use strict";

const { subtle } = require("crypto");

(function () {
  let resultset;
  let resultsection;
  let keyInput;
  let searchValueInput;
  let messagearea;
  document.addEventListener("DOMContentLoaded", init);
  function init() {
    resultset = document.getElementById("resultset");
    resultsection = document.getElementById("resultsection");
    keyInput = document.getElementById("key");
    searchValueInput = document.getElementById("searchvalue");
    messagearea = document.getElementById("messagearea");

    document.getElementById("submit").addEventListener("click", submit);
  }
  async function submit() {
    const key = keyInput.value;
    const searchValue = searchValueInput.value;
    try {
        const uri = key ? `/person/${key}?value=${searchValue}`:"/persons";
        const result = await fetch(uri);
        const personData = await result.json()
    } catch(err) {}
  }
})();
