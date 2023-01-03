
let homePoints = 0
let guestPoints = 0

scoreHomeEl = document.getElementById("scoreHome")
scoreGuestEl = document.getElementById("scoreGuest")
scoreHomeEl.textContent = homePoints
scoreGuestEl.textContent = guestPoints

function add1Home(){
 homePoints += 1
 scoreHomeEl.textContent = homePoints
}

function add2Home(){
 homePoints += 2
 scoreHomeEl.textContent = homePoints
}

function add3Home(){
 homePoints += 3
 scoreHomeEl.textContent = homePoints
}

function add1Guest(){
  guestPoints += 1
 scoreGuestEl.textContent = guestPoints
}

function add2Guest(){
 guestPoints += 2
 scoreGuestEl.textContent = guestPoints
}

function add3Guest(){
 guestPoints += 3
 scoreGuestEl.textContent = guestPoints
}

function resetScore(){
    scoreGuestEl.textContent = 0
    scoreHomeEl.textContent = 0
     homePoints = 0
     guestPoints = 0
}