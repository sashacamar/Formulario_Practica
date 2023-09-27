import { useDispatch, useSelector } from 'react-redux';
import styles from './Response.module.css';
import { useEffect, useState } from 'react';
import { getFormById } from '../../redux/actions';
import structure from '../../data/form.json';
import Item from '../../components/ItemResponse/ItemResponse';

const Response = () => {
    const response = useSelector(state=>state.form);
    const id = useSelector(state=>state.id);
    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState(response)

    useEffect(()=>{
        dispatch(getFormById(id));
    },[id])

    const [isDisabled, setIsDisabled] = useState(true);
    const handleToggleEdit = (event) => {
        event.preventDefault();
        setIsDisabled(!isDisabled)
    }

    return <div className={styles.ResponseContainer}>
        <button onClick={handleToggleEdit}>Editar Informacion</button>
        {structure.items.map(item => <Item item={item} 
        response={response} 
        id={id} 
        updateData={updateData}
        setUpdateData={setUpdateData}
        isDisabled={isDisabled}></Item>)}
    </div>
}

export default Response;
