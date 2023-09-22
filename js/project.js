var animationTimeout;
$(document).ready(function () {
    $(".project").on('click', function () {
        $('#myElement').off('hover');
    });

    $('.project').hover(function () {
        var $parent = $(this).parent().parent();
        var name = $(this).data('name');
        var color = $(this).data('color')
        $parent.addClass('bg-navbar-' + name);
        $('.animation-' + name).addClass('animation-' + name + '-on');
        $(this).parent().children().children().addClass('opacity-0');
        $(this).parent().children().addClass('bg-transparent');
        $(this).children().removeClass('opacity-0');
        $(this).removeClass('bg-transparent');
        svgAnimation(name);

        if ($('#work').offset().top <= (document.documentElement.scrollTop + 66)) {
            $('#navbar').addClass('bg-' + name);
        }
    }, function () {
        var $parent = $(this).parent().parent();
        var name = $(this).data('name');
        $parent.removeClass('bg-navbar-' + name);
        $('.animation-' + name).removeClass('animation-' + name + '-on');
        $(this).parent().children().children().removeClass('opacity-0');
        $(this).parent().children().removeClass('bg-transparent');
        $('#navbar').removeClass('bg-' + name);
        svgAnimationOff(name);
    });
});

function svgAnimation(name) {
    switch (name) {
        case "cleanotes":

            break;

        case "riddle":
            $("#RID").addClass('RID-on');
            $("#DLE").addClass('DLE-on');
            animationTimeout = setTimeout(function () {
                $("#RID").removeClass('RID-on');
                $("#DLE").removeClass('DLE-on');
            }, 700);
            break;

        case "barenys":
            $(".st15").addClass("st15-hide");
            setTimeout(function () {
                $(".st15").addClass("st15-play");
            }, 0)
            break;

        case "spam":

            break;
    }
}

function svgAnimationOff(name) {
    switch (name) {
        case "cleanotes":

            break;

        case "riddle":
            $("#RID").removeClass('RID-on');
            $("#DLE").removeClass('DLE-on');
            clearTimeout(animationTimeout);
            break;

        case "barenys":
            $(".st15").removeClass("st15-hide");
            setTimeout(function () {
                $(".st15").removeClass("st15-play");
            }, 0)
            break;

        case "spam":

            break;
    }
}

