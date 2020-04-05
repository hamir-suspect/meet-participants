chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const re = "cS7aqe NkoVdd";
  var htmlImena = document.getElementsByClassName(re);
  let imena = [];

  for (i = 0; i < htmlImena.length; i++) {
    imena.push(htmlImena[i].innerHTML);
  }

  let scrollBar = document.getElementsByClassName(
    "TnISae CnDs7d hPqowe crOkHf"
  )[0];

  if (scrollBar) {
    scrollBar.scrollIntoView({ block: "center" });
    htmlImena = document.getElementsByClassName(re);

    for (i = 0; i < htmlImena.length; i++) {
      if (imena.includes(htmlImena[i].innerHTML)) {
        console.log("postoji vec :" + htmlImena[i].innerHTML);
        continue;
      }
      imena.push(htmlImena[i].innerHTML);
    }

    scrollBar.scrollIntoView({ block: "end" });
    htmlImena = document.getElementsByClassName(re);

    for (i = 0; i < htmlImena.length; i++) {
      if (imena.includes(htmlImena[i].innerHTML)) {
        console.log("postoji vec :" + htmlImena[i].innerHTML);
        continue;
      }
      imena.push(htmlImena[i].innerHTML);
    }
  }

  sendResponse({
    url: window.location.href,
    count: imena.length,
    data: imena,
  });
});
