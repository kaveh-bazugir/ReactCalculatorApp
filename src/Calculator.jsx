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
            case "C":
                setMyInput("0");
                break;
            case "CE":
                setMyInput("0");
                setMyResult(0);
                break;
            case "del":
                if(myInput.length > 1) {
                    setMyInput(myInput.slice(0,myInput.length - 1));
                } else {
                    setMyInput("0");
                }
                break;
            default:
                setMyInput(parseFloat(myInput + btnInput).toString());
        }
    }

    const calButtons = [
        [
            {label:"1", onClick:() => CalInput("1")},
            {label:"2", onClick:() => CalInput("2")},
            {label:"3", onClick:() => CalInput("3")},
            {label:"+", onClick:() => CalInput("+")},
            {label:"^", onClick:() => CalInput("^")}
        ],
        [
            {label:"4", onClick:() => CalInput("4")},
            {label:"5", onClick:() => CalInput("5")},
            {label:"6", onClick:() => CalInput("6")},
            {label:"-", onClick:() => CalInput("-")},
            {label:"C", onClick:() => CalInput("C")}
        ],
        [
            {label:"7", onClick:() => CalInput("7")},
            {label:"8", onClick:() => CalInput("8")},
            {label:"9", onClick:() => CalInput("9")},
            {label:"*", onClick:() => CalInput("*")},
            {label:"CE", onClick:() => CalInput("CE")}
        ],
        [
            {label:"0", onClick:() => CalInput("0")},
            {label:".", onClick:() => CalInput(".")},
            {label:"=", onClick:() => CalInput("=")},
            {label:"/", onClick:() => CalInput("/")},
            {label:"del", onClick:() => CalInput("del")}
        ]
    ];

    return(
        <>
        <input type="text" value={myInput} onChange={KeyboardInput} />
        <div>{myResult}</div>
        <div>
            {calButtons.map((buttonRow) => <div>{buttonRow.map(
                (myButton) => <Btn label={myButton.label} onClick={myButton.onClick}/>
            )}</div>)}
        </div>
        <div>k</div>
        </>
    );
}
export default Calculator