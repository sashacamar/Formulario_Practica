import { useDispatch, useSelector } from 'react-redux';
import styles from './Response.module.css';
import { useEffect } from 'react';
import { getFormById } from '../../redux/actions';
import structure from '../../data/form.json';
import Item from '../../components/ItemResponse/ItemResponse';

const Response = () => {
    const response = useSelector(state=>state.form);
    const id = useSelector(state=>state.id);
    const dispatch = useDispatch();

    let updateData = response;

    useEffect(()=>{
        dispatch(getFormById(id));
    },[id])


    return <div className={styles.ResponseContainer}>
        {structure.items.map(item => <Item item={item} response={response}></Item>)}
    </div>
}

export default Response;
