import './Form.scss';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import InputText from './InputText';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';
import FieldBlock from './FieldBlock';
import CheckBox from './CheckBox';
import CheckBoxGroup from './CheckBoxGroup';
import CheckLinkButton from './CheckLinkButton';
import SendInfoButton from './SendInfoButton';
import {dev} from './DeviceList'


const Form = () => {
    const [creatorLogin, setCreatorLogin] = useState('');

    const [link, setLink] = useState('');

    const [name, setName] = useState('');

    const [image, setImage] = useState('');

    const [typeViewOther, setTypeViewOther] = useState('');

    const [typeView, setTypeView] = useState('');

    const [platformOther, setPlatformOther] = useState('');

    const [platform, setPlatform] = useState('');

    const [bloger, setBloger] = useState('');

    const [blogerHref, setBlogerHref] = useState('');

    const [lengthView, setLengthView] = useState('Символы');

    const [lengthViewInput, setLengthViewInput] = useState('');

    const [devices, setDevices] = useState([]);

    const [statusLink, setStatusLink] = useState('unchecked')
    const [date, setDate] = useState(new Date())
    const [drow, setDrow] = useState(true)
    const setDefaultState = () => {
        setDrow(false)
        setDrow(true)
        setCreatorLogin('')
        setLink('')
        setName('')
        setImage('');
        setTypeViewOther('');
        setTypeView('');
        setPlatformOther('');
        setPlatform('');
        setBloger('');
        setBlogerHref('');
        setLengthView('Символы');
        setLengthViewInput('');
        setDevices([]);
        setStatusLink('unchecked')
        setDate(new Date())
    }

    return (
        <div className="block">
            <div className="wrapper">
                {
                    drow ? <>
                        <FieldBlock header={'Ссылка на обзор'} custom={
                            statusLink === 'unchecked' ? 'default' :
                                statusLink === 'absent' ? 'success' :
                                    statusLink === 'exist' ? 'error' : ''
                        }>
                            <InputText
                                placeholder={'https://www.youtube.com/watch?v=5QY2_S9d4c4'}
                                value={link}
                                change={(value) => {
                                    setLink(value);
                                    setStatusLink('unchecked')
                                }}
                                custom={
                                    statusLink === 'unchecked' ? 'default' :
                                        statusLink === 'absent' ? 'success' :
                                            statusLink === 'exist' ? 'error' : ''
                                }
                            />
                            <CheckLinkButton link={link} statusLink={statusLink} setStatusLink={setStatusLink} />
                        </FieldBlock>
                        <FieldBlock header={'Заголовок обзора'}>
                            <InputText
                                placeholder={'Распаковал iPhone 12 Mini и сравнил с iPhone SE, iPhone 12 Pro, iPhone 12 Pro Max'}
                                value={name}
                                change={setName}
                            />
                        </FieldBlock>
                        <FieldBlock header={'Ссылка на картинку'}>
                            <InputText
                                placeholder={'https://i.ytimg.com/vi/5QY2_S9d4c4/maxresdefault.jpg'}
                                value={image}
                                change={setImage}
                            />
                        </FieldBlock>
                        <FieldBlock header={'Тип обзора'}>
                            <RadioGroup
                                activeValue={typeView}
                                select={setTypeView}
                            >
                                <RadioButton value='Текст'>Текст</RadioButton>
                                <RadioButton value='Видео'>Видео</RadioButton>
                                <RadioButton value='Другое'>Другой формат</RadioButton>
                            </RadioGroup>
                            {typeView === 'Другое' ?
                                <InputText
                                    placeholder={'Аудио'}
                                    value={typeViewOther}
                                    change={setTypeViewOther}
                                /> : ''}
                        </FieldBlock>
                        <FieldBlock header={'Площадка'}>
                            <RadioGroup
                                activeValue={platform}
                                select={setPlatform}
                            >
                                <RadioButton value='YouTube'>YouTube</RadioButton>
                                <RadioButton value='Сайт'>Сайт автора</RadioButton>
                                <RadioButton value='Другое'>Другая площадка</RadioButton>
                            </RadioGroup>
                            {platform === 'Другое' ?
                                <InputText
                                    placeholder={'Telegram'}
                                    value={platformOther}
                                    change={setPlatformOther}
                                /> : ''}
                        </FieldBlock>
                        <FieldBlock header={'Блогер или медиа'}>
                            <InputText
                                placeholder={'Wylsacom Media'}
                                value={bloger}
                                change={setBloger}
                            />
                        </FieldBlock>
                        <FieldBlock header={'Ссылка на площадку с обзором'}>
                            <InputText
                                placeholder={'https://www.youtube.com/user/Wylsacom'}
                                value={blogerHref}
                                change={setBlogerHref}
                            />
                        </FieldBlock>

                        <FieldBlock header={'Дата публикации обзора'}>
                            <DatePicker locale={'ru-RU'}onChange={setDate} value={date} />
                        </FieldBlock>

                        <FieldBlock header={typeView === 'Видео' ? 'Длинна обзора (Секунды)' : typeView === 'Текст' ? 'Длинна обзора (символы с пробелами)' : lengthView === 'Время' ? 'Длинна обзора (Секунды)' : 'Длинна обзора (символы с пробелами)'}>
                            {
                                !typeView || typeView === 'Другое' ? <RadioGroup
                                    activeValue={lengthView}
                                    select={setLengthView}
                                >
                                    <RadioButton value='Символы'>Символы</RadioButton>
                                    <RadioButton value='Время'>Время</RadioButton>
                                </RadioGroup> : ''
                            }
                            <InputText
                                placeholder={'2334'}
                                value={lengthViewInput}
                                change={setLengthViewInput}
                            />
                        </FieldBlock>
                        <FieldBlock header={'Логин'}>
                            <InputText
                                placeholder={'111'}
                                value={creatorLogin}
                                change={setCreatorLogin}
                            />
                        </FieldBlock>
                        <FieldBlock header={'Девайсы в обзоре'}>
                            <CheckBoxGroup
                                activeValue={devices}
                                select={setDevices}
                            >
                                {dev.map(item => {
                                    return <CheckBox value={item.name} key={item.id}>{item.name}</CheckBox>
                                })}
                            </CheckBoxGroup>
                        </FieldBlock>
                    </> : ''
                }

                <SendInfoButton
                    link={link}
                    creatorLogin={creatorLogin}
                    name={name}
                    image={image}
                    typeViewOther={typeViewOther}
                    typeView={typeView}
                    platform={platform}
                    platformOther={platformOther}
                    bloger={bloger}
                    blogerHref={blogerHref}
                    lengthView={lengthView}
                    lengthViewInput={lengthViewInput}
                    devices={devices}
                    statusLink={statusLink}
                    setDefaultState={setDefaultState}
                    date={date}
                />
            </div>
        </div>
    )
}
export default Form 