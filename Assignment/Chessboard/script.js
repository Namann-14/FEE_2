let chessBoard = document.querySelector('.chessBoard');
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let box = document.createElement('button');
        if ((i + j) % 2 === 0) {
            box.style.backgroundColor = '#eeeed2';
        } else {
            box.style.backgroundColor = '#769656';
        }
        chessBoard.appendChild(box);
    }
}