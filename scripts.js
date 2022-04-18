function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var r = document.querySelector(':root');

function themeSwitch() {
    // get the current theme
    var currentTheme = window.getComputedStyle(document.documentElement).getPropertyValue('--theme');
    // if the current theme is dark, switch to light
    if (currentTheme == 'dark') {
        r.style.setProperty('--theme', 'light');
        lightTheme();
    }
    // if the current theme is light, switch to dark
    else {
        r.style.setProperty('--theme', 'dark');
        darkTheme();
    }

}

function lightTheme() {
    r.style.setProperty('--1', '#d5d5d5ff');
    r.style.setProperty('--2', '#ffffffff');
    r.style.setProperty('--3', '#757575ff');
    r.style.setProperty('--4', '#b6b6b6ff');
    r.style.setProperty('--5', '#858585ff');
    r.style.setProperty('--6', '#b1b1b1ff');
    r.style.setProperty('--7', '#414141ff');
    r.style.setProperty('--8', '#2f2f2fff');
    r.style.setProperty('--9', '#111111ff');
    r.style.setProperty('--10', '#000000ff');
}
function darkTheme() {
    r.style.setProperty('--1', '#111111ff');
    r.style.setProperty('--2', '#161723ff');
    r.style.setProperty('--3', '#0d0c34ff');
    r.style.setProperty('--4', '#0f0c75ff');
    r.style.setProperty('--5', '#16144fff');
    r.style.setProperty('--6', '#29275aff');
    r.style.setProperty('--7', '#4e4d6fff');
    r.style.setProperty('--8', '#747384ff');
    r.style.setProperty('--9', '#999999ff');
    r.style.setProperty('--10', '#ffffffff');
}

// make the function rickroll
function rickroll() {
	window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}


function changecolor() {
    // Generating random color each time
    var color = "#"+(Math.random()*16777215|0).toString(16);  
    $("#colorchange").css("background-color",color);
}

capitani = new Array;
capitani[0] = "Stefano Ruta"
capitani[1] = "Eva Barbafiera";
capitani[2] = "Marco Cipriani";
capitani[3] = "Filippo Maggiorelli";
capitani[4] = "Lisa Boni";

function autentica() {
    
    var numsquadra = document.getElementById("ns").value;
    var codice = document.getElementById("codice").value;
    var id_verify = verifyID(codice);
    if (id_verify==0) {
        alert("Codice non valido");
    } else {
        if (id_verify==numsquadra) {
            if (numsquadra == 1 || numsquadra == 3 || numsquadra == 4) {
                alert("Benvenuto, "+ capitani[numsquadra-1]);
            } else {
                alert("Benvenuta, "+ capitani[numsquadra-1]);
            }
        } else {
            alert("Codice non valido");
        }
    }
}

function verifyID(id) {
    if (id=="!2cR") {
        return 1;
    } else if (id=="?Ks7") {
        return 2;
    } else if (id==">h4J") {
        return 3;
    } else if (id=="$3fV") {
        return 4;
    } else if (id=="#6Bn") {
        return 5;
    } else {
        return 0;
    }
}