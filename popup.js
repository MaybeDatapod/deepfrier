var txt = document.querySelector('#datapodtxt');

function getCSS(selector){
	var css = selector;
if (css == "*") {
	  css += "{-webkit-filter: saturate(" + Math.floor(Math.random() * 27) + 1 + ") contrast(" + (Math.floor(Math.random() * 201) + 100) + "%)  !important; filter: saturate(" + Math.floor(Math.random() * 27) + 3 + ") contrast(" + (Math.floor(Math.random() * 201) + 100) + "%) !important;}";
}
	return css;
}

var c = getCSS("*");

chrome.tabs.insertCSS(null, {code: c},function() {
	if (chrome.extension.lastError) {
		txt.innerText = "This page cannot be deepfried";
	} else {
		txt.innerText = "Deepfried your page";
	}
});

chrome.tabs.executeScript(null, {file: "content.js"},function() {
	if (chrome.extension.lastError) {
		txt.innerText = "This page cannot be deepfried";
	} else {
		txt.innerText = "Deepfried your page";
		  var audio = new Audio('PureQuality.mp3');
audio.play();
	}
});
