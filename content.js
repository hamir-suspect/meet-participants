chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const re = 'cS7aqe NkoVdd';
    var htmlImena = document.getElementsByClassName(re);
    let imena=[];
    console.log("ulazimo u peltju");
    
    for (i = 0; i < htmlImena.length; i++) {
        console.log(htmlImena[i].innerHTML);
        imena.push(htmlImena[i].innerHTML);
      }
      console.log("imena");
     console.log(imena);

     sendResponse({
        url: window.location.href,
        count: imena.length,
        data: imena
      })
    })