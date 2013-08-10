$.fn.flyout = function(options) {
    var el = this;
    var edge = options.edge || 30;
    el.css({
        position : "absolute",
        top : "30px",
        left : -1 * (el.width() - edge)
    });
    el.click(function () {
        $(this).animate({left : "0px"}); 
    });
    el.mouseleave(function () {
        $(this).animate({left : -1 * (el.width() - edge) });
    });
}

    $("#totefly").flyout({"edge" : "30"});

