(async function()
{
    // Import JS and CSS
    if (typeof jQuery == 'undefined') await ImportScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/canvasjs.min.js?alt=media&token=234d6a1b-13b7-48f3-a40b-ca24a2ce4cc6');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/fengari-web.js?alt=media&token=e05a27e0-6ca1-40b9-aead-c68715a90b12');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/awesome-notifications.js?alt=media&token=7e3bc4bc-d6e4-4f51-a5ec-452e45cced54');
    await ImportCSS('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/awesome-notifications.css?alt=media&token=2d9a9035-ef59-4f00-bfc7-5e448f12443d');
    await ImportCSS('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
    await ImportScript('https://www.googletagmanager.com/gtag/js?id=UA-126043411-3');

    var data = `<iframe data-aa="1738316" src="//ad.a-ads.com/1738316?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    <iframe data-aa="1738492" src="//ad.a-ads.com/1738492?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>`;
    await ImportDIV(data);

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