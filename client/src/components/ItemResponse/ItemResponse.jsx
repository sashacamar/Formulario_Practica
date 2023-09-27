import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './ItemResponse.module.css';
import { updateForm } from '../../redux/actions';


const Item = ({item, response, id, updateData, setUpdateData, isDisabled}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [info, setInfo] = useState({
        [item.name] : response[item.name]
    })

    useEffect(()=>{
        setInfo({...info, [item.name]:response[item.name]});
    },[])

    const changeHandler = (event) => {
        const property = event.target.name;
        let value;
        if(event.target.type === 'checkbox') value = event.target.checked;
        else if(event.target.type === 'radio') value = event.target.id;
        else value = event.target.value;

        setInfo({...info, [property]:value});

        //console.log({...info, [property]:value});

        setUpdateData({...updateData, [property]:value});
        console.log({...updateData, [property]:value});
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            dispatch(updateForm(id, updateData));
            console.log('update');
            history.push('/done?update');
        } catch (error) {
            console.log(error);
        }
    }

    const nothing =()=>{
        //aca no pasa nada
    }




    return <div 
    className={item.type === 'submit' ? (`${styles.Submit}`) : (`${styles.ItemContainer} `)}
    onClick={item.type === 'submit' ? submitHandler : nothing }
    >
        

        <label htmlFor={item.name}>{item.label}</label>
        {(item.type !== 'select' && item.type !== 'radio' && item.type !== 'submit')?
            <input type={item.type} 
            value={info[item.name]} 
            onChange={changeHandler} 
            name={item.name}
            id={item.name}
            required={item.required}
            disabled={isDisabled}
            checked={info[item.name]}
            />
        :(<></>)}

        {item.type === 'select'?
        (<select name={item.name} 
        id={item.name} 
        onChange={changeHandler} 
        disabled={isDisabled}
        >
            <option value={info[item.name]}>{info[item.name]}</option>
            {item.options.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>)
        :(<></>)}

        {item.type === 'radio'? 
        (<>{item.options.map(option => (
            <div key={option.value}>
                <input type={item.type} name={item.name} id={option.value} onChange={changeHandler} 
                disabled={isDisabled}
                checked={info[item.name] === option.value}
                />
                <label htmlFor={option.value}>{option.value}</label>
            </div>
        ))}</>)
        :(<></>)}
    </div>
}

export default Item;
