var btn = document.getElementById('btn');
btn.onclick = function () {
	/*var text=document.querySelector('a.btn')
	text.classList.add('gray')*/
	btn.classList.add('gray')
	
}



$(function (){
	$(window).scroll(function() {
        $('.section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    $(window).scroll(function() {
        $('#opportunties .item-time').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('#opportunties .item-island').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
       
    $(window).scroll(function() {
        $('#opportunties .item-rocket').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });

    $(window).scroll(function() {
        $('#contacts .form').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeIn");
            }
        });
    });
});