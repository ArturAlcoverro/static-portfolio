var menu = false;

$(window).on('load', function () {

    var browser = whatBrowser();

    if (!browser.isEdge && !browser.isIE && !browser.isSafari && browser.isAny) {
        console.log("smooth");
        document.getElementsByTagName("body")[0].classList.add("scroll-smooth");
        document.getElementsByTagName("html")[0].classList.add("scroll-smooth");
    }

    $("#main").removeClass("scale-30");
    setTimeout(function () {
        $("#main p:nth-child(1)").animate({
            "opacity": "1"
        }, 1000);
        $("#main p:nth-child(2)").animate({
            "opacity": "1",
            "padding-bottom": "5vh"
        }, 1000);
        setTimeout(function () {
            $("#navbar").removeClass('navbar-hide');
            $('.logo').removeClass('logo-hide');
        }, 1100);
        setTimeout(function () {
            $('.arrow-hide').removeClass('arrow-hide');
        }, 2200);
    }, 750);

    $(".menu-btn").click(function () {
        if (menu) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    $(".menu a").click(function () {
        hideMenu();
    });

    $(".menu-close-space").click(function () {
        hideMenu();
    });

});

function showMenu() {
    $(".menu").animate({
        "left": "0"
    }, 300);
    $(".menu-btn-animation:nth-child(1)").addClass("menu-btn-1-active");
    $(".menu-btn-animation:nth-child(2)").addClass("menu-btn-2-active");
    $(".menu-btn-animation:nth-child(3)").addClass("menu-btn-3-active");
    $(".menu-btn").addClass("menu-btn-active");
    $(".content").addClass("blur");
    menu = true;
}

function hideMenu() {
    $(".menu").animate({
        "left": "-100%"
    }, 300);
    $(".menu-btn-animation:nth-child(1)").removeClass("menu-btn-1-active");
    $(".menu-btn-animation:nth-child(2)").removeClass("menu-btn-2-active");
    $(".menu-btn-animation:nth-child(3)").removeClass("menu-btn-3-active");
    $(".menu-btn").removeClass("menu-btn-active");
    $(".content").removeClass("blur");

    menu = false;
}

function validateMail(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var msg = $("#message").val();

    var error = 0;
    var nameError = name != "" ? false : true;
    var emailError = email != "" ? false : true;
    var subjectError = subject != "" ? false : true;
    var msgError = msg != "" ? false : true;

    var emailFormatError = !validateEmail(email);

    var numErrors = nameError + emailError + subjectError + msgError;

    if (!nameError & !emailError & !subjectError & !msgError & !emailFormatError) {
        grecaptcha.execute();
    }
    else{

    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function onSubmit(token) {
}

function validate(event) {
    event.preventDefault();
    if (!document.getElementById('field').value) {
        alert("You must add text to the required field");
    } else {
        grecaptcha.execute();
    }
}

function onload() {
    var element = document.getElementById('submit');
    element.onclick = validate;
}


function whatBrowser() {
    var Opera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Firefox = typeof InstallTrigger !== 'undefined';
    var Safari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var IE = false;
    var Edge = !IE && !!window.StyleMedia;
    var Chrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var EdgeChromium = Chrome && (navigator.userAgent.indexOf("Edg") != -1);
    var Blink = (Chrome || Opera) && !!window.CSS;

    return {
        isOpera: Opera,
        isFirefox: Firefox,
        isSafari: Safari,
        isIE: IE,
        isEdge: Edge,
        isChrome: Chrome,
        isEdgeChromium: EdgeChromium,
        isBlink: Blink,
        isAny: Opera || Firefox || Safari || IE || Edge || Chrome || EdgeChromium || Blink
    }

}
