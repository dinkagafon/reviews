
import s from './Button.module.scss';
const Button = (props) => {
    return (  
        <span className={`${s.button} ${props.custom?s[props.custom]:''}`} onClick={() => props.click()}>{props.children}</span>
    )
}
export default Button