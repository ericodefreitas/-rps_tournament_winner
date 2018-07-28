const rock = "R";
const paper = "P";
const scissors = "S";

var final = [];

var players = [
        [
          [
            [ "Armando", "P" ],
            [ "Dave", "S" ]
          ],
          [
            [ "Richard", "R" ],
            [ "Michael", "S" ]
          ]
        ],
        
        [
          [
            [ "Allen", "S" ],
            [ "Omer", "P" ]
          ],
          [
            [ "David E.", "R" ],
            [ "Richard X.", "P" ]
          ]
        ]
      ];

function  rps_tournament_winner(data) {
    
    for(var i in data){

        if (data[i].includes(rock) || data[i].includes(paper) || data[i].includes(scissors))
        {
            return getWinner(data);
        }
        else
            data[i] = rps_tournament_winner(data[i]);
    }
    
    if (data[i])
        final.push(getWinner(data));
    else
        alert("The winner is: " + getWinner(final)[0]);
};

function getWinner (data) {
    
    var player1 = data[0];
    var player2 = data[1];

    switch(player1[1]) {
        case rock:
            if (player2[1] == scissors)
                return data = player1;
            else
                return data = player2;

        case paper:
            if (player2[1] == rock)
                return data = player1;
            else
                return data = player2;

        case scissors:
            if (player2[1] == paper)
                return data = player1;
            else
                return data = player2;
    }
}

var champion =  rps_tournament_winner(players);