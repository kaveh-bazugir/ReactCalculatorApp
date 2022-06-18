import React, {useState} from "react";
import './Calculator.css'
import Btn from "./Button";

const Calculator = () => {
    const [myInput, setMyInput] = useState("0");
    const [myResult, setMyResult] = useState(0);
    const [lastOperator, setLastOperator] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [calHistArr, setCalHistArr] = useState([]);

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
                setCalHistArr(oldArr => [...oldArr, "+"]);
                break;
            case "-":
                OperationFunction();
                setLastOperator("-");
                setCalHistArr(oldArr => [...oldArr, "-"]);
                break;
            case "*":
                OperationFunction();
                setLastOperator("*");
                setCalHistArr(oldArr => [...oldArr, "*"]);
                break;
            case "/":
                OperationFunction();
                setLastOperator("/");
                setCalHistArr(oldArr => [...oldArr, "/"]);
                break;
            case "^":
                OperationFunction();
                setLastOperator("^");
                setCalHistArr(oldArr => [...oldArr, "^"]);
                break;
            case "=":
                OperationFunction();
                setLastOperator("");
                setCalHistArr([]);
                break;
            default:
                setMyInput(parseFloat(keyboardInput).toString());
        }
    }

    const OperationFunction = () => {
        switch(lastOperator){
            case "+":
                setMyResult(myResult + parseFloat(myInput));
                setCalHistArr(oldArr => [...oldArr, myInput]);
                setMyInput("0");
                break;
            case "-":
                setMyResult(myResult - parseFloat(myInput));
                setCalHistArr(oldArr => [...oldArr, myInput]);
                setMyInput("0");
                break;
            case "*":
                setMyResult(myResult * parseFloat(myInput));
                setCalHistArr(oldArr => [...oldArr, myInput]);
                setMyInput("0");
                break;
            case "/":
                if(myInput==="0"){
                    setErrorMessage("Error: Division by 0.");
                    setMyResult(myResult)
                    setCalHistArr(oldArr => [...oldArr, "1"]);
                    setMyInput("0");
                } else {
                    setMyResult(myResult / parseFloat(myInput));
                    setCalHistArr(oldArr => [...oldArr, myInput]);
                    setMyInput("0");
                }
                break;
            case "^":
                setMyResult(myResult ** parseFloat(myInput));
                setCalHistArr(oldArr => [...oldArr, myInput]);
                setMyInput("0");
                break;
            default:
                setMyResult(parseFloat(myInput));
                setCalHistArr(oldArr => [...oldArr, myInput]);
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
                setCalHistArr(oldArr => [...oldArr, "+"]);
                break;
            case "-":
                OperationFunction();
                setLastOperator("-");
                setCalHistArr(oldArr => [...oldArr, "-"]);
                break;
            case "*":
                OperationFunction();
                setLastOperator("*");
                setCalHistArr(oldArr => [...oldArr, "*"]);
                break;
            case "/":
                OperationFunction();
                setLastOperator("/");
                setCalHistArr(oldArr => [...oldArr, "/"]);
                break;
            case "^":
                OperationFunction();
                setLastOperator("^");
                setCalHistArr(oldArr => [...oldArr, "^"]);
                break;
            case "=":
                OperationFunction();
                setLastOperator("");
                setCalHistArr([]);
                break;
            case "C":
                setMyInput("0");
                break;
            case "CE":
                setMyInput("0");
                setMyResult(0);
                setCalHistArr([])
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
    
    /*calButtons.map((buttonRow) => {buttonRow.map(
        (calculatorButton) => calculatorButton.className = "calculatorbutton"
    )});*/

    return(
        <>
        <input type="text" value={myInput} onChange={KeyboardInput} className="calculatorInput"/>
        <div className="calculatorResult">{myResult}</div>
        <div className="calculationHistory">{calHistArr.map((item) => <>{item}</>)}</div>
        <div>
            {calButtons.map((buttonRow) => <div>{buttonRow.map(
                (myButton) => <Btn label={myButton.label} onClick={myButton.onClick} className="calculatorButton"/>
            )}</div>)}
        </div>
        </>
    );
}
export default Calculator