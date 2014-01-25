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
//EXAMPLE 8//
$('.click-to-hide').click(function(){
	$('.text-to-be-hidden').hide(100);
})
//EXAMPLE 9//
$('.choose').click(function(){
	$('.highlight').addClass('on');
})
//EXAMPLE 10//
$('.click-ex10').click(function(){
	$('.circle-ex10').addClass('red-ex10')
})
//EXAMPLE 11//
$('.click-ex11').click(function(){
	$('.circle-red').addClass('red');
	$('.circle-yellow').addClass('yellow');
	$('.circle-green').addClass('green');
})
//EXAMPLE 12//
$('.crush-initiate').click(function(){
	$('.box-12').addClass('crusher');
	$('.circle-12').addClass('crushed');
})
//EXAMPLE 13//
$('.collapse-click').click(function(){
	$('.building').addClass('down');
})
//EXAMPLE 14//
$('.hover-orange').hover(function(){
	$('.red-square').addClass('red-move');
	$('.yellow-square').addClass('yellow-move');
})
//EXAMPLE 15//
    $('.arrow-right').click(function() {
    $('.box-moves').animate({'left': '+=50px'}, 'slow' );
}) 
$('.arrow-left').click(function(){
  $('.box-moves').animate({ 'left': '-=50px' }, 'slow' );
})
//EXAMPLE 16//
$('.parent16').hover(function(){
	$('.parent16').addClass('tilt');
	$('.child16').addClass('roll')
})
//EXAMPLE 17//
$('.start').click(function(){
	$('.count3').addClass('count-down3');
	$('.count2').addClass('count-down2');
	$('.count1').addClass('count-down1');
	$('.rocket').addClass('launch');
})
//EXAMPLE 18//
$('.do-this').click(function() {
	$('.box-holder').addClass('lift');
	$('.spinner').addClass('spin');
	$('.one-box').addClass('one-change');
	$('.two-box').addClass('two-change');
	$('.three-box').addClass('three-change');	
})
//EXAMPLE 19??
$('.enter-firstName').focus(function(){
	$(this).css('background-color', '#b5aea3');
})
$('.enter-lastName').focus(function(){
	$(this).css('background-color', '#b5aea3');
})
//EXAMPLE 20//
$('.pea-pod').hover(function(){
	$(this).addClass('pod-mutate');
	$('.pea-one').addClass('pea-one-mutate');
	$('.pea-three').addClass('pea-three-mutate');
})
//EXAMPLE 21//
$('.car').click(function(){
	$(this).addClass('car-drive');
	$('.back-wheel').addClass('back-wheel-drive');
	$('.front-wheel').addClass('front-wheel-drive');
	$('.brick1').addClass('brick1-move');
	$('.brick2').addClass('brick2-move');
})
//EXAMPLE 22//
	$('.contain-them').hover(function(){
		$('.square1').addClass('add-color1');
		$('.square2').addClass('add-color2');
		$('.square3').addClass('add-color3');
		$('.square4').addClass('add-color4');
	})
//EXAMPLE 23//
	$('.do-this-spot').click(function(){
		$('.spot1').addClass('race-spot1');
		$('.spot2').addClass('race-spot2');
		$('.spot3').addClass('race-spot3');
		$('.spot4').addClass('race-spot4');
		$('.winner-hidden').addClass('winner-reveal');
	})










