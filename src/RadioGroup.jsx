//import s from './RadioButtons.module.scss';
import React from 'react'

const RadioButtons = (props) => {
    return (  
        <>
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, {
                    activeValue: props.activeValue,
                    select: props.select,
                    radioName: props.radioName,
                    setFillHeader: props.setFillHeader
                })
                })
            }
        </>
    )
}
export default RadioButtons