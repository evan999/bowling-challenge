var frames = 10;
var chances = 2;
var balls = 2;
var pins = 10;
var spare = 10;
var ballsFinal = 3;
var result = 0;



function calculateBowlingGame(game){
	for (i = 1; i <= 10; i++)
		for(chances = 2; chances > 0; chances--){
			if(chances == 1 && pins == 0){
				
			}  

			if(chances == 0){							
				result = pinsTotal[i] + result;
			}

			if(chances == 0 && pins == 0){
				
			}
		}

		if(frames == 10){
			chances = 3;

		}
	}
	return total;

}