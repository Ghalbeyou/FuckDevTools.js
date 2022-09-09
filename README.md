# FuckDevTools.Js
A new method to disable DevTools.
## How to install?
Download the file and put it in the root of your project.
## How to use?
In your HTML File, add the following code:
```html
<script src="./fuckdevtools.js"></script>
```
## Config
To config, go to fuckdevtools.js and edit this section:
```js
// The CONFIG:
var disable_right_click = /* If this was true, the user cannot right click and if they do, they see alert DevTools? */ true;
var disable_f12 = /* If this was true, users cannot do f12 */ true;
var disable_csi = /* if this was true, users cannot do control shift i */ true;
```
and change the boolean. `true` or `false`
## License
Apache License 2.0
