let arr = [], win_block, again, winning, game;

let comp_sym = "o";
let user_sym = "x";

onload = function () {
    game = document.getElementById("game");
    arr = game.getElementsByClassName("inner");
    win_block = document.getElementById("win_block");
    win_text = win_block.getElementsByClassName("winner")[0];
    again = win_block.getElementsByClassName("again")[0];
    winning = game.getElementsByClassName("winning")[0];

    again.onclick = function () {

        clearTable();
        randomMove();
    };

    for (let i = 0; i < arr.length; i++) {
        arr[i].onclick = function () {
            drawSym(this);
        };


    }
    randomMove();

};

function randomMove() {
    let rnd = getRandomInt(2);
    console.log(rnd);
    if (rnd === 1) {
        autoDrawing();
    }
    return true;
}

function drawSym(item, sym = user_sym) {
    if (item.hasChildNodes()) return false;
    item.innerHTML = sym;

    let winner = checkWinner();

    if (sym === user_sym && !winner)
        autoDrawing();


    if (winner === user_sym) {
        win_text.innerHTML = "You won";
        win_text.style.color = "green";

    } else if (winner === comp_sym) {
        win_text.innerHTML = "Computer won";


    }
    if (winner) {
        winning.style.display = "block";
        win_block.style.display = "block";
    }
    return true;
}

function checkWinner() {
    let winner = "";
    let j = 0;


    let xy_1_1 = arr[0].innerHTML;
    let xy_1_2 = arr[4].innerHTML;
    let xy_1_3 = arr[8].innerHTML;

    let xy_2_1 = arr[2].innerHTML;
    let xy_2_2 = arr[4].innerHTML;
    let xy_2_3 = arr[6].innerHTML;

    if ((xy_1_1 && xy_1_2 && xy_1_3) || (xy_2_1 && xy_2_2 && xy_2_3)) {

        if (xy_1_1 === user_sym && xy_1_2 === user_sym && xy_1_3 === user_sym) {
            winner = user_sym;
        } else if (xy_1_1 === comp_sym && xy_1_2 === comp_sym && xy_1_3 === comp_sym) {
            winner = comp_sym;
        }


        if (xy_2_1 === user_sym && xy_2_2 === user_sym && xy_2_3 === user_sym) {
            winner = user_sym;
        } else if (xy_2_1 === comp_sym && xy_2_2 === comp_sym && xy_2_3 === comp_sym) {
            winner = comp_sym;
        }
    }


    if (!winner) {
        for (let i = 0; i < 3; i++) {


            let a1 = arr[i].innerHTML;
            let a2 = arr[i + 3].innerHTML;
            let a3 = arr[i + 6].innerHTML;

            let b1 = arr[i].innerHTML;
            let b2 = arr[i + 1].innerHTML;
            let b3 = arr[i + 2].innerHTML;




            if (a1 === user_sym && a2 === user_sym && a3 === user_sym) {
                winner = user_sym;
                break;
            } else if (a1 === comp_sym && a2 === comp_sym && a3 === comp_sym) {
                winner = comp_sym;
                break;
            }


            if (i !== 0) j = 3 * i;

            b1 = arr[j].innerHTML;
            b2 = arr[j + 1].innerHTML;
            b3 = arr[j + 2].innerHTML;

            if (b1 === user_sym && b2 === user_sym && b3 === user_sym) {
                winner = user_sym;
                break;
            } else if (b1 === comp_sym && b2 === comp_sym && b3 === comp_sym) {
                winner = comp_sym;
                break;
            }
            if (winner)
                break;
        }
    }

    return winner;
}

function autoDrawing() {

    if (!ckeckFreeSpace()) {

        win_text.innerHTML = "Draw ";
        win_text.style.color = "blue";
        winning.style.display = "block";
        win_block.style.display = "block";

        return false;
    }
    let el, rnd;

    do {
        rnd = getRandomInt(arr.length);
        el = arr[rnd];

    } while (!drawSym(el, comp_sym));

    if (!ckeckFreeSpace()) {
        autoDrawing();
    }
}

function clearTable() {
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = "";
    }
}

function ckeckFreeSpace() {
    let res = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasChildNodes()) {
            res = false;
        } else {
            res = true;
            break;
        }
    }

    return res;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


