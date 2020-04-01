const re = 'cS7aqe NkoVdd';
var htmlImena = document.getElementsByClassName(re);
let imena;

for (i = 0; i < x.length; i++) {
    imena.push(htmlImena[i].innerHTML);
  }


chrome.runtime.sendMessage({
    url: window.location.href,
    count: imena.stringify()
  })