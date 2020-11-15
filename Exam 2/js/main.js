let score = 0;

function opnRls() {
    let box = document.getElementById("bxRls");
    box.style.visibility = "visible"
}

function clsRls() {
    let box = document.getElementById("bxRls");
    box.style.visibility = "hidden"
}

function plyAgn() {
    let box1 = document.getElementById("opcs");
    let box2 = document.getElementById("boxPck");
    let mnSz = document.getElementById("mnSz");
    let boxRes = document.getElementById("boxRes");
    let hsePck = document.getElementById("hsePck");
    let hseImg = document.getElementById("hseImg");

    hsePck.style.display = "none";
    hseImg.style.display = "none";
    boxRes.style.display = "none";
    box1.style.display = "block";
    box2.style.display = "none";
    mnSz.style.width = "700px";
}

function youPckd(opc) {
    let box1 = document.getElementById("opcs");
    let box2 = document.getElementById("boxPck");
    box1.style.display = "none"
    box2.style.display = "block"


    let imgPck = document.getElementById("imgPck");
    let imgImg = document.getElementById("imgImg");

    switch (opc) {
        case (1):
            imgPck.style.borderColor = " hsl(40, 84%, 53%)";
            imgPck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(39, 92%, 33%)";
            imgImg.src = "images/icon-scissors.svg ";
            break;
        case (2):
            imgPck.style.borderColor = " hsl(230, 89%, 65%)";
            imgPck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(230, 61%, 46%)";
            imgImg.src = "images/icon-paper.svg ";
            break;
        case (3):
            imgPck.style.borderColor = " hsl(349, 70%, 56%)";
            imgPck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(349, 72%, 37%)";
            imgImg.src = "images/icon-rock.svg";
            break;
        case (4):
            imgPck.style.borderColor = " hsl(261, 72%, 63%)";
            imgPck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(261, 48%, 47%)";
            imgImg.src = "images/icon-lizard.svg";
            break;
        case (5):
            imgPck.style.borderColor = " hsl(189, 58%, 57%)";
            imgPck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(189, 53%, 40%)";
            imgImg.src = "images/icon-spock.svg";
            break;
    }

    let hse = Math.floor(Math.random() * 5) + 1;

    setTimeout(function() {
        let hsePck = document.getElementById("hsePck");
        let hseImg = document.getElementById("hseImg");
        let hseWait = document.getElementById("hseWait");
        hsePck.style.display = "block";
        hseImg.style.display = "block";
        hsePck.style.paddingLeft = "70px";
        hseWait.style.display = "none";

        switch (hse) {
            case (1):
                hsePck.style.borderColor = " hsl(40, 84%, 53%)";
                hsePck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(39, 92%, 33%)";
                hseImg.src = "images/icon-scissors.svg ";
                break;
            case (2):
                hsePck.style.borderColor = " hsl(230, 89%, 65%)";
                hsePck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(230, 61%, 46%)";
                hseImg.src = "images/icon-paper.svg ";
                break;
            case (3):
                hsePck.style.borderColor = " hsl(349, 70%, 56%)";
                hsePck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(349, 72%, 37%)";
                hseImg.src = "images/icon-rock.svg";
                break;
            case (4):
                hsePck.style.borderColor = " hsl(261, 72%, 63%)";
                hsePck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(261, 48%, 47%)";
                hseImg.src = "images/icon-lizard.svg";
                break;
            case (5):
                hsePck.style.borderColor = " hsl(189, 58%, 57%)";
                hsePck.style.boxShadow = "inset 0px 12px 0px 0px rgba(0, 0, 0, 0.1), 0px 12px 0px 0px hsl(189, 53%, 40%)";
                hseImg.src = "images/icon-spock.svg";
                break;
        }


    }, 1000, hse);


    setTimeout(function() {
        let res;
        let win = 1;
        switch (opc) {
            case (1):
                switch (hse) {
                    case (1):
                        res = "TIE";
                        win = 0;
                        break;
                    case (2):
                        res = "YOU WIN";
                        break;
                    case (3):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (4):
                        res = "YOU WIN";
                        break;
                    case (5):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                }
                break;
            case (2):
                switch (hse) {
                    case (1):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (2):
                        res = "TIE";
                        win = 0;
                        break;
                    case (3):
                        res = "YOU WIN";
                        break;
                    case (4):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (5):
                        res = "YOU WIN";
                        break;
                }
                break;
            case (3):
                switch (hse) {
                    case (1):
                        res = "YOU WIN";
                        break;
                    case (2):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (3):
                        res = "TIE";
                        win = 0;
                        break;
                    case (4):
                        res = "YOU WIN";
                        break;
                    case (5):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                }
                break;
            case (4):
                switch (hse) {
                    case (1):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (2):
                        res = "YOU WIN";
                        break;
                    case (3):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (4):
                        res = "TIE";
                        win = 0;
                        break;
                    case (5):
                        res = "YOU WIN";
                        break;
                }
                break;
            case (5):
                switch (hse) {
                    case (1):
                        res = "YOU WIN";
                        break;
                    case (2):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (3):
                        res = "YOU WIN";
                        break;
                    case (4):
                        res = "YOU LOSE";
                        win = -1;
                        break;
                    case (5):
                        res = "TIE";
                        win = 0;
                        break;
                }
                break;
        }

        let txtRes = document.getElementById("txtRes").innerHTML = res;
        let mnSz = document.getElementById("mnSz");
        let boxRes = document.getElementById("boxRes");
        boxRes.style.display = "block";
        mnSz.style.width = "1366px";

        score += win;

        let txtScr = document.getElementById("txtScr").innerHTML = score;
    }, 2000, hse);


}