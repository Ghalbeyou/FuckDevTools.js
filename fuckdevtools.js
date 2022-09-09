/*
FuckDevTools.Js
By @ghalbeyou on GitHub
https://github.com/GhalbeYou
---------------------------------------
This is a simple script that will disable the developer tools in the browser.
*/
var disable_right_click = true;
var disable_f12 = true;
var disable_csi = true;
document.onkeydown = function(event) {
    if (disable_f12 == true){
        if (event.keyCode == 123) {
            event.preventDefault();
    //        alert("Devtools?");
            location.replace("about:blank");

        }
    }
    // if the user pressed the Control + Shift + I key
    if (disable_csi == true){
        
        if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            event.preventDefault();
    //        alert("Devtools?");
            location.replace("about:blank");
        }
    }
}
if (disable_right_click == true){
    
    document.oncontextmenu = function() {
        event.preventDefault();
        alert("Devtools?");
    }
}
