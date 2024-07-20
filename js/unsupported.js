window.addEventListener('load', function() {
	'use strict'
	var el = document.getElementById('unsupported-browser')
	if (el != null) {
		el.style.display = 'block'
	} else {
		console.error('Obsolete browser detected - unsupported.')
	}
})
