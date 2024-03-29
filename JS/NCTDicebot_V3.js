(async function()
{
    // Add JS, CSS
    if (typeof jQuery == 'undefined') await ImportScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js');
    await ImportScript('https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/fengari-web.js?alt=media&token=e05a27e0-6ca1-40b9-aead-c68715a90b12');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/awesome-notifications.js?alt=media&token=7e3bc4bc-d6e4-4f51-a5ec-452e45cced54');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/fingerprint.js?alt=media&token=7b276e4e-e456-4951-815a-5bc4e9701d02');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/socket_client.js?alt=media&token=60d20892-b81f-4bc3-aa6e-1544270bfdb3');
    await ImportCSS('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/awesome-notifications.css?alt=media&token=2d9a9035-ef59-4f00-bfc7-5e448f12443d');
    await ImportCSS('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
    await ImportScript('https://firebasestorage.googleapis.com/v0/b/nct-dicebot-7b956.appspot.com/o/canvasjs.min.js?alt=media&token=234d6a1b-13b7-48f3-a40b-ca24a2ce4cc6');

    // Google
    //await ImportScript('https://www.googletagmanager.com/gtag/js?id=UA-126043411-3');
    //await ImportScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5001754967925515');

    // Added JS and CSS successfullys
    window.chrome.webview.postMessage("Added JS and CSS successfully"); 

    // ADS
    var data = `<iframe id = "ADS01" data-aa="1738316" src="//ad.a-ads.com/1738316?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    <iframe id = "ADS02" data-aa="1738492" src="//ad.a-ads.com/1738492?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    <iframe id = "WebsiteNCT01" src="https://www.ncttechnology.net" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    <iframe id = "YouTube01" width="728px" height="90px" src="https://www.youtube.com/embed/videoseries?list=PLJp5AquCTs4YEX5J8Sa_TLE9iXbWqVoCe&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    window.setInterval("ReloadIFrame('ADS01', '//ad.a-ads.com/1738316?size=728x90');", 30000);
    window.setInterval("ReloadIFrame('ADS02', '//ad.a-ads.com/1738492?size=728x90');", 40000);
    window.setInterval("ReloadIFrame('WebsiteNCT01', 'https://www.ncttechnology.net');", 45000);
    window.setInterval("ReloadIFrame('YouTube01', 'https://www.youtube.com/embed/videoseries?list=PLJp5AquCTs4YEX5J8Sa_TLE9iXbWqVoCe&autoplay=1&mute=1');", 60000);
    if (stringIsEmpty(document.querySelector("#NCT_ADS01")) == true)
    {
        await ImportDIV("NCT_ADS01", data);
    }
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
async function ImportDIV(Div_ID,data)
{
    return new Promise(function(resolve){
        let DIV = document.createElement('div');
        DIV.id = Div_ID;
        DIV.innerHTML = data;
        DIV.onload = function(){
            resolve();
        }
        document.body.appendChild(DIV);
    });
}

// Check null, undefined, empty
function stringIsEmpty(value) 
{
    return value ? value.toString().trim().length == 0 : true;
}

// Auto reload IFrame
function ReloadIFrame(IFrame_ID, Link) 
{
    var frameHolder=document.getElementById(IFrame_ID);
   frameHolder.src=Link;
}