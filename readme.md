# TypeWriter jQuery Plugin
## jQuery.TypeWriter.js A Typerwriter Pseudo-Matrix-Like Text Effect jQuery Plugin.

### Example: [htt://typewriter.moro.es](http://typewriter.moro.es)

### How to use it
Just link to your Webapp the jQuery library and the TypeWriter plugin.
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="jquery.typewriter.js/jquery.typewriter.min.js"></script>
```
And use it as it follows:
```javascript
$('#jquery-element').typewriter();
```
Where `'#jquery-element'` is the element where you want to apply the text effect.

### Options
You can also use some options and pass them as a parameter to the plugin.
These are the defaults:

```javascript
var defaults = {
	rotatingLetters : 20, // number of rotating letters at the tail of the string.
	speed : 10, // in milliseconds
	chars : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', // characters used in the rotating letters at the tail of the generated string
	placeholder : '', // ['&nbsp;','_'] // just in case you want to show something to fill the blanks
	placeholder_class : 'placeholder', // classname that gets to style it
	callback : function() {} // function called when it finish
};
```

An example of how to use it with some options would be:
```javascript
$('#jquery-element').typewriter({
	rotatingLetters : 50,
	callback : function() {
		console.log('finished!');
		window.alert('finished!');
	}
});
```

### Live Example
You can see a live example of the jQuery Plugin in action here: [http://typewriter.moro.es](http://typewriter.moro.es)


