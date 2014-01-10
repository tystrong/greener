// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function hideMenu() {
    document.getElementById("menu-container").style.top = "-50px";
}

function showClosed() {
    document.getElementById("closed-container").style.top = "0"
}

function hideClosed() {
    document.getElementById("closed-container").style.top = "-50px";
}

function showMenu() {
    document.getElementById("menu-container").style.top = "0"
}
$(function () {
    var e = $(document).scrollTop(),
	    top = $('html').scrollTop();
       	// top = $('html').offset().top;
    $(window).scroll(function (t) {
        var n = $(window).scrollTop();
        scrolled = n - e;
        e = n;
        // console.log(scrolled);
	if(n == 0){
	    hideClosed();
        showMenu();
	}else{
	    if (scrolled > 0) {
            hideMenu();
            showClosed();
        }
        if (scrolled < 0 || scrolled == top) {
            hideClosed();
            showMenu();
        }
	}
    })
});

