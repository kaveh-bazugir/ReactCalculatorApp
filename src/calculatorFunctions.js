import MyNewDisplay from "./myNewDisplay";

let calresult = 0;
export function Increament() { 
    calresult ++;
    let mycalresult = calresult
    return (
        mycalresult
    )
}
export const CalDisplay = () => <p>{calresult}</p>;

