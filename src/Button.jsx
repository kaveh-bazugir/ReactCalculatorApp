const Btn = (props) => {
    const {label, onClick} = props;
    const btnStyle = {
        margin:2
    }
    return(
        <button type="button" onClick={onClick} style={btnStyle}>{label}</button>
    );
}

export default Btn