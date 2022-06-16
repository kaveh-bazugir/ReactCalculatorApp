const Btn = (props) => {
    const {label, onClick} = props;
    return(
        <button type="button" onClick={onClick}>{label}</button>
    );
}

export default Btn