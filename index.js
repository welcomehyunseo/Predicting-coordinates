const canvas = document.getElementById('gragh');
const ctx = canvas.getContext("2d");

//Visualize the playing area
ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height); // Outer circle
ctx.strokeStyle = '#000000';
ctx.stroke();

ctx.beginPath();       // Start a new path
ctx.moveTo(0, 0);    // Move the pen to (30, 50)
ctx.lineTo(canvas.width, canvas.height);  // Draw a line to (150, 100)
ctx.stroke();          // Render the path

const perceptron = new Perceptron();

function training(times) {
    //training
    for (var i = 0; i < times; i++) {
        point = new Point();
        perceptron.train(point.location, point.label);
    }

    //update learning_number
    const learning_number_element = document.getElementById('learning_number');
    const num = parseInt(learning_number_element.innerHTML);
    //console.log(num);
    learning_number_element.innerHTML = num + times;
}

function create_point(times) {
    for (var i = 0; i < times; i++) {
        const point = new Point();

        //I am said that is it right?
        const guess = perceptron.get_guess(point.location);
        const label = point.label;
        const bool = (guess == label);

        //Showing the points
        point.show_inCanvas(bool);
    }
}