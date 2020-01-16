let player1 = "X";
let player2 = "O";

let currentTurn = 1;
let movesMade = 0;

let squares = document.querySelectorAll('.cell');

let sqr = $(".cell");
let winnerContainer = $(".winner");
let reset = $(".reset");

sqr.on('click', function (e) {
    movesMade++;
    if (currentTurn === 1) {
        event.target.innerHTML = player1;
        event.target.style.color = "blue";
        currentTurn++;
    } else {
        event.target.innerHTML = player2;
        event.target.style.color = "red";
        currentTurn--;
    }
    if (checkForWinner()) {
        theWinner = currentTurn === 1 ? player2 : player1;
        // this is a ternary statement, it is the short-hand equivalent to a if(?), else(:) statement
        declareWinner(theWinner);
    }
});

function declareWinner(winner) {
    winnerContainer.css('display', 'block');
    reset.css('display', 'block');
    winner = winner === player1 ? 'Player 1' : 'Player 2';
    winnerContainer.html(winner + 'Wins!');
}

reset.on('click', function (e) {
    let moves = Array.prototype.slice.call($('.cell'));
    moves.map((m) => {
        m.innerHTML = "";
    });
    winnerContainer.html("");
    winnerContainer.css('display', 'none');
    currentTurn = 1;
    movesMade = 0;
});

function checkForWinner() {
    if (movesMade > 4) {
        var moves = Array.prototype.slice.call($(".cell"))
        var results = moves.map(function (cell) {
            return cell.innerHTML;
        });

        let winCombos = [
            [squares[0], squares[1], squares[2]],
            [squares[3], squares[4], squares[5]],
            [squares[6], squares[7], squares[8]],
            [squares[0], squares[3], squares[6]],
            [squares[1], squares[4], squares[7]],
            [squares[2], squares[5], squares[8]],
            [squares[0], squares[4], squares[8]],
            [squares[2], squares[4], squares[6]]
        ]

        return winCombos.find(function (combo) {
            console.log('this is the result', results)
            if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                // results[combo[0]] !== "" just means that it is verifying that the cell is not empty.
                return true;
            } else {
                return false;
            };
        });
    }
}