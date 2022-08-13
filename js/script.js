var first = document.getElementById("first-no"),
    second = document.getElementById("second-no"),
    third = document.getElementById("third-no"),
    fourth = document.getElementById("fourth-no"),
    fifth = document.getElementById("fifth-no"),
    yes = document.getElementById("yes"),
    confess = document.getElementById("confess");


function firstNo() {
    first.style.display = "none";
    second.style.display = "block";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
}

function secondNo() {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "block";
    fourth.style.display = "none";
    fifth.style.display = "none";
}

function thirdNo() {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
    fifth.style.display = "none";
}

function fourthNo() {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "block";
}

function fifthNo() {
    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
}

function positive() {
    confess.style.display = "block";
    first.style.display = "none";
    yes.style.display = "none";
}