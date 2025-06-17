// ==UserScript==
// @name        remove-feed-xhs
// @homepage
// @icon
// @version     0.1
// @description 自动删除小红书页面上的推荐并上下左右居中搜索框
// @author      geoochi
// @license     MIT
// @grant       none
// @match       https://xiaohongshu.com/explore
// @namespace https://greasyfork.org/users/1262095
// ==/UserScript==

;(function () {
  const mfContainer = document.getElementById('mfContainer')
  mfContainer.remove()

  const searchBar = document.getElementsByClassName('input-box')[0]
  searchBar.style.cssText = 'position: absolute; left: 50vw; top: 30vh;'
})()
