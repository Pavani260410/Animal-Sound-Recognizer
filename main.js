function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9d0kVdQQU/model.json", modelReady);
    console.log(classifier);

}

function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sound").innerHTML = "Dedected sound of- " + results[0].label;

        document.getElementById("accuracy").innerHTML = "Accuracy- " + (results[0].confidence * 100).toFixed(1) + "%";
        img = document.getElementById("img");

        console.log(results[0].label)
        if (results[0].label == "Meowing") {
            img.src = "cat.png";
        } else if (results[0].label == "Background Noise") {
            img.src = "ear.png";
        } else if (results[0].label == "Barking") {
            img.src = "dog.png";
        } else if (results[0].label == "Mooing") {
            img.src = "cow.png";
        }
    }


}
