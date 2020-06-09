jQuery(function($){

    $('.main-item').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('ul.sidebar').slideToggle();
    });

    $('.toggle-sub-menu').on('click', function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    });

    $('.link-drop').on('click', function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    });

    $('.link-active').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    $('.link-read').on('click', function(e){
        e.preventDefault();
        var heightBlock = $('.wrap-online-description').height();
        $(this).css('opacity', 0);
        $(this).prev().animate({'height': heightBlock + 'px'}, 500);
    });

    $("a.group").fancybox({});

});
