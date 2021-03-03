import s from './FieldBlock.module.scss';
import { useState } from 'react'; 
import React from 'react'

const FieldBlock = (props) => {
    const [fillHeader, setFillHeader] = useState(false);
    return (  
        <div className={s.field}>
            <h2 className={`${fillHeader?s.fill:''} ${props.custom?s[props.custom]:''}`}>{props.header}</h2>
            {React.Children.map(props.children, (child) => {
                if (React.isValidElement(child)){
                    return React.cloneElement(child, {
                        setFillHeader
                    })
                }else{
                    return child
                } 
            })}
        </div>
    )
}
export default FieldBlock