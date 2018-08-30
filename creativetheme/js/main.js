$(function () {
    $(window).scroll(function () {
        if($('body').scrollTop()>300) {
            $('nav.navbar').addClass('bg-white');
        }else {
            $('nav.navbar').removeClass('bg-white');
        }
    });
});