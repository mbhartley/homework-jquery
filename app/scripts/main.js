//EXAMPLE 1//
$('.activate-box').click(function(){
	$('.box').addClass ('active');
})
//EXAMPLE 2//
$('.hover-box').hover(function(){
	$('.circle').addClass('hover');
	$('.my-reply').addClass('hover');
})
//EXAMPLE 3//
$('.click-hide').click(function(){
	$('.tree-pic').fadeOut(1500);
})
//EXAMPLE 4//
$('.click-to-choose').click(function(){
	$('.truck-pic').addClass('active');
})
//EXAMPLE 5//
$('.hide-reveal-1').click(function(){
	$('.bw-boys').toggle(600)
})

$('.hide-reveal-2').click(function(){
	$('.e-glasses').toggle(600)
})

$('.hide-reveal-3').click(function(){
	$('.shades').toggle(600)
})
//EXAMPLE 6//
$('.enter-email').keydown(function(){
	$('.enter-email').addClass('highlight');
})
//EXAMPLE 7//
$('.enter-email-2').keydown(function(){
	$('.congrats').addClass('reveal');
})
