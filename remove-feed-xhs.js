// ==UserScript==
// @name        小红书聚焦搜索
// @homepage
// @icon
// @version     0.6
// @description 自动删除小红书页面上的navbar、推荐流以及其他信息，只留下搜索框
// @author      geoochi
// @license     MIT
// @grant       none
// @match       https://www.xiaohongshu.com/explore
// @namespace https://greasyfork.org/users/1262095
// ==/UserScript==

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

;(async function () {
  await sleep(300);
  document.getElementById('mfContainer').remove()
  
  document.getElementsByClassName('mask-paper')[0].getElementsByClassName('active router-link-exact-active')[0].remove()
  document.getElementsByClassName('mask-paper')[0].getElementsByClassName('right')[0].remove()
  
  document.getElementsByClassName('side-bar')[0].remove()

  document.getElementsByClassName('input-box')[0].style.cssText = 'position: absolute; top: 30vh;'
})()
