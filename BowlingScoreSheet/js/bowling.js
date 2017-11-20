function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

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
		var imgsrc = $(this).attr('class');
		if (imgsrc == 'pinUp' ) {
			$(this).attr('class', 'pinDown');
		} else {
			$(this).attr('class', 'pinUp');
		}
	});
});