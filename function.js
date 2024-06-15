
        // Function to get values from the input box and store it in outputScreen
        let outputScreen = document.getElementById('output_value')
        function display(num) {
            outputScreen.value += num;
        }

        // Function to check whether the given value is in correct format using try catch block
        function calculate() {
            // If input is corrct then evaluate the answer
            try {
                outputScreen.value = eval(outputScreen.value)
            }
            // else shows alert box
            catch (err) {
                alert("Invalid Input")
            }
        }
        // Function to clear all the displayed values
        function Clear() {
            outputScreen.value = "";
        }

        // Function to delete numbers or symbols one by one
        function del() {
            outputScreen.value = outputScreen.value.slice(0, -1);
        }