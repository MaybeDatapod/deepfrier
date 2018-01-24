function safeReplace(elem, replaceFn){
  let nodes = elem.childNodes, i = -1;
  while(++i < nodes.length){
    let node = nodes[i];
    if(node.nodeType == 3){
      node.textContent = replaceFn(node.textContent);
    } else {
      safeReplace(node, replaceFn);
    }
  }
}

var taglist = ["p", "ul", "li", "span", "pre", "h", "a", "td", "tr", "input", "content", "title"];

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}

function datapodify() {
for (l = 0; l < taglist.length; l++) {
  obs = document.getElementsByTagName(taglist[l]);
for (i = 0; i < obs.length; i++) {
  safeReplace(obs[i], function(str){
    return str.replace(/b/gi, '🅱️');
  });
}
}
}

setInterval(datapodify, 1000);