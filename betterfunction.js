function comedy(index) {
    var punchlines = ["I couldn't think of Acorny joke.", "I figured you'd think I was nutty.", "everything I came up with was only Oak-Kay"];
    return punchlines[index];
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
var pun = "\n    I was trying to come up with an Acorns pun, but " + comedy(randomNumber(3)) + "\n";
console.log(pun);
//# sourceMappingURL=betterfunction.js.map