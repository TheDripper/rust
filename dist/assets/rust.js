(function($){
	$(document).on('click','.brick',function(){
		$('#playit').remove();
		$('#rust')[0].src+='&autoplay=1';
		$(this).fadeOut();
	});
}(jQuery));
