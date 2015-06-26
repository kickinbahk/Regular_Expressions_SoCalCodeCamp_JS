/**
 * Created by josiahmory on 6/23/15.
 */

var title = "king arthur and the knights of the round table";

console.log("~> " + title);

var capitalize = function (word) {
    var sliceWord = word.slice(1);
    var upCase = word.charAt(0).toUpperCase();
    return upCase + sliceWord;

}

var newTitle = title.replace(/\b(?!and|the|of|with|so)\w+/g, capitalize);

console.log("~> " + newTitle);

