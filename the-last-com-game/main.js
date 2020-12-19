// Created by BOGOAT GAMES

function GetButtons(amount, currentReality) {
    for (i = 1; i <= amount; i++) {
        var newReality = GetReality(currentReality, i);
        var buttonName = newReality;
        if (newReality == '2212' && currentReality == '2212') {
            buttonName = "2212-alt";
        }
        document.getElementById("buttonsArea").innerHTML += "<img onclick='EnterReality(\"" + newReality + "\");' src='assets/buttons/" + buttonName + ".png' alt='" + newReality + "'>";
    }
}

function BackButton(currentReality) {
    var previousReality = '0';
    switch (currentReality) {
        case '69': previousReality = '2212';
        break;
        default: previousReality = currentReality.slice(0, -1);
        break;
    }
    document.getElementById("buttonsArea").innerHTML = "<img onclick='EnterReality(\"" + previousReality + "\");' src='assets/buttons/back.png' alt='back'>";
}

function GetReality(currentReality, pathToNewReality) {
    pathToNewReality = pathToNewReality.toString();
    switch (currentReality) {
        case '0': return pathToNewReality;
        case '2212': switch (pathToNewReality) {
            case '1': return '0';
            case '2': return '2212';
            case '3': return '69';
            case '4': return '420';
        }
        default: return currentReality + pathToNewReality;
    }
}

function EnterReality(reality) {
    document.getElementById("videoArea").innerHTML = "<video id='gameVid' width='854' height='480' type='video/mp4' src='assets/videos/" + reality + ".mp4' autoplay muted></video>";
    document.getElementById("buttonsArea").innerHTML = "";
    window.setTimeout(EnterRealityPart2, 1700, reality);
}

function EnterRealityPart2(reality) {
    vidlength = document.getElementById("gameVid").duration;
    vidlength = Math.floor(vidlength) * 1000;
    window.setTimeout(SetupButtons, vidlength, reality);
}

function SetupButtons(reality) {
    var backButton = false;
    var winButton = false;
    var amount = 0;
    switch (reality) {
        case '0': amount = 3;
        break;
        case '2': amount = 2;
        break;
        case '21': backButton = true;
        break;
        case '22': amount = 2;
        break;
        case '222': backButton = true;
        break;
        case '221': amount = 2;
        break;
        case '2211': winButton = true;
        break;
        case '2212': amount = 4;
        break;
        case '420': amount = 1;
        break;
        case '4201': winButton = true;
        break;
        case '69': backButton = true;
        break;
        case '1': amount = 3;
        break;
        case '11': backButton = true;
        break;
        case '13': backButton = true;
        break;
        case '12': amount = 2;
        break;
        case '121': winButton = true;
        break;
        case '122': backButton = true;
        break;
        case '3': amount = 2;
        break;
        case '31': backButton = true;
        break;
        case '32': amount = 2;
        break;
        case '321': backButton = true;
        break;
        case '322': winButton = true;
        break;
    }
    if (winButton) {
        document.getElementById("buttonsArea").innerHTML = "<img onclick='EnterReality(\"0\");' src='assets/buttons/back.png' alt='backtostart'>";
    }
    else if (backButton) {
        BackButton(reality);
    } else {
        GetButtons(amount, reality);
    }
}
