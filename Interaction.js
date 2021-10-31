class Interaction {
    waiting_select_buttons = false;

    constructor() {
        this.interation_buttons = document.getElementById("interation_buttons");
        this.interation_bubble = document.getElementById("interation_bubble");
    }

    predicting(answer, result) {
        //console.log(answer);

        if (answer == -1) this.interation_bubble.innerHTML = "bellow!";
        else this.interation_bubble.innerHTML = "above!";

        //console.dir(this.interation_buttons);
        this.interation_buttons.className = "";
        this.waiting_select_buttons = true;

        const right_button = document.getElementById("right_button");
        const wrong_button = document.getElementById("wrong_button");

        const finish_interation = () => {
            this.interation_buttons.className = "d-none";
            this.waiting_select_buttons = false;
        }
        
        right_button.addEventListener("click", (e) => {
            if (result) {
                this.interation_bubble.innerHTML = "Good!";
            } else {
                this.interation_bubble.innerHTML = "Don't lie. I got it wrong...";
            }
            finish_interation();
        });
        wrong_button.addEventListener("click", (e) => {
            if (result) {
                this.interation_bubble.innerHTML = "I think I need to practice...!";
            } else {
                this.interation_bubble.innerHTML = "Oh really? Press the training button on the left....!";
            }
            finish_interation();
        });
        
    }
}