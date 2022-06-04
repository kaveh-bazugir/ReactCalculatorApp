/* use keysNo to define number of buttuns 
in each row of calculator buttons */ 
let keysNo = 2
/* use KeyRow arrow function to generate a row of calculator buttons.
You should define number of buttons in each row by changing keysNo value.
you can find keysNo variable above. */
const KeysRow = () => <tr><KeysGen /></tr>;
/* KeysGen function produces button in table cells.
keysRow function use this function. */
function KeysGen() {
    const aKey = <td><button>x</button></td>;
    const keysGen = [];
    for(let i = 0; i < keysNo; i++) {
        keysGen.push(aKey);
    }
    
    return keysGen;
} 

export default KeysRow