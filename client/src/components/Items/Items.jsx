import styles from './Items.module.css';
import structure from '../../data/form.json'
import Item from '../Item/Item';
import { useState } from 'react';

const Items = () => {

    const [form, setForm] = useState({})


    return <div className={styles.ItemsContainer}>
        {structure.items.map(item => {
            return <Item key={item.name} item={item} form={form} setForm={setForm}></Item>
        })}
    </div>
}

export default Items;
