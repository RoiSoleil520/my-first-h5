const $ = require('jquery');

//页面加载前
var $loading = $('.loading');
$loading.show();

$(window).load(function() {
	'user strict';

    $loading.hide();

	var $section = $('#main .section'),
		$doctormouse = $('#main .section1__doctormouse'),
        $section__arrow = $('#main .section__arrow')
		;

    $section__arrow.click(function(){
        $.fn.fullpage.moveSectionDown();
    })
    
    $('#main').fullpage({
    	afterLoad: function(u, index){
    		if(index === 2){
    			let $section2_text1 = $('#main .section2__text1'),
                    $section2_text2 = $('#main .section2__text2'),
    				$section2_carlight = $('#main .section2__carlight'),
    				$section2_lanternlightL = $('#main .section2__lanternlightL'),
    				$section2_lanternlightR = $('#main .section2__lanternlightR'),
    				$section2_ground = $('#main .section2__ground')
    			;
                $section2_text1.addClass("section2__text1--animate");
                $section2_text2.addClass("section2__text2--animate");
                $section2_lanternlightL.addClass("section2__lanternlightL--animate");
                $section2_lanternlightR.addClass("section2__lanternlightR--animate");
                $section2_carlight.addClass("section2__carlight--animate");
                $section2_ground.addClass("section2__ground--animate");

    		}
            if(index === 3){
                let $section3_text1 = $('#main .section3__text1'),
                    $section3_text2 = $('#main .section3__text2'),
                    $section3_doctorshadow = $('#main .section3__doctorshadow'),
                    $section3_shadow = $('#main .section3__shadow'),
                    $section3_cover = $('#main .section3__cover'),
                    $section3_mask = $('#main .section3__mask')
                ;
                $section3_text1.addClass("section3__text1--animate");
                $section3_text2.addClass("section3__text2--animate");
                $section3_doctorshadow.addClass("section3__doctorshadow--animate");
                $section3_shadow.addClass("section3__shadow--animate");
                $section3_cover.addClass("section3__cover--animate");
                $section3_mask.addClass("section3__mask--animate");

            }
    	}
    });
});