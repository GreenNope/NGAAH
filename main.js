var eLetter = ["B", "C", "D", "E", "G", "P", "T", "V", "Z"];
var secondLetter = ["9", "i"]
var thirdLetter = ["a", "k"]

var number = 1;

function newLink (i, j, k, l, m, number) {
    
    var lineBreak = document.createElement("br");
    var link = "goo.gl/" + i + j + k + l + m + "d";
}
    

for (i = 0; i < eLetter.length; i++) {
    for (j = 0; j < secondLetter.length; j++) {
        for (k = 0; k < thirdLetter.length; k++) {
            for (l = 0; l < eLetter.length; l++) {
                for (m = 0; m < eLetter.length; m++) {
                    newlink(i, j, k, l, m, number);
                    number = number + 1;
                }
            }
        }
    }
}
