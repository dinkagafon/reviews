import s from './CheckBox.module.scss';


const CheckBox = (props) => {
    return (  
        <div className={s.radio} onClick={(e) => {
            if (props.activeValue.includes(props.value)){
                const newActiveValue = props.activeValue.filter(item => item !== props.value)
                props.select(newActiveValue)
                if(!newActiveValue.length){
                    props.setFillHeader(false)
                }
            }else{
                props.select([...props.activeValue, props.value])
                props.setFillHeader(true)
            }
        }}>
            <p className={props.activeValue.includes(props.value)?s.checked:''}>
            {props.children}
            </p>
        </div>
    )
}
export default CheckBox