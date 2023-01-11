$(document).ready(function(){
     var article = $('.faq>.faqBody>.article');
    article.find('.a').hide();
    $('.faq>.faqBody>.article>.q').click(function(){
        var myArticle = $(this).parents('.article:first');
        if(myArticle.hasClass('hide')){
            article.addClass('hide').removeClass('show');
            article.find('.a').slideUp(100);
            myArticle.removeClass('hide').addClass('show');
            myArticle.find('.a').slideDown(100);
        } else{
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(100);
        }
        return false;
    });

   
    $(window).scroll(function(){
        if($(this).scrollTop()> $(".top_menu").height()){
            $("#top img").addClass("on")
        }else{
            $("#top img").removeClass("on")
        }
    })
});    


