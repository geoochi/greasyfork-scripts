// ==UserScript==
// @name        paul-graham-text-center
// @homepage
// @icon
// @version     0.1
// @description set paul graham page text to center
// @author      geoochi
// @license     MIT
// @grant       none
// @match       http://paulgraham.com/*
// @match       https://paulgraham.com/*
// @namespace https://greasyfork.org/users/1262095
// ==/UserScript==

;(function () {
  document.body.style.display = 'flex'
  document.body.style.justifyContent = 'center'
})()
