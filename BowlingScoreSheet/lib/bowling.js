$(document).ready(function(){
	 $('#bowlingTable').on('click', 'td', function(){
		 var column_num = parseInt( $(this).index() ) + 1;
         var row_num = parseInt( $(this).parent().index() )+1;   
         var tdclass = $(this).attr("class"); 
         var frame = $(this).attr("frame"); 
         var ball = $(this).attr("ball");
         
         if (tdclass == "name") {
         	$("#result").html("");
         }
         if (tdclass == "totalscorebox") {
         	$("#result").html("");
         }
         if (tdclass == "framescore") {
         	 $("#result").html("Frame "+ column_num + " , Ball 1");
         	 var self = this,
        		 old_bg = this.style.backgroundColor;

    			 this.style.backgroundColor ='blue';
        		 self.style.backgroundColor = old_bg;
         } 
         if (tdclass == "ballbox") {
         	 $("#result").html("Frame "+ frame + " , Ball " + ball );
         } 
	});
	$('#pindeck').on('click', 'img', function() {
		var imgsrc = $(this).attr('src');
		if (imgsrc == 'img/Single-Pin.gif' ) {
			$(this).attr('src', 'img/Blank_button.png');
		} else {
			$(this).attr('src', 'img/Single-Pin.gif');
		}
	});
});