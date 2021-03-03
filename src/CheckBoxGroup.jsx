//import s from './RadioButtons.module.scss';
import React from 'react'

const CheckBoxGroup = (props) => {
    return (  
        <>
            {React.Children.map(props.children, (child) => {
                if (React.isValidElement(child)){
                    return React.cloneElement(child, {
                        activeValue: props.activeValue,
                        select: props.select,
                        setFillHeader: props.setFillHeader
                    })
                }else{
                    return child
                } 
            })}
        </>
    )
}
export default CheckBoxGroup