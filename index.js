canvas = document.getElementById('gragh');
ctx = canvas.getContext("2d");

const polynomial = new Polynomial();
const coordinate = new Coordinate(ctx, polynomial);

const perceptron = new Perceptron();

const interaction = new Interaction();

canvas.addEventListener("mousedown", (event) => {
    const rect = canvas.getBoundingClientRect();

    const coordinate_locations = [
        event.clientX - rect.left,
        event.clientY - rect.top
    ]
    create_point_withMouse(coordinate_locations);
})



function training(times) {
    //training
    for (var i = 0; i < times; i++) {
        const point = new Point();
        const inputs = point.get_coordinate_locations();
        const label = polynomial.get_label(point.get_coordinate_locations());
        perceptron.train(inputs, label);
    }

    //update learning_number
    const learning_number_element = document.getElementById('learning_number');
    const num = parseInt(learning_number_element.innerHTML);
    //console.log(num);
    learning_number_element.innerHTML = num + times;
}

const create_point_withMouse = (coordinate_locations) => {
    if(interaction.waiting_select_buttons) return;

    const point = new Point();
    point.set_locations_inCoordinate(coordinate_locations);

    //I am said that is it right?
    const guess = perceptron.get_guess(point.get_locations());
    const label = polynomial.get_label(point.get_locations());
    const bool = (guess == label);

    //Showing the points
    coordinate.put_dot(point.get_coordinate_locations());

    //console.log(point.get_coordinate_locations());

    //Players are interation with robot.
    interaction.predicting(guess, bool);
    console.log(guess, label);
}

/*
function create_random_point(times) {
    for (var i = 0; i < times; i++) {
        const point = new Point();

        //I am said that is it right?
        const guess = perceptron.get_guess(point.get_coordinate_locations());
        const label = point.label;
        const bool = (guess == label);

        //Showing the points
        coordinate.put_dot(point.get_coordinate_locations());
    }
}
*/

