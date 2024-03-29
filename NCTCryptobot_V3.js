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

    // // Added JS and CSS successfullys
    window.chrome.webview.postMessage("Added JS and CSS successfully"); 

    // // ADS
    // var data = `
    // <iframe id="WebsiteNCT01" src="https://www.ncttechnology.net/KT.html" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    // <iframe id="WebsiteNCT02" src="https://www.ncttechnology.net" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    // `;
    // window.setInterval("ReloadIFrame('WebsiteNCT01', 'https://www.ncttechnology.net/KT.html');", 60000);
    // window.setInterval("ReloadIFrame('WebsiteNCT02', 'https://www.ncttechnology.net');", 180000);
    
    // if (stringIsEmpty(document.querySelector("#NCT_ADS01")) == true)
    // {
    //     await ImportDIV("NCT_ADS01", data);
    // }
    console.log("Added JS and CSS successfully"); 
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