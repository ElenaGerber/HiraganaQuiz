const unicodeHiragana = [12354, 12356, 12358, 12360, 12362, 12363, 12364, 12365, 12366, 12367, 12368, 12369, 12370, 12371, 12372, 12373, 12374, 12375, 12376, 12377, 12378, 12379, 12380, 12381, 12382, 12383, 12384, 12385, 12386, 12388, 12389, 12390, 12391, 12392, 12393, 12394, 12395, 12396, 12397, 12398, 12399, 12400, 12401, 12402, 12403, 12404, 12405, 12406, 12407, 12408, 12409, 12410, 12411, 12412, 12413, 12414, 12415, 12416, 12417, 12418, 12420, 12422, 12424, 12425, 12426, 12427, 12428, 12429, 12431, 12432, 12433, 12434, 12435, 12436]
const answerHiragana = ["A", "I", "U", "E", "O", "KA", "GA", "KI", "GI", "KU", "GU", "KE", "GE", "KO", "GO", "SA", "ZA", "SHI", "ZI", "SU", "ZU", "SE", "ZE", "SO", "ZO", "TA", "DA", "CHI", "DI", "TSU", "DU", "TE", "DE", "TO", "DO", "NA", "NI", "NU", "NE", "NO", "HA", "BA", "PA", "HI", "BI", "PI", "HU", "BU", "PU", "HE", "BE", "PE", "HO", "BO", "PO", "MA", "MI", "MU", "ME", "MO", "YA", "YU", "YO", "RA", "RI", "RU", "RE", "RO", "WA", "WI", "WE", "WO", "N", "VU"]

let bigSymbol = document.getElementById("bigSymbol");
let result = document.getElementById("result");
let randomNumber = 1;


function getHiragana() {
    randomNumber = Math.floor(Math.random() * (unicodeHiragana.length - 1));
    bigSymbol.innerText = String.fromCharCode(unicodeHiragana[randomNumber]);
    bigSymbol.style.color = "black";
    result.innerText = " ";
}

function nextHiragana() {
    result.innerText = " ";
    getHiragana();
}

function checkHiragana(event) {
    if (event.keyCode == 13) {
        check();
    }
}

function check() {
    let answer = document.getElementById('answer').value;
    if (answer.toUpperCase() == answerHiragana[randomNumber]) {
        bigSymbol.style.color = "green";
        document.getElementById('answer').value = "";
        setTimeout(getHiragana, 500);
    }
    else {
        bigSymbol.style.color = "red";
        result.innerText = "Right answer: " + answerHiragana[randomNumber];
        document.getElementById('answer').value = "";
        setTimeout(getHiragana, 1500);
    }
}

getHiragana();

