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
         var tdclass = $(this).attr("class"); 
         var game = $(this).attr("game"); 
         var frame = $(this).attr("frame"); 
         var ball = $(this).attr("ball");
         
         if (tdclass == "name") {
         	$("#result").html("");
         }
         if (tdclass == "totalscorebox") {
         	$("#result").html("");
         }
	});
	 
	 $('.name .totalscorebox').on('click', function(){
			$('td').removeClass('active');  
			$("#result").html("");
		}); 
	 
	$('#frames td').on('click', function(){
		var id = $(this).attr('id');
		var idArray = id.split("-");
		var game = idArray[0]
		var frame = idArray[1]
		$('td').removeClass('active');  
		$(this).addClass('active');
		$('#'+id+'-1').addClass('active');  
		$("#result").html("Game " + game + " Frame " + frame + " Ball 1" );
	}); 
	$('#balls td').on('click', function(){
		var id = $(this).attr('id');
		var idArray = id.split("-");
		var game = idArray[0]
		var frame = idArray[1]
		var ball = idArray[2]
		$('td').removeClass('active');  
		$(this).addClass('active');
		$('#'+idArray[0]+'-'+idArray[1]).addClass('active');  
		$("#result").html("Game " + game + " Frame " + frame + " Ball " + ball );
	}); 
	$('#bowlingTable td').on('mouseover', function(){
		$(this).addClass('highlight');
	});
	$('#bowlingTable td').on('mouseout', function(){
		$(this).removeClass('highlight');
	});
	$('#pindeck').on('click', 'img', function() {
		$(this).toggleClass('pinDown')
	});
});