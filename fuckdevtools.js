/*
FuckDevTools.Js
By @ghalbeyou on GitHub
https://github.com/GhalbeYou
---------------------------------------
This is a simple script that will disable the developer tools in the browser.
*/

document.onkeydown = function(event) {
    if (event.keyCode == 123) {
        event.preventDefault();
        alert("Devtools?");
        location.replace("about:blank");
    
    }
    // if the user pressed the Control + Shift + I key
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        event.preventDefault();
        alert("Devtools?");
        location.replace("about:blank");
    }
}
document.oncontextmenu = function() {
    event.preventDefault();
    alert("Devtools?");
}
