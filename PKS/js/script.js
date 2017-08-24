$(document).ready(function(){
	/* START Scroll bottom*/
$('.downBot').click(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 2500);
    return false;
});
/* END Scroll Bottom*/

if (window.innerWidth > 760) {
/* START Remove invisibility of itens and animate*/
	$(window).scroll(function(event){

		var y = $(this).scrollTop();

		if(y >= 150){
			$('.info1').removeClass('invi');
			$('.info2').removeClass('invi');
			$('.info3').removeClass('invi');
			$('.info4').removeClass('invi');
			$('.info1').addClass('animated fadeInLeft');
			$('.info2').addClass('animated fadeInUp');
			$('.info3').addClass('animated fadeInUp');
			$('.info4').addClass('animated fadeInRight');
		}
		if(y >= 1550){

			$('.cita').addClass('animated fadeIn');
			$('.cita').removeClass('invi');
		}
	});

}
else{
	$('.info1').removeClass('invi');
	$('.info2').removeClass('invi');
	$('.info3').removeClass('invi');
	$('.info4').removeClass('invi');
	$('.cita').removeClass('invi');
}
/* END Remove invisibility of itens and animate*/
});