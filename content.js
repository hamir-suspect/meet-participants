const re = 'cS7aqe NkoVdd';
const imena = document.getElementsByClassName(re).length;

chrome.runtime.sendMessage({
    url: window.location.href,
    count: imena
  })