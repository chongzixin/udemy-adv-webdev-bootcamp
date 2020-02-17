// 1 - XMLHttpRequest is not in node by default, only in browsers.
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    // readyState 4 means it's DONE
    if(XHR.readyState == 4 && XHR.status == 200) {
        console.log(XHR.response);
    }
};

XHR.open("GET", "https://api.github.com/zen");
XHR.send();