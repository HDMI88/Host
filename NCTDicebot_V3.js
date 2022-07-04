window.addEventListener('load', async function() 
{
    await ImportScript('https://www.googletagmanager.com/gtag/js?id=UA-126043411-3');

    var data = `<iframe data-aa="1738316" src="//ad.a-ads.com/1738316?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>
    <iframe data-aa="1738492" src="//ad.a-ads.com/1738492?size=728x90" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>`;
    await ImportDIV(data);

    console.log("--> Added external div, JS and CSS files successfully");
});

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
