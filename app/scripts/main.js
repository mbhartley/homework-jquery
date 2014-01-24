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
$('.enter-firstName').focus(function(){
	$(this).css('background-color', '#b5aea3');
})
$('.enter-lastName').focus(function(){
	$(this).css('background-color', '#b5aea3');
})














