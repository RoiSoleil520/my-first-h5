const $ = require('jquery');

$(function(){
	'user strict';

	var $section = $('#main .section'),
		$doctormouse = $('#main .section1__doctormouse'),
		$section1_text1 = $('#main .section1__text1'),
		$section1_text2 = $('#main .section1__text2'),
		$interval = setInterval(openmouse, 2000),
		$show_section1_text = setTimeout(show_section1_text1,1000)
		;

	//console.log($(window).height());
	function openmouse(){
		$doctormouse.fadeIn("slow");
		setTimeout(function closemouse(){
			$doctormouse.fadeOut("slow");
		},3000);
	}
	function show_section1_text1(){
		$section1_text1.fadeIn("slow");
		setTimeout(show_section1_text2,1000);
	}
	function show_section1_text2(){
		$section1_text2.fadeIn("slow");
	}
    $('#main').fullpage({
    	afterLoad: function(u, index){
    		if(index === 2){
    			let $section2_text1 = $('#main .section2__text1'),
                    $section2_text2 = $('#main .section2__text2'),
                    $show_section2_text = setTimeout(show_section2_text1,1000),
    				$section2_carlight = $('#main .section2__carlight'),
    				$section2_lanternlightL = $('#main .section2__lanternlightL'),
    				$section2_lanternlightR = $('#main .section2__lanternlightR'),
    				$section2_ground = $('#main .section2__ground')
    			;
    			function show_section2_text1(){
    				$section2_text1.fadeIn("slow");
    				setTimeout(show_section2_text2,1000);
    			}
    			function show_section2_text2(){
    				$section2_text2.fadeIn("slow");
    				$section2_lanternlightL.fadeIn(3000);  
    				$section2_lanternlightR.fadeIn(3000);
    				
                    $section2_carlight.show();
                    setTimeout(hide_carlight,500);
    			}
    			function hide_carlight(){
    				$section2_carlight.hide();

                    $section2_ground.fadeIn(2000);
    				setTimeout(show_carlight1,500);
    			}
    			function show_carlight1(){
    				$section2_carlight.show();
    			}
                index = 3;
    		}
            if(index === 3){
                let $section3_text1 = $('#main .section3__text1'),
                    $section3_text2 = $('#main .section3__text2'),
                    $show_section3_text = setTimeout(show_section3_text1,1000),
                    $section3_doctorshadow = $('#main .section3__doctorshadow'),
                    $section3_shadow = $('#main .section3__shadow'),
                    $section3_cover = $('#main .section3__cover'),
                    $section3_mask = $('#main .section3__mask')
                ;
                function show_section3_text1(){
                    $section3_text1.fadeIn("slow");
                    setTimeout(show_section3_text2,1000);
                }
                function show_section3_text2(){
                    $section3_text2.fadeIn("slow");
                    
                    $section3_cover.animate({
                       opacity: "show"
                    }, 1000);
                    $section3_mask.animate({
                       opacity: "hide"
                    }, 1000);
                    $section3_doctorshadow.fadeIn(1000);
                    $section3_shadow.fadeIn(1000);
                }
            }
            if(index === 4){
                let $section4_arrow = $('#main .section4__arrow'),
                    $section4_text = $('#main .section4__text')
                ;
                setInterval(arrowfade,1000);
                setInterval(textfade,100);
                function arrowfade(){
                    $section4_arrow.animate({top:"58.5%"},1000).fadeOut(1000).animate({top:"60%"},100).fadeIn(100);
                }
                function textfade(){
                    $section4_text.animate({width:"77%"},1000).animate({width:"75%"},1000)
                }
            }
    	}
    });
});