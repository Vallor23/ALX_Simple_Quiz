function checkAnswer () {
    let correctAnswer = "4";
    
    const userAnswer = document.getElementsByName("quiz");
    const para = document.querySelector("#feedback")
    
    // Loop through all radio buttons
    for (i= 0; i <userAnswer.length; i++) {
        // Check if the current radio button is selected
        if (userAnswer[i].checked) {
            // If the selected answer matches the correct answer
            if (userAnswer[i].value === correctAnswer) {
                // Display correct feedback
                para.textContent = "Correct! Well done.";
                return; //Exit the function after finding the correct answer
            } else {
                para.textContent = "That's incorrect. Try again!"
                return; //Exit the function after finding the incorrect answer
            }
        }   
        }
    }
    // Add eventListener to submit button
    const btn = document.getElementById("submit-answer");
    
    btn.addEventListener("click", checkAnswer)