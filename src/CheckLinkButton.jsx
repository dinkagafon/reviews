import s from './CheckLinkButton.module.scss';
import Button from './Button';
import { useState } from 'react';

const CheckLinkButton = (props) => {
    const [isLoaded, setIsLoaded] = useState('idle');
    const [error, setError] = useState(null)
    const checkLink = () => {
        setIsLoaded('loading')
        setError(null)
        fetch("http://420795-ch32684.tmweb.ru/api/reviews/exist", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({link: props.link})
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded('succeeded')
                    if(result.length){
                        props.setStatusLink('exist')
                    }else{
                        props.setStatusLink('absent')
                    }
                },
                (error) => {
                    setIsLoaded('failed');
                    setError(error);
                }
            )
    }
    return (
        <div className={s.block}>
            {
                props.statusLink==='absent'?
                <h2 className={s.absent}>Нет в базе</h2>:
                props.statusLink==='exist'?
                <h2 className={s.exist}>Есть в базе</h2>:
                error?
                <Button click={checkLink}>Ошибка! Попробовать еще раз</Button>:
                !props.link?
                <Button custom={'disable'}click={()=>{}}>Проверить ссылку</Button>:
                isLoaded==='loading'?
                <Button custom={'disable'}click={()=>{}}>Загрузка</Button>:
                <Button click={checkLink}>Проверить ссылку</Button>
            }
            {
                error?
                <p>Нет подключения к серверу попробуйте позже</p>:''
            }
        </div>
    )
}
export default CheckLinkButton