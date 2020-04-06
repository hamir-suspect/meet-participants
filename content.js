chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.parent.document.body.style.zoom = 0.2;
  setInterval(function () {
    var re = "cS7aqe NkoVdd";
    var htmlImena = document.getElementsByClassName(re);
    var imena = [];

    for (i = 0; i < htmlImena.length; i++) {
      htmlImena[i].scrollIntoView();
      var hImena = document.getElementsByClassName(re);

      for (j = 0; j < hImena.length; j++) {
        if (hImena[j]) {
          if (imena.includes(hImena[j].innerHTML)) {
            console.log("postoji vec :" + hImena[j].innerHTML);
            continue;
          }
          imena.push(hImena[j].innerHTML);
        }
      }
    }

    window.document.body.style.zoom = 1;

    sendResponse({
      url: window.location.href,
      count: imena.length,
      data: imena,
    });
  }, 200);

  return true;
});
