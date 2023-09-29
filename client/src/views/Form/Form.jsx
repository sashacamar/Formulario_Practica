import styles from './Form.module.css';
import Items from '../../components/Items/Items';

const Form = () => {
    return <div className={styles.FormContainer}>
        <div className={styles.header}>
            <h1>FORM</h1>
            Contanos un poco sobre vos.
        </div>
        <Items></Items>
    </div>
}

export default Form;
