function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function(){
	
	var selectedFrameID;
	 
	$('.name, .totalscorebox').on('click', function(){
			$('td').removeClass('active');  
			$("#result").html("");
			selectedFrameID = null;
	});
	
	$(".name").on('dblclick', function () {
        var OriginalContent = $(this).text();
         
        $(this).html("<input class='edit-name' type='text' value='" + OriginalContent + "' />");
        $(this).children().first().focus();
 
        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                var newContent = $(this).val();
                $(this).parent().text(newContent);
            }
        });
         
	    $(this).children().first().blur(function(){
	        $(this).parent().text(OriginalContent);
	    });
    });
	 
	$('#frames td').on('click', function(){
		var id = $(this).attr('id');
		var idArray = id.split("-");
		var game = idArray[0]
		var player = idArray[1]
		var frame = idArray[2]
		$('td').removeClass('active');  
		$(this).addClass('active');
		$('#'+game+'-'+player+'-'+frame+'-1').addClass('active');  
		selectedFrameID = id+'-1';
		$("#result").html(selectedFrameID + " Game " + game + " Player " + player + " Frame " + frame + " Ball 1" );
	}); 
	$('#balls td').on('click', function(){
		var id = $(this).attr('id');
		var idArray = id.split("-");
		var game = idArray[0]
		var player = idArray[1]
		var frame = idArray[2]
		var ball = idArray[3]
		$('td').removeClass('active');  
		$(this).addClass('active');
		$('#'+game+'-'+player+'-'+frame).addClass('active');  
		selectedFrameID = id;
		$("#result").html(selectedFrameID + " Game " + game + " Player " + player + " Frame " + frame + " Ball " + ball );
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
	$('#nextBall').on('click', function() {
		if (selectedFrameID == null) {
			selectedFrameID = '#1-1-1-1';
			$('#1-1-1-1').click();
			return;
		}
		var currentSelectedItem = selectedFrameID.split("-");
		var game = currentSelectedItem[0]
		var player = currentSelectedItem[1]
		var frame = currentSelectedItem[2]
		var ball = currentSelectedItem[3]
		var ball = parseInt(ball) + 1;		
		if (ball == 4) {
			var frame = parseInt(frame) + 1;
			var ball = 1;
		}
		$('#'+game+'-'+player+'-'+frame+'-'+ball).click();
	});
	$('#prevBall').on('click', function() {
		if (selectedFrameID == null) {
			selectedFrameID = '#1-1-1-1';
			$('#1-1-1-1').click();
			return;
		}
		var currentSelectedItem = selectedFrameID.split("-");
		var game = currentSelectedItem[0]
		var player = currentSelectedItem[1]
		var frame = currentSelectedItem[2]
		var ball = currentSelectedItem[3]
		var ball = parseInt(ball) - 1;
		if (ball == 0) {
			var frame = parseInt(frame) - 1;
			var ball = 3;
		}
		$('#'+game+'-'+player+'-'+frame+'-'+ball).click();
	});
});