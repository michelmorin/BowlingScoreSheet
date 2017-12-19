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
		
		//Get pins down from Current and set correctly
		var currentPinsDown = $('#'+selectedFrameID).attr('pins').split("-");
		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];
		if (pin1 == "0") {
			$('#pin1').removeClass('pinDown');
		} 
		else {
			$('#pin1').addClass('pinDown');
		}
		if (pin2 == "0") {
			$('#pin2').removeClass('pinDown');
		} 
		else {
			$('#pin2').addClass('pinDown');
		}
		if (pin3 == "0") {
			$('#pin3').removeClass('pinDown');
		} 
		else {
			$('#pin3').addClass('pinDown');
		}
		if (pin4 == "0") {
			$('#pin4').removeClass('pinDown');
		} 
		else {
			$('#pin4').addClass('pinDown');
		}
		if (pin5 == "0") {
			$('#pin5').removeClass('pinDown');
		} 
		else {
			$('#pin5').addClass('pinDown');
		}
		
	}); 
	$('#bowlingTable td').on('mouseover', function(){
		$(this).addClass('highlight');
	});
	$('#bowlingTable td').on('mouseout', function(){
		$(this).removeClass('highlight');
	});
	$('#nextBall').on('click', function() {
		if (selectedFrameID == null) {
			selectedFrameID = '1-1-1-1';
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
			selectedFrameID = '1-1-1-1';
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
	$('#pin1').on('click', function() {
		$(this).toggleClass('pinDown')
		
		
		var currentSelectedItem = selectedFrameID.split("-");
		var game = currentSelectedItem[0]
		var player = currentSelectedItem[1]
		var frame = currentSelectedItem[2]
		var ball = currentSelectedItem[3]
		var currentPoints = $('#'+selectedFrameID).attr('points');

		var currentPinsDown = $('#'+selectedFrameID).attr('pins').split("-");
		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];
		if (pin1 == "0") {
			//Add 2 pins as pin was up
			pin1 = "1";
			pinCount = 2;
		} 
		else {
			//Subtract 2 pins as pin was down
			pin1 = "0";
			pinCount = -2;
		}
			
		var currentPoints = $('#'+selectedFrameID).attr('points');
			
		var newPoints = parseInt(currentPoints) + pinCount;
		$('#'+selectedFrameID).attr('points', newPoints);
		$('#'+selectedFrameID).text(newPoints.toString());	
		
		$('#'+selectedFrameID).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		ball = parseInt(ball) + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
		ball = ball + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
	});
	$('#pin2').on('click', function() {
		$(this).toggleClass('pinDown')
		var currentSelectedItem = selectedFrameID.split("-");
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];
		
		var currentPinsDown = $('#'+selectedFrameID).attr('pins').split("-");
		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];
		if (pin2 == "0") {
			//Add 2 pins as pin was up
			pin2 = "1";
			pinCount = 3;
		} 
		else {
			//Subtract 2 pins as pin was down
			pin2 = "0";
			pinCount = -3;
		}
		
		var currentPoints = $('#'+selectedFrameID).attr('points');
		var newPoints = parseInt(currentPoints) + pinCount;
		$('#'+selectedFrameID).attr('points', newPoints);
		$('#'+selectedFrameID).text(newPoints.toString());
		$('#'+selectedFrameID).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		ball = parseInt(ball) + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
		ball = ball + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
	});
	$('#pin3').on('click', function() {
		$(this).toggleClass('pinDown')
		var currentSelectedItem = selectedFrameID.split("-");
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];
		
		var currentPinsDown = $('#'+selectedFrameID).attr('pins').split("-");
		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];
		if (pin3 == "0") {
			//Add 2 pins as pin was up
			pin3 = "1";
			pinCount = 5;
		} 
		else {
			//Subtract 2 pins as pin was down
			pin3 = "0";
			pinCount = -5;
		}
		
		var currentPoints = $('#'+selectedFrameID).attr('points');
		var newPoints = parseInt(currentPoints) + pinCount;
		$('#'+selectedFrameID).attr('points', newPoints);
		$('#'+selectedFrameID).text(newPoints.toString());
		$('#'+selectedFrameID).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		ball = parseInt(ball) + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
		ball = ball + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
	});
	$('#pin4').on('click', function() {
		$(this).toggleClass('pinDown')
		var currentSelectedItem = selectedFrameID.split("-");
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];
		
		var currentPinsDown = $('#'+selectedFrameID).attr('pins').split("-");
		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];
		if (pin4 == "0") {
			//Add 2 pins as pin was up
			pin4 = "1";
			pinCount = 3;
		} 
		else {
			//Subtract 2 pins as pin was down
			pin4 = "0";
			pinCount = -3;
		}
		
		var currentPoints = $('#'+selectedFrameID).attr('points');
		var newPoints = parseInt(currentPoints) + pinCount;
		$('#'+selectedFrameID).attr('points', newPoints);
		$('#'+selectedFrameID).text(newPoints.toString());
		$('#'+selectedFrameID).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		ball = parseInt(ball) + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
		ball = ball + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
	});
	$('#pin5').on('click', function() {
		$(this).toggleClass('pinDown')
		var currentSelectedItem = selectedFrameID.split("-");
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];
		
		var currentPinsDown = $('#'+selectedFrameID).attr('pins').split("-");
		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];
		if (pin5 == "0") {
			//Add 2 pins as pin was up
			pin5 = "1";
			pinCount = 2;
		} 
		else {
			//Subtract 2 pins as pin was down
			pin5 = "0";
			pinCount = -2;
		}
		
		var currentPoints = $('#'+selectedFrameID).attr('points');
		var newPoints = parseInt(currentPoints) + pinCount;
		$('#'+selectedFrameID).attr('points', newPoints);
		$('#'+selectedFrameID).text(newPoints.toString());
		$('#'+selectedFrameID).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		ball = parseInt(ball) + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
		ball = ball + 1;
		if (ball < 4 ) {
			$('#'+game+'-'+player+'-'+frame+'-'+ball.toString()).attr('pins',pin1+"-"+pin2+"-"+pin3+"-"+pin4+"-"+pin5);
		}
	});
});

function onChangeCalculateAllFrameTotals() {

}