$(document).ready(function(){

    //for use within settings
    var fadeSlides = false,
        coloursSet = false;

    $('.slide').css("opacity", 1);

    //initalize onepage scroll
    $(".main").onepage_scroll({
        sectionContainer: "section"
    });

    //initalize big video
    var BV = new $.BigVideo({useFlashForFirefox:false});

    BV.init();
    if (Modernizr.touch) {
        BV.show('img/background1.jpg');
    } else {
        BV.show('video/timelapse.mp4',
            {ambient:true,
            doLoop:true,
            altSource:'video/timelapse.ogv'});

    }

    //animate in video so you dont see resize
    setTimeout( function () {
        $('#big-video-wrap').show().animate({opacity:1});

    }, 2500);

    //text slider on homepage
    $(".demo1 .rotate").textrotator({
        animation: "fade",
        speed: 2000
      });

    //UI handle
    $('.take-a-look').on('click', function () {

        $('.onepage-pagination li:nth-child(2)').children().trigger('click');
    });

    /*==================================
    =            Navigation            =
    ==================================*/
    
    $('.onepage-pagination').addClass("animated fadeInRight delay-3");

    $('.onepage-pagination').children().each( function() {

        switch ($(this).children().data('index')) {

            case 1 :
                $(this).children().append("<i class='entypo-home'></i>");
            break;
            case 2 :
                $(this).children().append("<i class='entypo-dot'></i>");
            break;
            case 3 :
                $(this).children().append("<i class='entypo-dot-2'></i>");
            break;
            case 4 :
                $(this).children().append("<i class='entypo-dot-3'></i>");
            break;
            case 5 :
                $(this).children().append("<i class='entypo-mail'></i>");
            break;
        }
    });
    /*-----  End of Navigation  ------*/
    
    /*======================================================
    =            Animate slide when scrolled to            =
    ======================================================*/
    //use .delay-
    // 1 equals 500ms
    // 2 equals 1000s
    // 3 equals 1500ms etc
    
    setInterval( function() {

        if ( $( "body" ).hasClass( "viewing-page-2" ) ) {

            $('.slide-1-title').removeClass('hide').addClass('animated fadeInRight delay-1');
            $('.slide-1-1').removeClass('hide').addClass('animated fadeInRight delay-3');
            $('.iphone-1').removeClass('hide').addClass('animated fadeInUp delay-3');
            $('.slide-1-2').removeClass('hide').addClass('animated fadeInDown delay-5');
            $('.slide-1-3').removeClass('hide').addClass('animated fadeInDown delay-6');
            $('.slide-1-scroll').removeClass('hide').addClass('animated fadeInDown delay-12');

            $('.icon span').css("color", "#fff");
            
            console.log(fadeSlides);
            if (fadeSlides == true ) {

                $('.slide-1').css("background-color", "#1ABC9C");
            };
        }
        if ( $( "body" ).hasClass( "viewing-page-3" ) ) {

            $('.iphone-2').removeClass('hide').addClass('animated fadeInDown delay-1');
            $('.slide-2-title').removeClass('hide').addClass('animated fadeIn delay-3');
            $('.slide-2-1').removeClass('hide').addClass('animated fadeIn delay-4');
            $('.slide-2-2').removeClass('hide').addClass('animated fadeInDown delay-5');
            $('.slide-2-3').removeClass('hide').addClass('animated fadeInDown delay-6');
            $('.slide-2-4').removeClass('hide').addClass('animated fadeInDown delay-9');
            $('.slide-2-5').removeClass('hide').addClass('animated fadeInDown delay-10');
            $('.slide-2-6').removeClass('hide').addClass('animated fadeInDown delay-11');
            $('.slide-2-scroll').removeClass('hide').addClass('animated fadeInDown delay-15');

            $('.icon span').css("color", "#fff");
            
            if (fadeSlides == true ) {
                
                $('.slide-2').css("background-color", "#34495e");
            }
        }
        if ( $( "body" ).hasClass( "viewing-page-4" ) ) {

            $('.slide-3-title').removeClass('hide').addClass('animated fadeInLeft delay-1');
            $('.slide-3-1').removeClass('hide').addClass('animated fadeInLeft delay-3');
            $('.iphone-3').removeClass('hide').addClass('animated fadeInUp delay-3');
            $('.slide-3-2').removeClass('hide').addClass('animated fadeInDown delay-5');
            $('.slide-3-3').removeClass('hide').addClass('animated fadeInDown delay-6');
            $('.slide-3-scroll').removeClass('hide').addClass('animated fadeInDown delay-12');

            $('.icon span').css("color", "#333");
            
            if (fadeSlides === true ) {
                
                $('.slide-3').css("background", "#f1c40f");
            }
        }
        if ( $( "body" ).hasClass( "viewing-page-5" ) ) {
            $('.icon span').css("color", "#fff");
        }
        if (fadeSlides == true && coloursSet == false) {

            $('.slide-1').css("background", "#e74c3c");
            $('.slide-2').css("background", "#1ABC9C");     
            $('.slide-3').css("background", "#34495e");
            coloursSet = true;
        }

    },300);
    
    /*-----  End of Animate slide when scrolled to  ------*/
    
    /*================================
    =            Settings            =
    ================================*/
    
    $('.settings-icon').on('click', function () {

        $(this).parent().toggleClass("open");

    });
    
    $('.toggle-video').on('click', function() {
        $('#big-video-wrap').toggleClass('hide-video');
    });

    $('.toggle-opacity-first').on('click', function() {
        $('.home').toggleClass('full-color');

    });
    $('.toggle-opacity-all').on('click', function() {
        $('.home').toggleClass('full-color');
        $('.slide-1').toggleClass('full-color');
        $('.slide-2').toggleClass('full-color');
        $('.slide-3').toggleClass('full-color');
        $('.contact').toggleClass('full-color');

    });
    $('.toggle-phone').on('click', function() {

        $('.home-phone').toggleClass('hide animated fadeIn');
        $('.home-copy').toggleClass('col-sm-8 col-sm-offset-2 col-sm-6');
    });

    $('.toggle-slide-fade').on('click', function() {

        if(fadeSlides === false) {

            fadeSlides = true;
            console.log(fadeSlides);

        } else if ( fadeSlides === true) {

            fadeSlides = false;
            console.log(fadeSlides);
        }

        $('.slide-1').toggleClass("fade-background");
        $('.slide-2').toggleClass("fade-background");
        $('.slide-3').toggleClass("fade-background");
    });

    /*-----  End of Settings  ------*/
    
});
