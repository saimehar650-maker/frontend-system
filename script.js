// Login button

function showLogin() {
    alert("Login page will be available soon!");
}


// View Fixtures

function viewFixtures() {
    document.getElementById("fixtures").scrollIntoView({
        behavior: "smooth"
    });
}


// View Standings

function viewStandings() {
    document.getElementById("standings").scrollIntoView({
        behavior: "smooth"
    });
}


// Ticket Booking

function bookTicket() {
    alert("🎟️ Ticket booking feature will be available soon!");
}


// Simple live score update

let scoreUpdated = false;

setInterval(function () {

    const score = document.getElementById("score");

    if (!score) return;

    if (!scoreUpdated) {
        score.innerText = "2 - 1";
        scoreUpdated = true;
    } else {
        score.innerText = "3 - 1";
        scoreUpdated = false;
    }

}, 10000);