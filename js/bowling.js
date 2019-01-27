$(document).ready(function() {
	var selectedFrameID;

	$('#Oneplayer1NameInput').val(localStorage.playerNameInput1);
	$('#Twoplayer1NameInput').val(localStorage.playerNameInput1);
	$('#Threeplayer1NameInput').val(localStorage.playerNameInput1);
	$('#Fourplayer1NameInput').val(localStorage.playerNameInput1);
	$('#Fiveplayer1NameInput').val(localStorage.playerNameInput1);

	$('#Oneplayer2NameInput').val(localStorage.playerNameInput2);
	$('#Twoplayer2NameInput').val(localStorage.playerNameInput2);
	$('#Threeplayer2NameInput').val(localStorage.playerNameInput2);
	$('#Fourplayer2NameInput').val(localStorage.playerNameInput2);
	$('#Fiveplayer2NameInput').val(localStorage.playerNameInput2);

	$('#Oneplayer3NameInput').val(localStorage.playerNameInput3);
	$('#Twoplayer3NameInput').val(localStorage.playerNameInput3);
	$('#Threeplayer3NameInput').val(localStorage.playerNameInput3);
	$('#Fourplayer3NameInput').val(localStorage.playerNameInput3);
	$('#Fiveplayer3NameInput').val(localStorage.playerNameInput3);

	//on refresh get how many palyers and games setup when not full shift refresh
	changeInNumPlayersOrGames();

	//$('#playerNameInput2').val(localStorage.playerNameInput2);
	//$('#playerNameInput3').val(localStorage.playerNameInput3);
	//$('#playerNameInput4').val(localStorage.playerNameInput4);
	//$('#playerNameInput5').val(localStorage.playerNameInput5);
	//$('#playerNameInput6').val(localStorage.playerNameInput6);

	/*$('#1-1-1-1').attr('pins', localStorage['bsc-1-1-1-1']);
	selectedFrameID = '1-1-1-1';
	var currentPinsDown = $('#' + selectedFrameID).attr('pins').split('-');

	var pin1 = currentPinsDown[0];
	var pin2 = currentPinsDown[1];
	var pin3 = currentPinsDown[2];
	var pin4 = currentPinsDown[3];
	var pin5 = currentPinsDown[4];
	//if Pin1 is down, then call below
	if (pin1 == '1') {
		selectedPin(0, 2);
	}
	if (pin2 == '1') {
		selectedPin(1, 3);
	}
	if (pin3 == '1') {
		selectedPin(2, 5);
	}
	if (pin4 == '1') {
		selectedPin(3, 3);
	}
	if (pin5 == '1') {
		selectedPin(4, 2);
	}*/

	//Remember Players Name
	$('#Oneplayer1NameInput').on('change', function() {
		//localStorage.playerNameInput1 = $(this).val();
	});
	$('#Oneplayer2NameInput').on('change', function() {
		//localStorage.playerNameInput2 = $(this).val();
	});
	$('#Oneplayer3NameInput').on('change', function() {
		//localStorage.playerNameInput3 = $(this).val();
	});
	/*$('#playerNameInput4').on('change', function() {
		localStorage.playerNameInput4 = $(this).val();
	});
	$('#playerNameInput5').on('change', function() {
		localStorage.playerNameInput5 = $(this).val();
	});
	$('#playerNameInput6').on('change', function() {
		localStorage.playerNameInput6 = $(this).val();
	});*/

	//If of number of games or number of players need to call same functions to below
	//so proper game selected and number of players is only shown and rest is hidden

	function changeInNumPlayersOrGames() {
		let numOfGames = $('#numOfGames').val();
		let numOfPlayers = $('#numOfPlayers').val();
		if (numOfGames === '1') {
			if (numOfPlayers === '1') {
				$('#Oneplayer1Table').removeClass('hidden');
				$('#Oneplayer2Table').addClass('hidden');
				$('#Oneplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '2') {
				$('#Oneplayer1Table').removeClass('hidden');
				$('#Oneplayer2Table').removeClass('hidden');
				$('#Oneplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '3') {
				$('#Oneplayer1Table').removeClass('hidden');
				$('#Oneplayer2Table').removeClass('hidden');
				$('#Oneplayer3Table').removeClass('hidden');
			}
			$('#Twoplayer1Table').addClass('hidden');
			$('#Twoplayer2Table').addClass('hidden');
			$('#Twoplayer3Table').addClass('hidden');
			$('#Threeplayer1Table').addClass('hidden');
			$('#Threeplayer2Table').addClass('hidden');
			$('#Threeplayer3Table').addClass('hidden');
			$('#Fourplayer1Table').addClass('hidden');
			$('#Fourplayer2Table').addClass('hidden');
			$('#Fourplayer3Table').addClass('hidden');
			$('#Fiveplayer1Table').addClass('hidden');
			$('#Fiveplayer2Table').addClass('hidden');
			$('#Fiveplayer3Table').addClass('hidden');
			calculateTeamPinfall('1');
		}
		if (numOfGames === '2') {
			if (numOfPlayers === '1') {
				$('#Twoplayer1Table').removeClass('hidden');
				$('#Twoplayer2Table').addClass('hidden');
				$('#Twoplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '2') {
				$('#Twoplayer1Table').removeClass('hidden');
				$('#Twoplayer2Table').removeClass('hidden');
				$('#Twoplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '3') {
				$('#Twoplayer1Table').removeClass('hidden');
				$('#Twoplayer2Table').removeClass('hidden');
				$('#Twoplayer3Table').removeClass('hidden');
			}
			$('#Oneplayer1Table').addClass('hidden');
			$('#Oneplayer2Table').addClass('hidden');
			$('#Oneplayer3Table').addClass('hidden');
			$('#Threeplayer1Table').addClass('hidden');
			$('#Threeplayer2Table').addClass('hidden');
			$('#Threeplayer3Table').addClass('hidden');
			$('#Fourplayer1Table').addClass('hidden');
			$('#Fourplayer2Table').addClass('hidden');
			$('#Fourplayer3Table').addClass('hidden');
			$('#Fiveplayer1Table').addClass('hidden');
			$('#Fiveplayer2Table').addClass('hidden');
			$('#Fiveplayer3Table').addClass('hidden');
			calculateTeamPinfall('2');
		}
		if (numOfGames === '3') {
			if (numOfPlayers === '1') {
				$('#Threeplayer1Table').removeClass('hidden');
				$('#Threeplayer2Table').addClass('hidden');
				$('#Threeplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '2') {
				$('#Threeplayer1Table').removeClass('hidden');
				$('#Threeplayer2Table').removeClass('hidden');
				$('#Threeplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '3') {
				$('#Threeplayer1Table').removeClass('hidden');
				$('#Threeplayer2Table').removeClass('hidden');
				$('#Threeplayer3Table').removeClass('hidden');
			}
			$('#Oneplayer1Table').addClass('hidden');
			$('#Oneplayer2Table').addClass('hidden');
			$('#Oneplayer3Table').addClass('hidden');
			$('#Twoplayer1Table').addClass('hidden');
			$('#Twoplayer2Table').addClass('hidden');
			$('#Twoplayer3Table').addClass('hidden');
			$('#Fourplayer1Table').addClass('hidden');
			$('#Fourplayer2Table').addClass('hidden');
			$('#Fourplayer3Table').addClass('hidden');
			$('#Fiveplayer1Table').addClass('hidden');
			$('#Fiveplayer2Table').addClass('hidden');
			$('#Fiveplayer3Table').addClass('hidden');
			calculateTeamPinfall('3');
		}
		if (numOfGames === '4') {
			if (numOfPlayers === '1') {
				$('#Fourplayer1Table').removeClass('hidden');
				$('#Fourplayer2Table').addClass('hidden');
				$('#Fourplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '2') {
				$('#Fourplayer1Table').removeClass('hidden');
				$('#Fourplayer2Table').removeClass('hidden');
				$('#Fourplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '3') {
				$('#Fourplayer1Table').removeClass('hidden');
				$('#Fourplayer2Table').removeClass('hidden');
				$('#Fourplayer3Table').removeClass('hidden');
			}
			$('#Oneplayer1Table').addClass('hidden');
			$('#Oneplayer2Table').addClass('hidden');
			$('#Oneplayer3Table').addClass('hidden');
			$('#Twoplayer1Table').addClass('hidden');
			$('#Twoplayer2Table').addClass('hidden');
			$('#Twoplayer3Table').addClass('hidden');
			$('#Threeplayer1Table').addClass('hidden');
			$('#Threeplayer2Table').addClass('hidden');
			$('#Threeplayer3Table').addClass('hidden');
			$('#Fiveplayer1Table').addClass('hidden');
			$('#Fiveplayer2Table').addClass('hidden');
			$('#Fiveplayer3Table').addClass('hidden');
			calculateTeamPinfall('4');
		}
		if (numOfGames === '5') {
			if (numOfPlayers === '1') {
				$('#Fiveplayer1Table').removeClass('hidden');
				$('#Fiveplayer2Table').addClass('hidden');
				$('#Fiveplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '2') {
				$('#Fiveplayer1Table').removeClass('hidden');
				$('#Fiveplayer2Table').removeClass('hidden');
				$('#Fiveplayer3Table').addClass('hidden');
			}
			if (numOfPlayers === '3') {
				$('#Fiveplayer1Table').removeClass('hidden');
				$('#Fiveplayer2Table').removeClass('hidden');
				$('#Fiveplayer3Table').removeClass('hidden');
			}
			$('#Oneplayer1Table').addClass('hidden');
			$('#Oneplayer2Table').addClass('hidden');
			$('#Oneplayer3Table').addClass('hidden');
			$('#Twoplayer1Table').addClass('hidden');
			$('#Twoplayer2Table').addClass('hidden');
			$('#Twoplayer3Table').addClass('hidden');
			$('#Threeplayer1Table').addClass('hidden');
			$('#Threeplayer2Table').addClass('hidden');
			$('#Threeplayer3Table').addClass('hidden');
			$('#Fourplayer1Table').addClass('hidden');
			$('#Fourplayer2Table').addClass('hidden');
			$('#Fourplayer3Table').addClass('hidden');
			calculateTeamPinfall('5');
		}
	}

	$('#numOfGames').on('change', function() {
		changeInNumPlayersOrGames();
	});

	$('#numOfPlayers').on('change', function() {
		changeInNumPlayersOrGames();
	});

	$('.totalscorebox').on('click', function() {
		$('td').removeClass('active');
		$('#result').html('');
		selectedFrameID = null;
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

		setPinDeckOnSelection(selectedFrameID);
	});
	$('.ballFrame').on('click', function() {
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

		setPinDeckOnSelection(selectedFrameID);
	});

	//Listens to click on pin on the pin deck
	$('#pin1').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(0, 2, selectedFrameID);
	});
	$('#pin2').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(1, 3, selectedFrameID);
	});
	$('#pin3').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(2, 5, selectedFrameID);
	});
	$('#pin4').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(3, 3, selectedFrameID);
	});
	$('#pin5').on('click', function() {
		$(this).toggleClass('pinDown');
		selectedPin(4, 2, selectedFrameID);
	});

	//Mark a selected Pin action to add points and UI
	function selectedPin(pinNumber, pinValue, ballFrameID) {
		var currentSelectedItem = ballFrameID.split('-');
		var game = currentSelectedItem[0];
		var player = currentSelectedItem[1];
		var frame = currentSelectedItem[2];
		var ball = currentSelectedItem[3];

		var currentPinsDown = $('#' + ballFrameID).attr('pins').split('-');

		//If the pin was up then went down then add pin value
		if (currentPinsDown[pinNumber] == '0') {
			currentPinsDown[pinNumber] = '1';
			pinCount = pinValue;
		} else {
			//If the pin was down then revert to up then subtract pin value
			currentPinsDown[pinNumber] = '0';
			pinCount = -pinValue;
		}

		var pin1 = currentPinsDown[0];
		var pin2 = currentPinsDown[1];
		var pin3 = currentPinsDown[2];
		var pin4 = currentPinsDown[3];
		var pin5 = currentPinsDown[4];

		//Have separate function to add points based on ballFrameID
		//Have spearate function on add display to UI based on ballFrameID

		//Store value to localStorage
		localStorage['bsc-' + game + '-' + player + '-' + frame + '-' + ball] =
			pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5;

		var currentPoints = $('#' + selectedFrameID).attr('points');
		var newPoints = parseInt(currentPoints) + pinCount;
		$('#' + selectedFrameID).attr('points', newPoints);

		if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-1' && ball == '1') {
			$('#' + selectedFrameID).text('X');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-1-0' && ball == '1') {
			$('#' + selectedFrameID).text('R');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '0-1-1-1-1' && ball == '1') {
			$('#' + selectedFrameID).text('L');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '0-1-1-1-0' && ball == '1') {
			$('#' + selectedFrameID).text('A');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '1-1-1-0-0' && ball == '1') {
			$('#' + selectedFrameID).text('C');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '0-0-1-1-1' && ball == '1') {
			$('#' + selectedFrameID).text('C');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '0-0-1-0-0' && ball == '1') {
			$('#' + selectedFrameID).text('H');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '0-0-1-1-0' && ball == '1') {
			$('#' + selectedFrameID).text('S');
		} else if (pin1 + '-' + pin2 + '-' + pin3 + '-' + pin4 + '-' + pin5 == '0-1-1-0-0' && ball == '1') {
			$('#' + selectedFrameID).text('S');
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

		onChangeCalculateAllFrameTotals(selectedFrameID);
	}

	//Sets the PinDeck Selection on the UI
	function setPinDeckOnSelection(ballFrameID) {
		//Get pins down from Current and set correctly
		var currentPinsDown = $('#' + ballFrameID).attr('pins').split('-');
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

	function onChangeCalculateAllFrameTotals(ballFrameID) {
		var currentSelectedItem = ballFrameID.split('-');
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
		/*var teamPinfall = 0;
		if ($('#total-' + game + '-1').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-1').text(), 10);
		}
		if ($('#total-' + game + '-2').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-2').text(), 10);
		}
		if ($('#total-' + game + '-3').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-3').text(), 10);
		}
		if ($('#total-' + game + '-4').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-4').text(), 10);
		}
		if ($('#total-' + game + '-5').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-5').text(), 10);
		}
		if ($('#total-' + game + '-6').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-6').text(), 10);
		}
		$('#teamPinfall').text(teamPinfall.toString());*/
		calculateTeamPinfall(game);
	}

	function calculateTeamPinfall(game) {
		var teamPinfall = 0;
		if ($('#total-' + game + '-1').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-1').text(), 10);
		}
		if ($('#total-' + game + '-2').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-2').text(), 10);
		}
		if ($('#total-' + game + '-3').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-3').text(), 10);
		}
		if ($('#total-' + game + '-4').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-4').text(), 10);
		}
		if ($('#total-' + game + '-5').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-5').text(), 10);
		}
		if ($('#total-' + game + '-6').text() != '') {
			teamPinfall += parseInt($('#total-' + game + '-6').text(), 10);
		}
		$('#teamPinfall').text(teamPinfall.toString());
	}
});
