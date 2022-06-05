
const Button = props => {
  const {
    label,
    onClick
  } = props;

  const style = {
    width: 40,
    height: 40,
    marginRight: 5
  }
  return <button style={style} onClick={onClick}>{label}</button>
}

export default Button;