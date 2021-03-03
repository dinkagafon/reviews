import s from './CheckLinkButton.module.scss';
import Button from './Button';
import { useState } from 'react';

const SendInfoButton = (props) => {
    const [isLoaded, setIsLoaded] = useState('idle');
    const [error, setError] = useState(null)
    const sendInfo = () => {
        setIsLoaded('loading')
        setError(null)
        fetch("http://420795-ch32684.tmweb.ru/api/reviews/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                link: props.link,
                name: props.name,
                creator_login: props.creatorLogin,
                link_img: props.image,
                type: props.typeView!=='Другое'?props.typeView:props.typeViewOther,
                volume: props.lengthViewInput,
                platform: props.platform!=='Другое'?props.platform:props.platformOther,
                author: props.bloger,
                link_author: props.blogerHref,
                date: props.date,
                devices: props.devices.join(',')
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded('succeeded')
                    props.setDefaultState()
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
                props.statusLink !== 'absent' ?
                <Button custom={'disable'} click={()=>{}}>Проверьте ссылку</Button>:
                !Number.isInteger(+props.lengthViewInput)?
                <Button custom={'disable'} click={()=>{}}>Длинна обзора должна быть числом</Button>:
                props.link&&
                props.creatorLogin&&
                props.name&&
                props.image&&
                props.blogerHref&&
                props.bloger&&
                props.date&&
                (props.platform!=='Другое'||props.platformOther)&&
                (props.typeView!=='Другое'||props.typeViewOther)&&
                props.devices.length&&
                props.lengthViewInput ? 
                <Button click={sendInfo}>Отправить</Button>:
                <Button custom={'disable'} click={()=>{}}>Заполните все поля</Button>
            }
            <p></p>
            {
                isLoaded==='loading'?
                <h2>Загрузка</h2>:
                isLoaded==='succeeded'&&!props.link?
                <h2 className={s.absent}>Отправленно</h2>:
                isLoaded==='failed'?
                <h2 className={s.exist}>Сервер недоступен. Напишите администратору</h2>:''
            }
        </div>
    )
}
export default SendInfoButton