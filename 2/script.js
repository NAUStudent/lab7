


function clear() {
    document.querySelector('#drum').classList.remove('active');
}
function clear1() {
    document.querySelector('#clap').classList.remove('active');
}
function clear2() {
    document.querySelector('#guitar').classList.remove('active');
}
function clear3() {
    document.querySelector('#piano').classList.remove('active');
}
function clear4() {
    document.querySelector('#xylophone').classList.remove('active');
}

document.addEventListener("keypress", function (event) {
    switch (event.key) {
        case "q":
            if (event.key === "q") {
                let audio = new Audio("audio/drum.mp3");
                audio.play();
                document.querySelector('#drum').classList.add('active');
                setTimeout(clear, 2000);
            }
            break;
        case "w":
            if (event.key === "w") {
                let audio = new Audio("audio/clap.mp3");
                audio.play();
                document.querySelector('#clap').classList.add('active');
                setTimeout(clear1, 2000);

            }
            break;
        case "e":
            if (event.key === "e") {
                let audio = new Audio("audio/guitar.mp3");
                audio.play();
                document.querySelector('#guitar').classList.add('active');
                setTimeout(clear2, 2000);

            }
            break;
        case "r":
            if (event.key === "r") {
                let audio = new Audio("audio/piano.mp3");
                audio.play();
                document.querySelector('#piano').classList.add('active');
                setTimeout(clear3, 2000);

            }
            break;
        case "t":
            if (event.key === "t") {
                let audio = new Audio("audio/xylophone.mp3");
                audio.play();
                document.querySelector('#xylophone').classList.add('active');
                setTimeout(clear4, 2000);

            }
            break;

    }
});