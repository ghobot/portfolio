$(document).ready(function() {
	/* this jquery script runs the mouseover/hover animation of the thumbnails */
	$(function() {
		$('ul.hover_block li').hover(function(){
				$(this).find('.abstract').animate({ opacity: 0.9 , marginTop: '0px', }, 600, 'easeOutBounce', function(){ });},
				/* $(this).find('.abstract').animate({ opacity: 0.75 , marginTop: '0px', }, 250, 'swing', function(){ });}, */
		 function(){
				$(this).find('.abstract').animate({ opacity: 0, marginTop:'200px' }, 300, 'swing', function(){ });
			});
	}); 
 
	// Add pdf icons to pdf links
	$("a[href$='.pdf']").addClass("pdf").text().replace(/word/ig, "");
 
	// Add txt icons to document links (doc, rtf, txt)
	$("a[href$='.doc'], a[href$='.txt'], a[href$='.rtf']").addClass("txt");
 
	// Add video icons to video file links (quicktime, windows media, open video codecs)
	$("a[href$='.mp4'], a[href$='.avi'], a[href$='.mov'], a[href$='.wmv'], a[href$='.ogv'], a[href$='.webm']").addClass("video"); 

	// Add audio icons to audio file links (ogg, mp3, wav, wma)
	$("a[href$='.mp3'], a[href$='.ogg'], a[href$='.wav'], a[href$='.wma']").addClass("audio"); 
 
	// Add email icons to email links
	$("a[href^='mailto:']").addClass("email");
	
	// Add txt icons to document links (doc, rtf, txt)
	$("a[href$='.zip'], a[href$='.rar'] ").addClass("zip");

 
	//Add external link icon to external links - 
	$('a').filter(function() {
		//Compare the anchor tag's host name with location's host name
	    return this.hostname && this.hostname !== location.hostname;
	  }).addClass("external");
	//You might also want to set the _target attribute to blank
	
		$('a').filter(function() {
		//Compare the anchor tag's host name with location's host name
	    return this.hostname && this.hostname !== location.hostname;
	  }).addClass("external").attr("target", "_blank");
	  
	  $('a.video').text('video');
	  $('a.audio').text('audio');
	  $('a.pdf').text('pdf');
	
});