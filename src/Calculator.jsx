import React, {useState} from "react";
import './Calculator.css'
import Btn from "./Button";
import data from './data.json'

const Calculator = () => {
    const [myInput, setMyInput] = useState("0");
    const [myResult, setMyResult] = useState(0);
    const [lastOperator, setLastOperator] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [calHistArr, setCalHistArr] = useState([]);
    const [buttonData, setButtonData] = useState(data);


    const calculate = (operator) => {
        OperationFunction();
        setLastOperator(operator === "=" ? "" : operator);
        setCalHistArr(oldArr => operator === "=" ? [] : [...oldArr, operator]);
    }

    const KeyboardInput = event => {
        const keyboardInput = event.target.value;
        const lastChar = keyboardInput[keyboardInput.length - 1];
        var numberRegx = /^\d+$/;
        if(numberRegx.test(lastChar)){
            setMyInput(parseFloat(keyboardInput).toString());
        } else if(lastChar === '.'){
            setMyInput(myInput + lastChar);
        } else {
            calculate(lastChar)
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

    return(
        <>
        <input type="text" value={myInput} onChange={KeyboardInput} className="calculatorInput"/>
        <div className="calculatorResult">{myResult}</div>
        <div className="calculationHistory">{calHistArr.map((item) => <>{item}</>)}</div>
        <div>
            {buttonData.map((buttonRow, index) => <div key={index}>{buttonRow.map(
                (myButton, btnIndex) => <Btn key={btnIndex} label={myButton.label} onClick={() => CalInput(myButton.label)} className="calculatorButton"/>
            )}</div>)}
        </div>
        </>
    );
}
export default Calculator