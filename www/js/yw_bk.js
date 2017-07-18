// Initialize app
var myApp = new Framework7({
    /*material: true,
     materialPreloaderHtml:  	'<span class="preloader-inner"><span class="preloader-inner-gap"></span><span class="preloader-inner-left"><span class="preloader-inner-half-circle"></span></span><span class="preloader-inner-right"><span class="preloader-inner-half-circle"></span></span></span>',
     // Hide and show indicator during ajax requests
     onAjaxStart: function (xhr) {
     myApp.showIndicator();
     },
     onAjaxComplete: function (xhr) {
     myApp.hideIndicator();
     }*/
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: false
});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {

});

$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    $$('.yw-item-link').on('click', function (e) {
        var clickedLink = this;
        var popoverHTML =
            '<div class="popover social-popover">'+
            '<div class="popover-inner">'+
            '<div class="list-block">'+
            '<ul>'+
            '<li><a href="#" class="item-link list-button"><i class="f7-icons">email_fill</i></li>'+
            '<li><a href="#" class="item-link list-button"><i class="f7-icons">social_facebook_fill</i></li>'+
            '<li><a href="#" class="item-link list-button"><i class="f7-icons">social_twitter_fill</i></li>'+
            '<li><a href="#" class="item-link list-button"><i class="f7-icons">social_googleplus_fill</i></li>'+
            '<li><a href="#" class="item-link list-button"><i class="f7-icons">social_linkedin_fill</i></li>'+
            '<li><a href="#" class="item-link list-button"><i class="f7-icons">social_instagram_fill</i></li>'+
            '</ul>'+
            '</div>'+
            '</div>'+
            '</div>';
        myApp.popover(popoverHTML, clickedLink);
    });
})

$$('.myarea_link').on('click', function () {
    myApp.showIndicator();

    setTimeout(function () {
        mainView.router.loadPage('my_area.html');
        myApp.hideIndicator();
        myApp.closePanel();
    }, 1000);

});

$$('.youwon-popup').on('click', function () {
    myApp.popup('.popup-youwon');
});

$$('.close-youwon-popup').on('click', function () {
    myApp.closeModal('.popup-youwon');
});

$$('.mywon-popup').on('click', function () {
    myApp.popup('.popup-mywon');
});

$$('.close-mywon-popup').on('click', function () {
    myApp.closeModal('.popup-mywon');
});

$$('.register-popup').on('click', function () {
    myApp.popup('.popup-register');
});

$$('.close-register-popup').on('click', function () {
    myApp.closeModal('.popup-register');
});

Dom7.fn.closest = function(selector) { var $target = this; if($target.is(selector) == false) { $target = $target.parents(selector).eq(0); } return $target; };