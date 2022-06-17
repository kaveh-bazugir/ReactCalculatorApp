import React, {useState} from "react";
import Btn from "./Button";

const Calculator = () => {
    const [myInput, setMyInput] = useState("0");
    const [myResult, setMyResult] = useState(0);
    const [lastOperator, setLastOperator] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const KeyboardInput = event => {
        const keyboardInput = event.target.value;
        const lastChar = keyboardInput[keyboardInput.length - 1];

        switch(lastChar) {
            case ".":
                setMyInput(myInput + lastChar);
                break;
            case "+":
                OperationFunction();
                setLastOperator("+");
                break;
            case "-":
                OperationFunction();
                setLastOperator("-");
                break;
            case "*":
                OperationFunction();
                setLastOperator("*");
                break;
            case "/":
                OperationFunction();
                setLastOperator("/");
                break;
            case "^":
                OperationFunction();
                setLastOperator("^");
                break;
            case "=":
                OperationFunction();
                setLastOperator("");
                break;
            default:
                setMyInput(parseFloat(keyboardInput).toString());
        }
    }

    const OperationFunction = () => {
        switch(lastOperator){
            case "+":
                setMyResult(myResult + parseFloat(myInput));
                setMyInput("0");
                break;
            case "-":
                setMyResult(myResult - parseFloat(myInput));
                setMyInput("0");
                break;
            case "*":
                setMyResult(myResult * parseFloat(myInput));
                setMyInput("0");
                break;
            case "/":
                if(myInput==="0"){
                    setErrorMessage("Error: Division by 0.");
                } else {
                    setMyResult(myResult / parseFloat(myInput));
                    setMyInput("0");
                }
                break;
            case "^":
                setMyResult(myResult ** parseFloat(myInput));
                setMyInput("0");
                break;
            default:
                setMyResult(parseFloat(myInput));
                setMyInput("0");
        }
    }

    const CalInput = (btnInput) =>{
        switch (btnInput) {
            case ".":
                setMyInput(myInput + btnInput);
                break;
            default:
                setMyInput(myInput + btnInput);
                setMyInput(parseFloat(myInput).toString());

        }
    }

    const calButtons = [
        [
            {label:"1", func:{() => CalInput("1")}},
            {label:"2", func:{() => CalInput("2")}},
            {label:"3", func:{() => CalInput("3")}}
        ]
    ]

    return(
        <>
        <input type="text" value={myInput} onChange={KeyboardInput} />
        <div>{myResult}</div>
        <div>
            <Btn label="1" onClick={() => CalInput("1")}/>
            <Btn label="+" onClick={() => {setMyInput(myInput + "+")}}/>
        </div>
        </>
    );
}
export default Calculator