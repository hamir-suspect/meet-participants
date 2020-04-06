document.addEventListener('DOMContentLoaded', function () {

    // const bg = chrome.extension.getBackgroundPage()
    // Object.keys(bg.bears).forEach(function (url) {
    //   const div = document.createElement('div')
    //   div.textContent = `${url}: ${bg.bears[url]}`
    //   document.body.appendChild(div)
    // })
  
    document.querySelector('button').addEventListener('click', onclick, false)
    
    function onclick () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
      })
    }
    
    function setCount (res) {
        if(res) {
            if(res.count){
                let currentdate = new Date();
                let datum = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                const div = document.createElement('div');
                div.className = "active";
                div.style = "padding: 10px;";
                div.textContent = `${res.count} prisutno u ${datum}`;
                document.body.appendChild(div);


                const ul = document.createElement('ul');
                ul.className = "list-group";
                

                res.data.forEach(element => {
                    const li = document.createElement('li');
                    li.className = "list-group-item";
                    li.textContent = `${element}`;
                    document.body.appendChild(li);
                });
                document.body.appendChild(ul);


                 // Create text document — only saves 1st link in text doc
                 var textDoc = document.createElement('a');

                 textDoc.href = 'data:attachment/text,' + encodeURI(res.data.join('\n'));
                 textDoc.target = '_blank';
                 textDoc.download = 'ucesnici-'+datum+'-'+res.url+'.txt';
                 textDoc.click();
 
            } else {
                alert("Morate otvoriti listu ucesnika");
		window.parrent.document.body.style.zoom = 1.0;
            }
        } 
    }
  }, false)
