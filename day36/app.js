"There was a who was so who was so lazy,he couldn't  even other bother to change his clothes one da he saw that the apple tree in their yar was full of fruits he wanted to eat some applesbut he was too lazy so he lay downunderneath so he lay so he lay down underneath underneath waited waited for the fruitls to fall off reza waited and waited until he was very hungry but the apples never fell laziness can get you nowhere laziness can get you nowhere if you want somtething ";
// solution 5 exrcise exerciese
var demoTage = document.getElementById("demo");
function animate_string(elemetn) {
    var textNode = demoTage.childNodes[0];
    var text = textNode.data;
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}
if (demoTage) {
    animate_string(demoTage);
}
