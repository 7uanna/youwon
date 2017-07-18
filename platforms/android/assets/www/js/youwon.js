// Determine theme depending on device
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};

// Define Dom7
var $$ = Dom7;

// Init App
var myApp = new Framework7({
    // Enable Material theme for Android device only
    //material: isAndroid ? true : false,
    // Enable Template7 pages
    //template7Pages: true
    onAjaxStart: function (xhr) { myApp.showIndicator(); },
    onAjaxComplete: function (xhr) { myApp.hideIndicator(); }
});

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

    switch(page.name){
        case 'social_points':
            $$('.youwon-popup').on('click', function () {
                showPopup('youwon');
            });

            $$('.mywon-popup').on('click', function () {
                showPopup('mywon');
            });

            $$('.register-popup').on('click', function () {
                showPopup('register');
            });
            break;
        case "youwon_popup":
            $$('.close-youwon-popup').on('click', function () {
                myApp.closeModal('.popup-youwon');
            });
            break;
        case "mywon_popup":
            $$('.close-mywon-popup').on('click', function () {
                myApp.closeModal('.popup-mywon');
            });
            break;
        case "register_popup":
            $$('.close-register-popup').on('click', function () {
                myApp.closeModal('.popup-register');
            });
            break;
    }
})

$$('.myarea_link').on('click', function () {
    myApp.showIndicator();

    setTimeout(function () {
        mainView.router.loadPage('my_area.html');
        myApp.hideIndicator();
        myApp.closePanel();
    }, 1000);

});

function showPopup(type){
    myApp.showIndicator();
    $$.ajax({
        url: 'http://dev.knowupto.com/youwon/popup.php',
        type: 'POST',
        data: {type: type},
        crossDomain : true,
        cache: false,
        success: function(html) {
            myApp.popup(html);
            myApp.hideIndicator();
        },
        complete: function(){
            myApp.hideIndicator();
        }
    });
}

Dom7.fn.closest = function(selector) { var $target = this; if($target.is(selector) == false) { $target = $target.parents(selector).eq(0); } return $target; };