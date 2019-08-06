var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var target = 'a';
var guesses = [];
var wins = 0;
var loses = 0;
var guess_left = 9;
function setTarget() {
    target = letters[Math.floor(Math.random() * letters.length) + 1];
}
function updatePage(key) {
    guesses.push(key);
    if (key === target) {
        guesses = [];
        wins += 1;
        guess_left = 9;
        setTarget();
    } else if (guesses.length === 9) {
        guesses = [];
        loses += 1;
        guess_left = 9;
    } else {
        guess_left -= 1;
    }
    init();
}
function init() {
    document.getElementById('win_item').textContent = wins;
    document.getElementById('lose_item').innerText = loses;
    document.getElementById('left_item').innerText = guess_left;
    var entered_text = "";
    for (var i = 0; i < guesses.length; i++) {
        entered_text += guesses[i] + ", ";
    }
    if (entered_text !== "")
        entered_text = entered_text.slice(0, entered_text.length - 2);
    document.getElementById('entered_item').innerText = entered_text;
}
init();
setTarget();
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const charList = 'abcdefghijklmnopqrstuvwxyz';
    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        if (charList.indexOf(key) === -1) return;
        updatePage(key)
    });
});