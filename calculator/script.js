const inputField = document.getElementById("inputBox");
inputField.value = 0;

let nums = [];

//function that resets entered value
function allClear () {
    inputField.value = 0;
    nums = [];
}

//function that removes one character at a time starting from the last
function backSpace() {
    if (nums.length === 0) {
        inputField.value = "0";
        return;
    }

    //join nums array into a single string
    let current = nums.join("");

    //remove the last character
    current = current.slice(0, -1);

    //update nums array with the new characters
    nums = current.split("");

    //update the value
    inputField.value = current || "0";
}

//function that handles btns inputs
function expressionSigns (expression){
    switch (expression) {
        case "AC":
            allClear();
            break;
        case "X":
            backSpace();
            break;
        case "=":
            try {
                //calculate the full expression and show result
                inputField.value = eval(nums.join(""));
                //store result in nums array so user can continue calculating
                nums = [inputField.value];
            } catch {
                //if calculation fails, show error and reset 
                inputField.value = "Error";
                nums = [];
            }
            break;
        default:
            //append numbers/operators to the expression
            nums.push(expression);
            inputField.value = nums.join("");
            break;

    }
}