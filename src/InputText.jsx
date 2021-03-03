import s from './InputText.module.scss';
import { useState } from 'react';


const InputText = (props) => {
    const [focus, setFocus] = useState(false);

    return (  
        <input type="text" placeholder={props.placeholder} 
            className={`${s.inputText}  ${focus?s.in:''} ${props.custom?s[props.custom]:''}` }
            value={props.value}
            onChange={(e) => props.change(e.target.value)} 
            onFocus={() => {
                setFocus(true)
                props.setFillHeader(true)
            }}
            onBlur={() => {
                if(!props.value){
                    props.setFillHeader(false)
                    setFocus(false)
                }
            }}
            />       
    )
}
export default InputText