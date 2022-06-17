const Btn = (props) => {
    const {label, onClick, className} = props;

    return(
        <button type="button" onClick={onClick} className={className}>{label}</button>
    );
}

export default Btn