$(function(){

    // Back to top jquery start here
    $('.btt').click(function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });
    // Back to top jquery end here

    // Sticky Header Jquery start here
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $('.header').addClass('sticky-header');
        }else{
            $('.header').removeClass('sticky-header');
        }
    });
    // Sticky Header Jquery end here

    // Typed Js Start Here
    $(".typed").typed({
		strings: ["Designer", "Developer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1300,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 500000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // Typed Js End Here

    // Veno Box jquery code start here
    $('.venobox').venobox(); 
    // Veno Box jquery code end here

    // Preloader jquery cide start here
    $(window).on('load',function(){
        $('.preloader').delay(1000).fadeOut(1000);
    });
    // Preloader jquery cide end here


});