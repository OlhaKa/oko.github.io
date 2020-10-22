$(document).ready(function(){

        $(".navbar-nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });

        var mediaBlock = $('.section-1')

        $(window).on("load scroll", function(){
            if ( $(window).scrollTop() >= (mediaBlock.height() - 50)){
                $(".navbar").delay(500).addClass('scrolledNavbar navbar-light').removeClass('navbar-dark')
            } else {
                $(".navbar").delay(500).removeClass('scrolledNavbar navbar-light').addClass('navbar-dark')
            }
         });

         $(document).click(function (event) {
            var clickover = $(event.target);
            var $navbar = $(".navbar-collapse");               
            var _opened = $navbar.hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
                $navbar.collapse('hide');
            }
        });

        function animateCss(element, animationName, callback) {
            const node = document.querySelector(element);
            node.classList.add('animated', animationName)
            function handleAnimationEnd() {
                node.classList.remove('animated', animationName)
                node.removeEventListener('animationend', handleAnimationEnd)
        
                if (typeof callback === 'function') callback()
            }
        
            node.addEventListener('animationend', handleAnimationEnd)
        }

        $("#price-btn").click(function() {
            animateCss('.download-btn', 'pulse');
        })

    });
    