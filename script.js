const board   = document.querySelector('.board');
const button  = document.querySelector('button');


const createBoard  = (array) => { //fills .board with li's and assigns them id's to match position in array
    let i = 0;

    array.forEach(() => {
        const li = document.createElement('li');
        // li.textContent = i;
        li.id = `data-${i}`;
        board.appendChild(li);
        i++;
    })
    
};



const gameTieCheck = () => { //if game.turn === 9 returns true and resets to 0
    if (game.turn === 9 ) {
        console.log('gameTieCheck ended GAME')
        // game.turn = 1;
        return true;
    }
};

const emptyCheck   = (currentValue) => { //returns true if it is empty, false if it isnt
    if (currentValue != '' ) {
        console.log(`An ${currentValue} is already here sir.`);
        return false;
    } else {
        return true;
    }
};

const checkWin     = () => {
    if (squares[0].textContent == 'X' && squares[1].textContent == 'X' && squares[2].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[0].textContent == 'X' && squares[3].textContent == 'X' && squares[6].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[0].textContent == 'X' && squares[4].textContent == 'X' && squares[8].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[2].textContent == 'X' && squares[4].textContent == 'X' && squares[6].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[3].textContent == 'X' && squares[4].textContent == 'X' && squares[5].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[6].textContent == 'X' && squares[7].textContent == 'X' && squares[8].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[1].textContent == 'X' && squares[4].textContent == 'X' && squares[7].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[2].textContent == 'X' && squares[5].textContent == 'X' && squares[8].textContent == 'X') {
        console.log('X Wins');
        return true;
    } else if (squares[0].textContent == 'O' && squares[1].textContent == 'O' && squares[2].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else if (squares[0].textContent == 'O' && squares[3].textContent == 'O' && squares[6].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else if (squares[0].textContent == 'O' && squares[4].textContent == 'O' && squares[8].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else if (squares[2].textContent == 'O' && squares[4].textContent == 'O' && squares[6].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else if (squares[3].textContent == 'O' && squares[4].textContent == 'O' && squares[5].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else if (squares[6].textContent == 'O' && squares[7].textContent == 'O' && squares[8].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else if (squares[1].textContent == 'O' && squares[4].textContent == 'O' && squares[7].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else if (squares[2].textContent == 'O' && squares[5].textContent == 'O' && squares[8].textContent == 'O') {
        console.log('O Wins');
        return true;
    } else {
        return false;
    } 
    
};

const gameBoard    = (() => {
    let board = ['', '', '', '', '', '', '', '', '']

   createBoard(board);




    return {board};
})();

const squares = [...document.querySelectorAll('li')];

const player       = (() => { //makes players X & O
    const players = (marker) => {
        return {marker};
    }
    const X = players('X');
    const O = players('O');

    return {X, O};
})();




const game = (() => {
    let turn = 1;
    
    const getMarker = () => { //odd turn = x, even is = o
        let marker; 
        if (game.turn === 1 || game.turn === 3 || game.turn === 5 || game.turn === 7 || game.turn === 9) {
            marker = 'X';
            return(marker);
        } else if (game.turn === 2 || game.turn === 4 || game.turn === 6 || game.turn === 8) {
            marker = 'O';
            return(marker);
        }    
        
    };

    board.addEventListener('click', (e) => {
        if (checkWin(squares) === true) {
            return;
        } else if (checkWin(squares) === false) {
            if (gameTieCheck() === true) { //ends game if return true (@ turn 9) 
                e.target.textContent = game.getMarker();
                console.log(game.turn);
                return;
            };
    
            if (emptyCheck(e.target.textContent) === false ) { // ends event listener if the square is not empty
                return;
            } else if (emptyCheck(e.target.textContent === true)) {
                console.log(game.turn);
                e.target.textContent = game.getMarker();
                game.turn++;
            }
        }
        
    })
   
    return {getMarker, turn};
})();

button.addEventListener('click', (e) => { //reset button
   const squares = [...board.childNodes];
   squares.forEach((square) => {
       square.textContent = "";
       
   })
   game.turn = 1;
})




