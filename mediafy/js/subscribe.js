onload = function changeOpacity() {
    document.getElementById("thanks").style.opacity = "0";
    document.getElementById("email").style.opacity = "0.5";
}

function subscribe() {
    if (document.getElementById('email').validity.typeMismatch || document.getElementById('email').value == '') {
        console.log("Invalid email.")
    }
    else {
        document.getElementById("thanks").style.opacity = "1";
        document.getElementById("subtext").style.opacity = "0";
        document.getElementById("toggle").style.opacity = "0";
        document.getElementById("email").style.opacity = "0";
    }
}
