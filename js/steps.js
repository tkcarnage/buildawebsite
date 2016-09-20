$(function(){
	//cache of selectors
	$navigation = $("#navigation");
	$step = $("#step");
	$glyphiconRight = $(".glyphicon-chevron-right");
	$stepone = $("#stepone");
	$steptwo = $("#steptwo");
	$stepthree = $("#stepthree");
	$stepfour = $("#stepfour");
	$stepfive = $("#stepfive");
	$stepsix = $("#stepsix");
	$stepseven = $("#stepseven");
	$listadd = $("#listadd");
	$content = $("#content");
	$p = $("p");
	$h1 = $("h1");
	$h3 = $("h3");
	$code = $("pre code");
	$pre = $("pre");
	$body = $("body");
	$splash = $("#splash");
	$highlight = $(".highlight");
	$buttonone = $("#buttonone");
	$buttontwo = $("#buttontwo");
	$buttonthree = $("#buttonthree");


	//steps functions
	var steps = 0;

	function step1() {
		//replace nav text
		$step.html("Step 1. Add Content");
		//show stepone change css
		$navigation.css({ "display": "flex"})
		$stepone.css({ "display": "block" });
		$splash.css({ "display": "none" });
		$body.css({ "background-color": "white" });
	}

	function step2() {
		//animate scroll to step2
		//replace nav text
		$step.html("Step 2. Add Spacing and Whitespace");
		//listadd step
		$listadd.append("<li>Add Spacing and Whitespace</li>");
		
		//show step two add css
		$steptwo.css({ "display": "block" });
		$content.css({ 
			"padding-left": "10%",
			"padding-right": "10%",
			"margin": "80px auto",
			"width": "980px",
			"display": "flex",
			"flex-direction": "column",
			"box-shadow": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" 
		});
		$p.css({
			"margin-top": "20px",
			"margin-bottom": "30px"
		});
		$h1.css({
			"width": "100%",
			"text-align": "center",
			"display": "inline-block",
			"padding-bottom": "10px",
			"border-bottom": "7px solid"
		});
		$h3.css({
			"margin-top": "25px",
			"border-left": "3px solid",
			"padding-left": "5px"
		});
		$pre.css({ 
			"margin-left": "5%",
			"margin-right": "5%",
			"padding-left": "30px",
			"border-left": "5px solid" 
		});

		//animate scroll
		$body.animate({
			scrollTop: $steptwo.offset().top - 60
		}, 800);
	}

	function step3() {
		//add to list
		$step.html("Step 3. Add Typeface");
		//add css
		$stepthree.css({ "display": "block" });
		$listadd.append("<li>Add Typeface and Font Size</li>");
		$body.css({ "font-family": "'Roboto', sans-serif" });
		$p.css({ "font-size": "18px" });
		$h3.css({ "font-size": "30px" });
		//animate scroll
		$body.animate({
			scrollTop: $stepthree.offset().top - 60
		}, 800);
	}

	function step4() {
		$step.html("Step 4. Add Color Palette");
		$listadd.append("<li>Add Color Palette</li>");
		$stepfour.css({ "display": "block" });
		//add css
		$h1.css({ 
			"border-bottom-color": "#FBEF15",
			"color": "#F864F3"
		});
		$h3.css({ 
			"border-left-color": "#FBEF15",
			"color": "#F864F3" 
		});
		$pre.css({ "border-left-color": "#05F856" });
		$highlight.css({ "color": "#A44BFD" });
		$content.css({ "background-color": "white" });
		$body.css({ "background-color": "#fafafa" });
		$body.animate({
			scrollTop: $stepfour.offset().top - 60
		}, 800);
	}

	function step5() {
		$step.html("Step 5. Add Splash Page");
		$listadd.append("<li>Add Splash Page</li>");
		$stepfive.css({ "display": "block" });
		$(".splash").css({ "display": "flex" });
		$body.animate({
			scrollTop: $stepfive.offset().top - 60
		}, 800);
	}

	function step6() {
		$step.html("Step 6. Add Javascript");
		$listadd.append("<li>Add Javascript</li>");
		$stepsix.css({ "display": "block" });
		//add css
		$("ol li:nth-child(1)").click(function(){
			$body.animate({
				scrollTop: $stepone.offset().top - 60
			}, 800);
		});
		$("ol li:nth-child(2)").click(function(){
			$body.animate({
				scrollTop: $steptwo.offset().top - 60
			}, 800);
		});
		$("ol li:nth-child(3)").click(function(){
			$body.animate({
				scrollTop: $stepthree.offset().top - 60
			}, 800);
		});
		$("ol li:nth-child(4)").click(function(){
			$body.animate({
				scrollTop: $stepfour.offset().top - 60
			}, 800);
		});
		$("ol li:nth-child(5)").click(function(){
			$body.animate({
				scrollTop: $stepfive.offset().top - 60
			}, 800);
		});
		$("ol li:nth-child(6)").click(function(){
			$body.animate({
				scrollTop: $stepsix.offset().top - 60
			}, 800);
		});
		$body.animate({
			scrollTop: $stepsix.offset().top - 60
		}, 800);
	}

	function step7() {
		$step.html("Step 7. Add Footer");
		$glyphiconRight.css({ "display": "none" });
		$listadd.append("<li>Add Footer</li>");
		$stepseven.css({ "display": "block" });
		$("ol li:nth-child(7)").click(function(){
			$body.animate({
				scrollTop: $stepseven.offset().top - 60
			}, 800);
		});
		$body.animate({
			scrollTop: $stepseven.offset().top - 60
		}, 800);
		setTimeout(function(){
			$navigation.fadeOut("slow");
		}, 3000);
	}
	
	$glyphiconRight.click(function(){
		steps++;
		$glyphiconRight.addClass('jello');
		$step.addClass('fadeInLeft');
		switch(steps) {
			case 1: 
				step1();
				break;
			case 2:
				step2();
				break;
			case 3:
				step3();
				break;
			case 4: 
				step4();
				break;
			case 5:
				step5();
				break;
			case 6:
				step6();
				break;
			case 7:
				step7();
				break;
			default:
				alert("something went wrong");
		}
	})

	//hover on right arrow
	$glyphiconRight.mouseover(
		function(){
			$glyphiconRight.addClass("rubberBand")
		}
	);

	$buttonone.click(function(){
		$buttonone.addClass("animated flip");
	});

	$buttontwo.click(function(){
		$buttontwo.addClass("animated hinge");
	});

	$buttonthree.click(function(){
		$buttonthree.addClass("animated rollIn");
	});

	//remove animate on arrow
	$glyphiconRight.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$glyphiconRight.removeClass("jello");
		$glyphiconRight.removeClass("rubberBand")
		$glyphiconRight.removeClass("bounceInUp");
	});
	//remove step animation
	$step.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$step.removeClass("fadeInLeft");
	});

	//remove button animations
	$buttonone.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
		$buttonone.removeClass("flip");
	});
	$buttontwo.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
		$buttontwo.removeClass("hinge");
	});
	$buttonthree.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
		$buttonthree.removeClass("rollIn");
	});
})







