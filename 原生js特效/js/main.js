var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', function () {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    newStory.replace(":insertx:", xItem);
    newStory.replace(":inserty:", yItem);
    newStory.replace(":insertz:", zItem);
    if (customName.value !== '') {
        var name = customName.value;
        newStory.replace("Bob", name);

    }

    if (document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.0714);
        newStory.replace("300", weight);
        newStory.replace("pounds", "stone");
        var temperature = Math.round(94 / 33.8);
        newStory.replace("94", temperature);
        newStory.replace("fahrenheit", "centigrade");


    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
});

