import s from './RadioButton.module.scss';


const Radio = (props) => {
    return (  
        <div className={s.radio} onClick={(e) => {
            props.select(props.value)
            props.setFillHeader(true)
        }}>
            <p className={props.value===props.activeValue?s.checked:''}>
                {props.children}
            </p>
        </div>
    )
}
export default Radio