class Perceptron {
    weights = [-1, 0.5];
    learning_rate = 0.1;

    constructor() {
        const getRandomArbitrary = (min, max) => {
            const value = Math.random() * (max - min) + min;
            //console.log(value)
            return value;
        }
        //Initialize the weights randomly
        for (const index in this.weights) {
            this.weights[index] = getRandomArbitrary(-1, 1);
        }
    }

    get_guess(inputs) {
        var sum = 0.0;
        for (const index in this.weights) {
            sum += this.weights[index] * inputs[index];
        }

        const sign = n => {
            if (n >= 0) return 1;
            else return -1;
        }
        const output = sign(sum);

        return output;
    }

    train(inputs, target) {
        //console.log('Perceptron -> weights ', perceptron.weights);
        const guess = this.get_guess(inputs);
        //console.log('Perceptron -> train -> guess = ', guess);
        const error = target - guess;
        //console.log('Perceptron -> train -> error = ', error);
        //Tune all the weights
        
        for (const index in this.weights) {
            this.weights[index] += error * inputs[index] * this.learning_rate;
        }
    }
}