var base_url = 'https://web.vplay.one/';
//var base_url = 'http://192.168.1.5:3050/';

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function putStyle(url){
	var head   = document.getElementsByTagName('head')[0];
    var link   = document.createElement('link');
    link.rel   = 'stylesheet';
    link.type  = 'text/css';
    link.href  = url;
    link.media = 'all';
    head.appendChild(link);
}

function putScript(scripts){
	var add = function(src, done){
		var script = document.createElement('script');
	    	script.src = src;
	    	script.type='text/javascript';


	    script.onload = script.onreadystatechange = function() {
	        if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
	            done();
	        }
	    };

	    document.getElementsByTagName("body")[0].appendChild(script);
	}

	var p = 0, put = function(){
		p++;

		if(scripts[p]) add(scripts[p], put);
	}

	add(scripts[p], put);
}


putStyle(base_url + 'packed/vendor.css?v=1.31')
putStyle(base_url + 'css/style.css?v7167463055')

httpGetAsync(base_url + 'template/_loader.html', function(html){
	document.getElementsByTagName('body')[0].innerHTML = html;

	putScript([
		base_url + 'packed/vendor.js?v=1.31',
		base_url + 'js/app.js?v1122704956'
	]);
})
