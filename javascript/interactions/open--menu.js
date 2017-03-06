// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (casper, ready) {

	var make_me_ready_after_some_delay = function ( callback ) {
		// setTimeout won't work for some reason
		casper.wait(3000, function (e) {
			callback();
		});
	}

	// test interaction on the page
	casper.wait(3000, function (e) {
		casper.click('.js-nav-trigger');
		make_me_ready_after_some_delay( ready );
	});
}