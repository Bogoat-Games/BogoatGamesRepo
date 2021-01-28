function GetButtons(amount, currentReality) {
    for (i = 1; i <= amount; i++) {
        var newReality = GetReality(currentReality, i);
        var buttonName = currentReality + i.toString();
        document.getElementById("buttonsArea").innerHTML += "<img onclick='EnterReality(\"" + newReality + "\");' src='assets/buttons/" + buttonName + ".png' alt='" + newReality + "'>";
    }
    if (currentReality == '113' || currentReality == '1131' || currentReality == '222' || currentReality == '2222' || currentReality == '22221') {
        document.getElementById("videoArea").innerHTML = "<video id='gameVid' onended='EnterReality(\"" + GetReality(currentReality, amount+1) + "\");' width='854' height='480' type='video/mp4' src='assets/videos/" + currentReality + "_timed.mp4' autoplay muted></video>";
    }
}

function BackButton(currentReality) {
    var previousReality = currentReality.slice(0, -1);
    document.getElementById("buttonsArea").innerHTML = "<img onclick='EnterReality(\"" + previousReality + "\");' src='assets/buttons/back.png' alt='back'>";
}

function GetReality(currentReality, pathToNewReality) {
    pathToNewReality = pathToNewReality.toString();
    switch (currentReality) {
        case '0': return pathToNewReality;
        case '21': return '211';
        case '1213': if (pathToNewReality == '1') {
            return '1211';
        }
        return '1212';
        case '21113': if (pathToNewReality == '2') {
          return '2112';  
        }
        return currentReality + pathToNewReality;
        default: return currentReality + pathToNewReality;
    }
}

function EnterReality(reality) {
    document.getElementById("videoArea").innerHTML = "<video id='gameVid' onended='SetupButtons(\"" + reality + "\");' width='854' height='480' type='video/mp4' src='assets/videos/" + reality + ".mp4' autoplay muted></video>";
    if (document.getElementById("gamerMode").checked) {
        document.getElementById("gameVid").playbackRate = 3.0;
    } else {
        document.getElementById("gameVid").playbackRate = 1.0;
    }
    document.getElementById("buttonsArea").innerHTML = "";
}

function SetupButtons(reality) {
    var backButton = false;
    var winButton = false;
    var amount = 0;
    switch (reality) {
        case '0': amount = 2;
        break;
        case '2': amount = 2;
        break;
        case '21': amount = 3;
        break;
        case '211': amount = 2;
        break;
        case '2111': amount = 3;
        break;
        case '21111': winButton = true;
        break;
        case '21112': backButton = true;
        break;
        case '21113': amount = 2;
        break;
        case '211131': backButton = true;
        break;
        case '2112': amount = 2;
        break;
        case '21121': backButton = true;
        break;
        case '21122': backButton = true;
        break;
        case '211211': winButton = true;
        break;
        case '1': amount = 2;
        break;
        case '11': amount = 3;
        break;
        case '111': backButton = true;
        break;
        case '112': backButton = true;
        break;
        case '113': amount = 2;
        break;
        case '1132': backButton = true;
        break;
        case '1133': backButton = true;
        break;
        case '1131': amount = 2;
        break;
        case '11313': backButton = true;
        break;
        case '11311': backButton = true;
        break;
        case '11312': amount = 2;
        break;
        case '113121': winButton = true;
        break;
        case '113122': backButton = true;
        break;
        case '22': amount = 2;
        break;
        case '221': winButton = true;
        break;
        case '222': amount = 2;
        break;
        case '2222': amount = 2;
        break;
        case '22221': amount = 2;
        break;
        case '222211': backButton = true;
        break;
        case '222212': backButton = true;
        break;
        case '222213': winButton = true;
        break;
        case '12': amount = 2;
        break;
        case '122': backButton = true;
        break;
        case '121': amount = 3;
        break;
        case '1213': amount = 2;
        break;
        case '1211': amount = 2;
        break;
        case '12111': backButton = true;
        break;
        case '12112': winButton = true;
        break;
        case '1212': amount = 2;
        break;
        case '12121': backButton = true;
        break;
        case '12122': winButton = true;
        break;
        case '2223': backButton = true;
        break;
        case '2221': backButton = true;
        break;
        case '22223': backButton = true;
        break;
        case '22222': backButton = true;
        break;
        
    }
    if (winButton) {
        document.getElementById("buttonsArea").innerHTML = "<img onclick='EnterReality(\"0\");' src='assets/buttons/back.png' alt='backtostart'>";
        if (document.getElementById("gamerMode").disabled) {
            document.getElementById("gamerMode").disabled = false;
            document.getElementById("gamerModeLockedText").innerHTML = "";
            alert("Congratulations!!!\nYou unlocked Gamer mode!\nIn Gamer mode, the game plays three times as fast.");
        }
    }
    else if (backButton) {
        BackButton(reality);
    } else {
        GetButtons(amount, reality);
    }
}

function SecretEnding() {
    EnterReality("211211");
}
