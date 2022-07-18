(async function()
{
    // // Import JS and CSS
    await ImportCSS('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/awesome-notifications.css?alt=media&token=2d9a9035-ef59-4f00-bfc7-5e448f12443d');
    await ImportCSS('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

    // // Don't add JS into BCGame
    // if (window.location.hostname.trim().toUpperCase().search("BC.GAME") < 0)
    // {
    //     await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/fingerprint.js?alt=media&token=7b276e4e-e456-4951-815a-5bc4e9701d02');
    //     await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/socket_client.js?alt=media&token=60d20892-b81f-4bc3-aa6e-1544270bfdb3');

    //     // Google
    //     await ImportScript('https://www.googletagmanager.com/gtag/js?id=UA-126043411-3');
    //     await ImportScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5001754967925515');
    // }

    // // 
    // var data = `<iframe data-aa="1738316" src="//ad.a-ads.com/1738316?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    // <iframe data-aa="1738492" src="//ad.a-ads.com/1738492?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>`;
    // await ImportDIV(data);

    window.chrome.webview.postMessage("Added JS and CSS successfully");
})();

// Import Script.
async function ImportScript(src)
{
    return new Promise(function(resolve){
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = function(){
            resolve();
        }
        document.head.appendChild(script);
    });
}

// Import CSS.
async function ImportCSS(src)
{
    return new Promise(function(resolve){
        let css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = src;
        css.onload = function(){
            resolve();
        }
        document.head.appendChild(css);
    });
}

// Import css style into head tag
async function ImportCSS_Style(data)
{
    return new Promise(function(resolve){
        let style = document.createElement('style');
        style.innerText = data;
        style.onload = function(){
            resolve();
        }
        document.head.appendChild(style);
    });
}

// Import div. src="https://www.youtube.com/embed/${item.id.videoId}"
async function ImportDIV(data)
{
    return new Promise(function(resolve){
        let DIV = document.createElement('div');
        DIV.innerHTML = data;
        DIV.onload = function(){
            resolve();
        }
        document.body.appendChild(DIV);
    });
}