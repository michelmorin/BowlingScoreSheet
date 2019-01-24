$(document).ready(function() {
	var selectedFrameID;

	$('#numOfPlayers').on('change', function() {
		var numOfPlayers = $(this).val();

		if (numOfPlayers === '1') {
			$('#player1Table').removeClass('hidden');
			$('#player2Table').addClass('hidden');
			$('#player3Table').addClass('hidden');
			$('#player4Table').addClass('hidden');
			$('#player5Table').addClass('hidden');
			$('#player6Table').addClass('hidden');
		} else if (numOfPlayers === '2') {
			$('#player1Table').removeClass('hidden');
			$('#player2Table').removeClass('hidden');
			$('#player3Table').addClass('hidden');
			$('#player4Table').addClass('hidden');
			$('#player5Table').addClass('hidden');
			$('#player6Table').addClass('hidden');
		}
		if (numOfPlayers === '3') {
			$('#player1Table').removeClass('hidden');
			$('#player2Table').removeClass('hidden');
			$('#player3Table').removeClass('hidden');
			$('#player4Table').addClass('hidden');
			$('#player5Table').addClass('hidden');
			$('#player6Table').addClass('hidden');
		}
		if (numOfPlayers === '4') {
			$('#player1Table').removeClass('hidden');
			$('#player2Table').removeClass('hidden');
			$('#player3Table').removeClass('hidden');
			$('#player4Table').removeClass('hidden');
			$('#player5Table').addClass('hidden');
			$('#player6Table').addClass('hidden');
		}
		if (numOfPlayers === '5') {
			$('#player1Table').removeClass('hidden');
			$('#player2Table').removeClass('hidden');
			$('#player3Table').removeClass('hidden');
			$('#player4Table').removeClass('hidden');
			$('#player5Table').removeClass('hidden');
			$('#player6Table').addClass('hidden');
		}
		if (numOfPlayers === '6') {
			$('#player1Table').removeClass('hidden');
			$('#player2Table').removeClass('hidden');
			$('#player3Table').removeClass('hidden');
			$('#player4Table').removeClass('hidden');
			$('#player5Table').removeClass('hidden');
			$('#player6Table').removeClass('hidden');
		}
	});

	$('.name, .totalscorebox').on('click', function() {
		$('td').removeClass('active');
		$('#result').html('');
		selectedFrameID = null;
	});

	$('.name').on('dblclick', function() {
		var OriginalContent = $(this).text();

		$(this).html("<input class='edit-name' type='text' value='" + OriginalContent + "' />");
		$(this).children().first().focus();

		$(this).children().first().keypress(function(e) {
			if (e.which == 13) {
				var newContent = $(this).val();
				$(this).parent().text(newContent);
			}
		});

		$(this).children().first().blur(function() {
			$(this).parent().text(OriginalContent);
		});
	});

	$('#frames td').on('click', function() {
		var id = $(this).attr('id');
		var idArray = id.split('-');
		var game = idArray[0];
		var player = idArray[1];
		var frame = idArray[2];
		$('td').removeClass('active');
		$(this).addClass('active');
		$('#' + game + '-' + player + '-' + frame + '-1').addClass('active');
		selectedFrameID = id + '-1';

		setPinDeckOnSelection();
	});
	$('#balls td').on('click', function() {
		var id = $(this).attr('id');
		var idArray = id.split('-');
		var game = idArray[0];
		var player = idArray[1];
		var frame = idArray[2];
		var ball = idArray[3];
		$('td').removeClass('active');
		$(this).addClass('active');
		$('#' + game + '-' + player + '-' + frame).addClass('active');
		selectedFrameID = id;

		var currentPoints = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('points');

		if (ball == '2' || ball == '3') {
			var currentPinsDown = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('pins');

			if (currentPinsDown == '1-1-1-1-1' && currentPoints == '0') {
				if (frame != '10') {
					ball = parseInt(ball) - 1;
					if (ball == 2) {
						var currentPoints = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('points');
						var currentPinsDown = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('pins');
						if (currentPinsDown == '1-1-1-1-1' && currentPoints == '0') {
							ball = parseInt(ball) - 1;
						}
					}
					$('#' + game + '-' + player + '-' + frame + '-' + ball).click();
					return;
				} else {
					$('#' + selectedFrameID).attr('pins', '0-0-0-0-0');
				}
			}
		}

		//This added the 0 score automatically on click which we don't want anymore
		/*if ($('#' + selectedFrameID).attr('points') == '0') {
			$('#' + selectedFrameID).text('0');
		}*/

		setPinDeckOnSelection();
	});
	$('#bowlingTable td').on('mouseover', function() {
		$(this).addClass('highlight');
	});
	$('#bowlingTable td').on('mouseout', function() {
		$(this).removeClass('highlight');
	});
	$('#nextBall').on('click', function() {
		if (selectedFrameID == null) {
			selectedFrameID = '1-1-1-1';
			$('#1-1-1-1').click();
			return;
		}

		var currentSelectedItem = selectedFrameID.split('-');
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];
		var ball = parseInt(ball) + 1;

		var currentPinsDown = $('#' + selectedFrameID).attr('pins');

		if (ball == 2 || ball == 3) {
			if (currentPinsDown == '1-1-1-1-1') {
				if (frame != '10') {
					var frame = parseInt(frame) + 1;
					var ball = 1;
				}
			}
		}
		if (ball == 4) {
			var frame = parseInt(frame) + 1;
			var ball = 1;
			//Goto Next bowler here too if there is and if last bowler then go to first bowler and next frame unless last bowler and last frame
		}

		if ($('#' + selectedFrameID).attr('points') == '0') {
			$('#' + selectedFrameID).text('0');
		}

		$('#' + game + '-' + player + '-' + frame + '-' + ball).click();
	});
	$('#prevBall').on('click', function() {
		if (selectedFrameID == null) {
			selectedFrameID = '1-1-1-1';
			$('#1-1-1-1').click();
			return;
		}
		var currentSelectedItem = selectedFrameID.split('-');
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];
		ball = parseInt(ball) - 1;

		if (ball == 0) {
			frame = parseInt(frame) - 1;
			ball = 3;
		}

		var currentPoints = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('points');

		if (ball == 3) {
			var currentPinsDown = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('pins');

			if (currentPinsDown == '1-1-1-1-1' && currentPoints == '0') {
				ball = parseInt(ball) - 1;
				var currentPoints = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('points');
				var currentPinsDown = $('#' + game + '-' + player + '-' + frame + '-' + ball).attr('pins');
				if (currentPinsDown == '1-1-1-1-1' && currentPoints == '0') {
					ball = parseInt(ball) - 1;
				}
			}
		}

		$('#' + game + '-' + player + '-' + frame + '-' + ball).click();
	});
	$('#pin1').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(0, 2);
	});
	$('#pin2').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(1, 3);
	});
	$('#pin3').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(2, 5);
	});
	$('#pin4').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(3, 3);
	});
	$('#pin5').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(4, 2);
	});

	$('#missed').on('click', function() {
		//selectedPin(-1, 0);
		console.log('missed shot');
	});

	function selectedPin() {
		var pinNumber = arguments[0];
		var pinValue = arguments[1];

		var currentSelectedItem = selectedFrameID.split('-');
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];

		var currentPinsDown = $('#' + selectedFrameID).attr('pins').split('-');

		/*if (pinNumber == '-1') {
			//Missed Shot
			pinCount = pinValue;
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).attr('points', '0');
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).text('');
		} else*/ if (
			currentPinsDown[pinNumber] == '0'
		) {
			//Add 2 pins as pin was up
			currentPinsDown[pinNumber] = '1';
			pinCount = pinValue;
		} else {
			//Subtract 2 pins as pin was down
			currentPinsDown[pinNumber] = '0';
			pinCount = -pinValue;
		}

		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];

		var currentPoints = $('#' + selectedFrameID).attr('points');
		var newPoints = parseInt(currentPoints) + pinCount;
		$('#' + selectedFrameID).attr('points', newPoints);

		if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-1' && ball == '1') {
			$('#' + selectedFrameID).text('X');
		} else if (
			pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-1' &&
			ball == '2' &&
			$('#' + selectedFrameID).attr('points') != '15'
		) {
			$('#' + selectedFrameID).text('/');
		} else if (
			pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-1' &&
			ball == '2' &&
			$('#' + selectedFrameID).attr('points') == '15' &&
			frame == '10'
		) {
			$('#' + selectedFrameID).text('X');
		} else if (
			pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-1' &&
			frame == '10' &&
			ball == '3' &&
			$('#' + game + '-' + player + '-' + frame + '-1').attr('points') == '15' &&
			'15' &&
			$('#' + game + '-' + player + '-' + frame + '-2').attr('points') != '15'
		) {
			$('#' + selectedFrameID).text('/');
		} else if (
			pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-1' &&
			frame == '10' &&
			ball == '3' &&
			$('#' + game + '-' + player + '-' + frame + '-1').attr('points') == '15' &&
			$('#' + game + '-' + player + '-' + frame + '-2').attr('points') == '15'
		) {
			$('#' + selectedFrameID).text('X');
		} else if (
			pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-1' &&
			frame == '10' &&
			ball == '3' &&
			$('#' + game + '-' + player + '-' + frame + '-2').attr('pins') == '1-1-1-1-1' &&
			$('#' + game + '-' + player + '-' + frame + '-2').attr('points') != '15'
		) {
			$('#' + selectedFrameID).text('X');
		} else {
			$('#' + selectedFrameID).text(newPoints.toString());
		}

		$('#' + selectedFrameID).attr('pins', pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5);
		ball = parseInt(ball) + 1;
		if (ball < 4) {
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).attr(
				'pins',
				pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5
			);
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).attr('points', '0');
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).text('');
		}
		ball = ball + 1;
		if (ball < 4) {
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).attr(
				'pins',
				pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5
			);
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).attr('points', '0');
			$('#' + game + '-' + player + '-' + frame + '-' + ball.toString()).text('');
		}

		onChangeCalculateAllFrameTotals();
	}

	function setPinDeckOnSelection() {
		//Get pins down from Current and set correctly
		var currentPinsDown = $('#' + selectedFrameID).attr('pins').split('-');
		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];
		if (pin1 == '0') {
			$('#pin1').removeClass('pinDown');
		} else {
			$('#pin1').addClass('pinDown');
		}
		if (pin2 == '0') {
			$('#pin2').removeClass('pinDown');
		} else {
			$('#pin2').addClass('pinDown');
		}
		if (pin3 == '0') {
			$('#pin3').removeClass('pinDown');
		} else {
			$('#pin3').addClass('pinDown');
		}
		if (pin4 == '0') {
			$('#pin4').removeClass('pinDown');
		} else {
			$('#pin4').addClass('pinDown');
		}
		if (pin5 == '0') {
			$('#pin5').removeClass('pinDown');
		} else {
			$('#pin5').addClass('pinDown');
		}
	}

	function onChangeCalculateAllFrameTotals() {
		var currentSelectedItem = selectedFrameID.split('-');
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];

		var framePoints =
			parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
			parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points')) +
			parseInt($('#' + game + '-' + player + '-' + frame + '-3').attr('points'));

		if (frame == '1') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		}
		if (frame == '2') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous a single Strike
			if ($('#' + game + '-' + player + '-1-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					15 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-1').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-1-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-1-2').attr('points') != '0'
			) {
				var previousframePoints =
					15 + parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-1').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-1').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		}
		if (frame == '3') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-1-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-2-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					30 + parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-1').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-2-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-1').text()) +
					15 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-2').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-2-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-2-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-1').text()) +
					15 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-2').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-2').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		}
		if (frame == '4') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-2-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-3-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-1').text()) +
					30 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-2').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-3-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-2').text()) +
					15 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-3').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-3-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-3-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-2').text()) +
					15 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-3').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-3').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		} else if (frame == '5') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-3-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-4-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-2').text()) +
					30 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-3').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-4-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-3').text()) +
					parseInt($('#' + game + '-' + player + '-4').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-4').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-4-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-4-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-3').text()) +
					parseInt($('#' + game + '-' + player + '-4').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-4').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-4').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		} else if (frame == '6') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-4-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-5-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-3').text()) +
					30 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-4').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-5-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-4').text()) +
					parseInt($('#' + game + '-' + player + '-5').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-5').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-5-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-5-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-4').text()) +
					parseInt($('#' + game + '-' + player + '-5').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-5').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-5').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		} else if (frame == '7') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-5-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-6-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-4').text()) +
					30 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-5').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-6-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-5').text()) +
					parseInt($('#' + game + '-' + player + '-6').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-6').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-6-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-6-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-5').text()) +
					parseInt($('#' + game + '-' + player + '-6').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-6').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-6').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		} else if (frame == '8') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-6-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-7-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-5').text()) +
					30 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-6').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-7-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-6').text()) +
					parseInt($('#' + game + '-' + player + '-7').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-7').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-7-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-7-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-6').text()) +
					parseInt($('#' + game + '-' + player + '-7').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-7').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-7').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		} else if (frame == '9') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-7-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-8-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-6').text()) +
					30 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-7').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-8-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-7').text()) +
					parseInt($('#' + game + '-' + player + '-8').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-8').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-8-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-8-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-7').text()) +
					parseInt($('#' + game + '-' + player + '-8').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-8').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-8').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		} else if (frame == '10') {
			$('#' + game + '-' + player + '-' + frame).attr('points', framePoints.toString());

			//if previous Double
			if (
				$('#' + game + '-' + player + '-8-1').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-9-1').attr('pins') == '1-1-1-1-1'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-7').text()) +
					30 +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-8').text(previousframePoints.toString());
			}
			//if previous a single Strike
			if ($('#' + game + '-' + player + '-9-1').attr('pins') == '1-1-1-1-1') {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-8').text()) +
					parseInt($('#' + game + '-' + player + '-9').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-2').attr('points'));
				$('#' + game + '-' + player + '-9').text(previousframePoints.toString());
			}
			//if previous a spare
			if (
				$('#' + game + '-' + player + '-9-2').attr('pins') == '1-1-1-1-1' &&
				$('#' + game + '-' + player + '-9-2').attr('points') != '0'
			) {
				var previousframePoints =
					parseInt($('#' + game + '-' + player + '-8').text()) +
					parseInt($('#' + game + '-' + player + '-9').attr('points')) +
					parseInt($('#' + game + '-' + player + '-' + frame + '-1').attr('points'));
				$('#' + game + '-' + player + '-9').text(previousframePoints.toString());
			}

			framePoints = parseInt($('#' + game + '-' + player + '-9').text()) + framePoints;
			$('#' + game + '-' + player + '-' + frame).text(framePoints.toString());
			$('#total-' + game + '-' + player).text(framePoints.toString());
		}
	}
});
