import React, { useState } from 'react';
import Button from './Button';


const Calculator = () => {

  const [display, setDisplay] = useState('0');
  const [value, setValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const btnOnClick = (input) => setValue(value + input)
  const buttons = [
    [
      {label: '1', onClick: () => btnOnClick('1')},
      {label: '2', onClick: () => btnOnClick('2')},
      {label: '3', onClick: () => btnOnClick('3')},
      {label: '+', onClick: () => setOperator('plus')},
    ],
    [
      {label: '4', onClick: () => btnOnClick('4')},
      {label: '5', onClick: () => btnOnClick('5')},
      {label: '6', onClick: () => btnOnClick('6')},
      {label: '-', onClick: () => setOperator('minus')},
    ],
    [
      {label: '7', onClick: () => btnOnClick('7')},
      {label: '8', onClick: () => btnOnClick('8')},
      {label: '9', onClick: () => btnOnClick('9')},
      {label: '*', onClick: () => setOperator('multiply')},
    ],
  ];

  return (
    <section>
      {/* {operator && <h1>{operator}</h1>} */}
      <input
        type="text"
        value={value}
        onChange={ event => {
          console.log(event)
          const result = value[0] === "0" ? Number(event.target.value ) : event.target.value
          setValue(result)
        }}
        style={{
          width: '100%',
          height: 40,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      />
      <div style={{marginTop: 10}}>
      {
        buttons.map(buttonRow => (
          <div style={{marginTop: 5}}>
            {buttonRow.map(button => <Button label={button.label} onClick={button.onClick}/>)}
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Calculator