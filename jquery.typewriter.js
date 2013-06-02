/*
 *	jQuery TypeWriter Plugin v.1.0
 *	------------------------------
 *	https://github.com/alterebro/jQuery.TypeWriter.js/
 *
 *	Copyright 2013 Jorge Moreno (@alterebro)
 *	Released under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 */

;(function ( $, window, document, undefined ) {

	var pluginName = "typewriter";
	var defaults = {
		rotatingLetters : 20,
		speed : 10,
		chars : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
		placeholder : '', // ['&nbsp;','_'] 
		placeholder_class : 'placeholder',
		callback : function() {}
	};

	function Plugin( element, options ) {
		this.element = element;
		this.options = $.extend( {}, defaults, options );
		this.string = $(element).html();
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {

		init: function() {

			$(this.element).html('');

			var the_extended_string = this.extended_string();

			var string_counter = 0;
			var string_limit = the_extended_string.length * this.options.rotatingLetters+1;
			var string_chars = this.options.rotatingLetters+1;

			var str = this.string;
			var el = this.element;
			var destroy = this.finish;
			var callback = this.options.callback;
			var placeholder = this.options.placeholder;
			var placeholder_class = this.options.placeholder_class;


			var refreshId = setInterval(function() {

				if ( string_counter <= string_limit ) {

					output = '';
					for ( var i=0; i<str.length; i++ ) {

						output += '';
						val = ((i-string_counter)>0) 
							? false 
							: ( (Math.abs(i-string_counter) < string_chars-1 ) 
								? Math.abs(i-string_counter) 
								: string_chars-1
							);
						
						replacement = (str[i] == " ") ? " " : '<span class="'+placeholder_class+'">'+placeholder+'</span>';
						if (str[i] == " ") { the_extended_string[i][val] = " "; }
						
						output += (val) ? the_extended_string[i][val] : replacement;

					}
					$(el).html(output);
					string_counter++;

					if (output == str) { destroy(refreshId, callback); }

				} else { destroy(refreshId, callback); }

			}, this.options.speed);

		},
		finish : function(id, callback) {

			clearInterval(id);
			callback();
			
		},
		rand : function(from,to) {
			return Math.floor(Math.random()*(to-from+1)+from);
		},
		get_random_chars : function(num) {
			var output = new Array();
			for ( var i=0; i<num; i++) {
				output[i] = this.options.chars[this.rand(0, this.options.chars.length-1)];
			}
			return output;
		},

		extended_string : function() {
			var extended_string = new Array;
			for (var i = 0; i < this.string.length; i++) {
				extended_string[i] = this.get_random_chars(this.options.rotatingLetters);
				extended_string[i].push(this.string[i]);
			};
			return extended_string;
		}

	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin( this, options ));
			}
		});
	};

})( jQuery, window, document );
